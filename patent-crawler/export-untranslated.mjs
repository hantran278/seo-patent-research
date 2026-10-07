// Print patents (family representatives) that still lack a Vietnamese translation, in batches.
// usage: node export-untranslated.mjs [batchSize=25] [batchIndex=0]
import fs from 'node:fs';
import { loadTranslations } from './translations.mjs';

const size = Number(process.argv[2] || 25);
const idx = Number(process.argv[3] || 0);
const vi = loadTranslations();
const norm = (t) => t.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
const fams = new Map();
for (const f of fs.readdirSync('data/raw')) {
  const p = JSON.parse(fs.readFileSync('data/raw/' + f, 'utf8'));
  const k = p.priority_date + '|' + norm(p.title);
  fams.set(k, [...(fams.get(k) || []), p]);
}
const todo = [...fams.values()]
  .filter((g) => !g.some((p) => vi[p.id]))
  .map((g) => g.sort((a, b) => a.publication_date.localeCompare(b.publication_date))[0])
  .sort((a, b) => a.id.localeCompare(b.id));
console.error(`untranslated: ${todo.length}`);
for (const p of todo.slice(idx * size, (idx + 1) * size)) console.log(JSON.stringify({ id: p.id, t: p.title, a: p.abstract }));
