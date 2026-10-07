// Vietnamese translations live in data/vi/*.json as { "<patent id>": { "t": title, "a": abstract } }
import fs from 'node:fs';

export function loadTranslations() {
  const out = {};
  if (!fs.existsSync('data/vi')) return out;
  for (const f of fs.readdirSync('data/vi').filter((f) => f.endsWith('.json')))
    Object.assign(out, JSON.parse(fs.readFileSync('data/vi/' + f, 'utf8')));
  return out;
}
