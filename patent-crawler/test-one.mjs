import fs from 'node:fs';
import { get, parsePatent } from './lib.mjs';
const id='US9031929B1';
const { text } = await get(`https://patents.google.com/patent/${id}/en`);
const p = parsePatent(text, id);
fs.writeFileSync(`data/raw/${id}.json`, JSON.stringify(p, null, 1));
console.log({...p, description: p.description.slice(0,600)+' ... len='+p.description.length, claims: p.claims.slice(0,2).map(c=>({...c,text:c.text.slice(0,200)})).concat([{n:p.claims.length, indep:p.claims.filter(c=>!c.dependent).length}]), cited_by: p.cited_by.length+' e.g. '+JSON.stringify(p.cited_by[0]), cites: p.cites.length, similar: p.similar.length});
