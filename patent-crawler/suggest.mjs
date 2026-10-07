// Rank Google patents referenced by core patents but not yet in the core list -> data/suggestions.txt
import fs from 'node:fs';
import { CORE } from './core.mjs';

const core = new Set(Object.values(CORE).flat());
const raws = fs.readdirSync('data/raw').map((f) => JSON.parse(fs.readFileSync('data/raw/' + f, 'utf8')));
const coreTitles = new Set(raws.map((p) => p.title.toLowerCase()));
const score = new Map();
for (const p of raws)
  for (const [kind, arr] of [['cites', p.cites], ['cited_by', p.cited_by]])
    for (const r of arr || []) {
      if (core.has(r.id) || !/google/i.test(r.assignee || '') || !/^US\d+B\d$/.test(r.id)) continue;
      if (coreTitles.has(r.title.toLowerCase())) continue; // continuation of a core patent
      const s = score.get(r.id) || { ...r, n: 0, from: new Set() };
      s.n++;
      s.from.add(p.id);
      score.set(r.id, s);
    }
const list = [...score.values()].sort((a, b) => b.from.size - a.from.size);
fs.writeFileSync('data/suggestions.txt', list.map((s) => `${s.from.size}\t${s.id}\t${s.title}`).join('\n'));
console.log('suggestions:', list.length, 'referenced by >=3 core:', list.filter((s) => s.from.size >= 3).length);
