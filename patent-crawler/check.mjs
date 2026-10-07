import fs from 'node:fs';
import { CORE } from './core.mjs';
for (const [f, ids] of Object.entries(CORE)) for (const id of ids) {
  const p = JSON.parse(fs.readFileSync(`data/raw/${id}.json`,'utf8'));
  console.log([f, id, p.priority_date, (p.assignee_original||'').slice(0,20), p.claims.length, p.description.length, p.title.slice(0,70)].join(' | '));
}
