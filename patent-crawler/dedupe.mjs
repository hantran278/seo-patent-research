// Collapse patent families (same priority date + near-identical title) -> data/families.json
import fs from 'node:fs';

const list = JSON.parse(fs.readFileSync('data/candidates.json', 'utf8'));
const norm = (t) => t.toLowerCase().replace(/…$/, '').replace(/[^a-z0-9 ]/g, '').slice(0, 60);
const fam = new Map();
for (const c of list) {
  const key = (c.priority_date || '') + '|' + norm(c.title);
  const f = fam.get(key);
  if (!f) fam.set(key, { ...c, family: [c.id] });
  else {
    f.family.push(c.id);
    f.hits += c.hits;
    for (const [t, n] of Object.entries(c.themes)) f.themes[t] = (f.themes[t] || 0) + n;
    f.best_rank = Math.min(f.best_rank, c.best_rank);
    // keep the earliest-granted member as representative
    if ((c.grant_date || '9') < (f.grant_date || '9')) Object.assign(f, { id: c.id, grant_date: c.grant_date, title: c.title });
  }
}
const out = [...fam.values()].sort((a, b) => b.hits - a.hits || a.best_rank - b.best_rank);
fs.writeFileSync('data/families.json', JSON.stringify(out, null, 1));
fs.writeFileSync(
  'data/families.txt',
  out.map((c, i) => [i, c.id, c.hits, c.best_rank, Object.keys(c.themes).join('|'), (c.priority_date || '').slice(0, 4), c.title].join(' ; ')).join('\n')
);
console.log('families:', out.length);
