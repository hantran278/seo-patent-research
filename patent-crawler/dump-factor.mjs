// Dump compact reading material for one factor group: title, abstract, first independent claim, summary.
// usage: node dump-factor.mjs site-quality [maxChars=1800]
import fs from 'node:fs';
import { CORE } from './core.mjs';
import { loadTranslations } from './translations.mjs';

const factor = process.argv[2];
const max = Number(process.argv[3] || 1800);
const vi = loadTranslations();
const norm = (t) => t.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
const seen = new Set();
for (const id of CORE[factor]) {
  const p = JSON.parse(fs.readFileSync(`data/raw/${id}.json`, 'utf8'));
  const key = p.priority_date + '|' + norm(p.title);
  if (seen.has(key)) continue;
  seen.add(key);
  const claim = p.claims.find((c) => !c.dependent)?.text || '';
  const d = p.description;
  const i = d.search(/\n## (BRIEF )?SUMMARY|\n## OVERVIEW/i);
  const summary = i >= 0 ? d.slice(i, i + max) : d.slice(0, max);
  console.log(`\n===== ${id} | ${vi[id]?.t || p.title} | ${p.priority_date} | ${p.inventors.join(', ')}`);
  console.log('CLAIM: ' + claim.slice(0, max));
  console.log('SUMMARY: ' + summary.replace(/\n+/g, ' '));
}
