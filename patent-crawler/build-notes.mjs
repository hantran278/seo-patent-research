// Generate Obsidian notes from data/raw/*.json into the vault.
// Keeps human-edited sections: a note whose frontmatter status is not "todo" is never overwritten.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CORE, FACTOR_LABELS } from './core.mjs';
import { loadTranslations } from './translations.mjs';

const VI = loadTranslations();
// Vietnamese analysis: data/analysis/<factor>.json as { "<id>": { relevance, mech, seo, audit[], leak } }
const AN = {};
if (fs.existsSync('data/analysis'))
  for (const f of fs.readdirSync('data/analysis').filter((f) => f.endsWith('.json')))
    Object.assign(AN, JSON.parse(fs.readFileSync('data/analysis/' + f, 'utf8')));
// a note may be regenerated only if the script owns it (status todo, or auto-generated analysis)
const ownedByScript = (text) => /^status: todo$/m.test(text) || /^auto: true$/m.test(text);

// the vault folder sits next to this crawler in the same repo
const VAULT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'Google Patent Research');
const CORE_DIR = path.join(VAULT, '01 - Core Patents');
const FACTOR_DIR = path.join(VAULT, '03 - Ranking Factors');

const factorsOf = new Map();
for (const [f, ids] of Object.entries(CORE)) for (const id of ids) factorsOf.set(id, [...(factorsOf.get(id) || []), f]);

const raws = fs
  .readdirSync('data/raw')
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(fs.readFileSync(path.join('data/raw', f), 'utf8')))
  .filter((p) => p.title);

// --- collapse families (continuations share priority date + title) -> keep the earliest publication
const norm = (t) => t.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
const fams = new Map();
for (const p of raws) {
  const key = p.priority_date + '|' + norm(p.title);
  const g = fams.get(key) || [];
  g.push(p);
  fams.set(key, g);
}
const patents = [];
const alias = new Map(); // any family member id -> representative id
for (const g of fams.values()) {
  g.sort((a, b) => (a.publication_date || '9').localeCompare(b.publication_date || '9'));
  const rep = g[0];
  rep.family = g.slice(1).map((x) => x.id);
  rep.factors = [...new Set(g.flatMap((x) => factorsOf.get(x.id) || []))];
  rep.vi = g.map((x) => VI[x.id]).find(Boolean) || null;
  rep.an = g.map((x) => AN[x.id]).find(Boolean) || null;
  for (const x of g) alias.set(x.id, rep.id);
  patents.push(rep);
}

const safe = (s) => s.replace(/[\\/:*?"<>|#^[\]]/g, '').replace(/\s+/g, ' ').trim().slice(0, 90);
const noteName = (p) => `${p.id} - ${safe(p.vi?.t || p.title)}`;
const nameById = new Map(patents.map((p) => [p.id, noteName(p)]));
const link = (id) => (alias.has(id) ? `[[${nameById.get(alias.get(id))}]]` : null);
const yamlStr = (s) => JSON.stringify(s ?? '');
const yamlList = (a) => '[' + a.map(yamlStr).join(', ') + ']';
const quote = (text) => text.split('\n').map((l) => '> ' + l).join('\n');

function related(p) {
  const seen = new Set([p.id, ...p.family]);
  const inVault = [];
  const external = [];
  for (const [kind, arr] of [['Trích dẫn', p.cites], ['Được trích dẫn bởi', p.cited_by], ['Tương tự', p.similar]]) {
    for (const r of arr || []) {
      const rep = alias.get(r.id);
      if (rep && !seen.has(rep)) { seen.add(rep); inVault.push(`- ${link(r.id)} _(${kind})_`); }
      else if (!rep && !seen.has(r.id) && /google/i.test(r.assignee || '') && kind !== 'Tương tự') {
        seen.add(r.id);
        external.push(`- [${r.id}](https://patents.google.com/patent/${r.id}/en) ${r.title} _(${kind})_`);
      }
    }
  }
  return { inVault, external: external.slice(0, 15) };
}

function render(p) {
  const indep = p.claims.filter((c) => !c.dependent);
  const rel = related(p);
  const cpc = p.cpc.filter((c) => /^G06F16|^G06F17\/30|^G06N|^G06Q/.test(c)).slice(0, 12);
  const an = p.an;
  const status = an ? 'analyzed' : 'todo';
  const tags = ['patent/core', 'status/' + status, ...(an ? ['seo/' + an.relevance.replace(' ', '-')] : []), ...p.factors.map((f) => 'factor/' + f)];
  const audit = an?.audit?.length ? an.audit.map((a) => `- [ ] ${a}`).join('\n') : an ? '_Không có hành động audit trực tiếp._' : '- [ ] _Chưa có_';
  return `---
patent_id: ${p.id}
title: ${yamlStr(p.vi?.t || p.title)}
title_en: ${yamlStr(p.title)}
assignee: ${yamlStr(p.assignee_current || p.assignee_original)}
assignee_original: ${yamlStr(p.assignee_original)}
priority_date: ${p.priority_date}
filing_date: ${p.filing_date}
grant_date: ${p.publication_date}
legal_status: ${yamlStr(p.status)}
expiration: ${p.expiration || ''}
cpc: ${yamlList(cpc)}
inventors: ${yamlList(p.inventors)}
layer: core
factors: ${yamlList(p.factors)}
family: ${yamlList(p.family)}
status: ${status}${an ? `\nseo_relevance: ${an.relevance}\nauto: true` : ''}
source_url: ${p.source_url}
tags: ${yamlList(tags)}
---

# ${p.vi?.t || p.title}
${p.vi ? `*Tên gốc: ${p.title}*\n` : ''}
> [!info] ${p.id} · ${p.assignee_current || p.assignee_original} · ưu tiên ${p.priority_date} · cấp ${p.publication_date}
> **Tác giả:** ${p.inventors.join(', ') || '—'}
> **Nhóm yếu tố:** ${p.factors.map((f) => `[[${FACTOR_LABELS[f]}]]`).join(', ')}
> **Trạng thái pháp lý:** ${p.status || '—'}${p.expiration ? ` (hết hạn ${p.expiration})` : ''} · [Google Patents](${p.source_url})${p.family.length ? `\n> **Cùng họ:** ${p.family.join(', ')}` : ''}${an ? `\n> **Mức liên quan SEO:** ${an.relevance}` : ''}

## Tóm tắt
${p.vi?.a || '_Chưa dịch._'}

> [!quote]- Tóm tắt gốc (tiếng Anh)
${quote(p.abstract || '(không có abstract)')}

## Cơ chế hoạt động
${an?.mech || '_Chưa phân tích._'}

## Claims chính
${indep.length} claim độc lập / ${p.claims.length} claim.

> [!quote]- Claims độc lập (bản gốc tiếng Anh)
${quote(indep.slice(0, 3).map((c) => c.text).join('\n\n') || '(không lấy được claims)')}

## Liên hệ với leak
- **Google leak 2024:** ${an?.leak || '_chưa đối chiếu_'}
- **Yandex 2023:** _chưa đối chiếu_

## Ý nghĩa SEO
${an?.seo || '_Chưa phân tích._'}

## Hành động audit
${audit}

## Patent liên quan
${rel.inVault.join('\n') || '_Chưa có trong vault_'}
${rel.external.length ? `\n**Patent Google liên quan khác (chưa có trong vault):**\n${rel.external.join('\n')}` : ''}

## Toàn văn mô tả
> [!note]- Bấm để mở toàn văn (bản gốc tiếng Anh)
${quote(p.description || '(không lấy được mô tả)')}
`;
}

fs.mkdirSync(CORE_DIR, { recursive: true });
let written = 0, kept = 0, removed = 0;
const generated = new Set();
for (const p of patents) {
  const file = path.join(CORE_DIR, noteName(p) + '.md');
  generated.add(path.basename(file));
  if (fs.existsSync(file) && !ownedByScript(fs.readFileSync(file, 'utf8'))) { kept++; continue; }
  fs.writeFileSync(file, render(p));
  written++;
}
// remove stale auto-generated notes (e.g. renamed after translation); never touch edited ones
for (const f of fs.readdirSync(CORE_DIR)) {
  if (generated.has(f) || !f.endsWith('.md')) continue;
  const full = path.join(CORE_DIR, f);
  if (ownedByScript(fs.readFileSync(full, 'utf8'))) { fs.unlinkSync(full); removed++; }
}

// --- factor hub notes
fs.mkdirSync(FACTOR_DIR, { recursive: true });
for (const [f, label] of Object.entries(FACTOR_LABELS)) {
  const list = patents.filter((p) => p.factors.includes(f)).sort((a, b) => a.priority_date.localeCompare(b.priority_date));
  const file = path.join(FACTOR_DIR, label + '.md');
  const body = `---
factor: ${f}
theme: ${yamlStr(label)}
priority:
yandex_consensus:
patents: ${yamlList(list.map((p) => p.id))}
tags: [factor, factor/${f}]
---

# ${label}

## Định nghĩa
_Chưa phân tích._

## Tín hiệu leak liên quan
- **Google:** _chưa đối chiếu_
- **Yandex:** _chưa đối chiếu_

## Patent giải thích (${list.length})
<!-- auto:patents -->
${list.map((p) => `- [[${noteName(p)}]] (${p.priority_date.slice(0, 4)})${p.an ? ` · SEO: **${p.an.relevance}**` : ''}`).join('\n')}
<!-- /auto:patents -->

## Cách audit
_Chưa có._

## Việc cần làm
- [ ] _Chưa có_
`;
  if (fs.existsSync(file)) {
    // only refresh the auto-generated patent list, keep everything else the user wrote
    const cur = fs.readFileSync(file, 'utf8');
    const auto = body.match(/<!-- auto:patents -->[\s\S]*<!-- \/auto:patents -->/)[0];
    fs.writeFileSync(
      file,
      cur
        .replace(/<!-- auto:patents -->[\s\S]*<!-- \/auto:patents -->/, auto)
        .replace(/## Patent giải thích \(\d+\)/, `## Patent giải thích (${list.length})`)
        .replace(/^patents: .*$/m, `patents: ${yamlList(list.map((p) => p.id))}`)
    );
  } else fs.writeFileSync(file, body);
}

console.log(`raw: ${raws.length}, unique patents: ${patents.length}, notes written: ${written}, kept (edited): ${kept}, stale removed: ${removed}`);
