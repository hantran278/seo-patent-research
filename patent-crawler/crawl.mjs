// Politely fetch full patent pages -> data/raw/<id>.json (skips ones already saved)
// usage: node crawl.mjs [delaySeconds=10]
import fs from 'node:fs';
import { get, parsePatent, sleep } from './lib.mjs';
import { CORE } from './core.mjs';

const DELAY = Number(process.argv[2] || 10) * 1000;
const ids = [...new Set(Object.values(CORE).flat())];
const todo = ids.filter((id) => !fs.existsSync(`data/raw/${id}.json`));
console.log(`core: ${ids.length}, to fetch: ${todo.length}`);

const failed = [];
for (const [i, id] of todo.entries()) {
  let done = false;
  for (let attempt = 0; attempt < 12 && !done; attempt++) {
    try {
      const { status, text } = await get(`https://patents.google.com/patent/${id}/en`, 1);
      if (status === 404) { console.log(`[${i + 1}/${todo.length}] ${id} 404`); failed.push(id); done = true; break; }
      const p = parsePatent(text, id);
      if (!p.title) throw new Error('empty parse');
      fs.writeFileSync(`data/raw/${id}.json`, JSON.stringify(p, null, 1));
      console.log(`[${i + 1}/${todo.length}] ${id} ok  ${p.title.slice(0, 70)}`);
      done = true;
    } catch (e) {
      const wait = Math.min(5 * (attempt + 1), 20) * 60 * 1000; // blocked -> back off 5, 10, 15, 20, 20... min
      console.log(`[${i + 1}/${todo.length}] ${id} ${e.message} -> waiting ${wait / 60000} min`);
      await sleep(wait);
    }
  }
  if (!done) failed.push(id);
  await sleep(DELAY + Math.random() * 4000);
}
fs.writeFileSync('data/failed.json', JSON.stringify(failed, null, 1));
console.log('finished. failed:', failed);
