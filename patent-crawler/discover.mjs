// Discover Google search/ranking patents by theme -> data/candidates.json
import fs from 'node:fs';
import { search, sleep } from './lib.mjs';

const PER_QUERY = Number(process.argv[2] || 25);

export const THEMES = {
  'links': ['("link analysis")', '("linked database")', '("anchor text")', '("seed pages")', '("reasonable surfer" OR "link weight")'],
  'user-signals': ['("user feedback") (ranking) (search results)', '("click data" OR "selection data")', '("long click" OR "dwell time")', '("implicit user feedback")'],
  'site-quality': ['("site quality")', '("quality score") (search results)', '("navigational queries")', '("document quality") (ranking)'],
  'freshness': ['("historical data") (document) (ranking)', '(freshness) (search results)', '("document changes") (ranking)'],
  'spam': ['(spam) (web documents) (search)', '("link spam" OR "web spam")', '("manipulation") (ranking) (search engine)'],
  'topicality': ['("phrase-based") (information retrieval)', '(topicality) (document) (score)', '("related phrases")'],
  'entities': ['("knowledge graph") (search results)', '(entity) (ranking) (search query)', '("entity references")'],
  'passages': ['("answer passage")', '("candidate passages") (search)', '("featured snippet" OR "answer box")'],
  'query-understanding': ['("query rewriting" OR "query revision")', '(synonyms) (search query)', '("query intent") (search)', '("query refinement")'],
  'duplicates': ['("near-duplicate") (documents)', '("duplicate content") (search)'],
  'local': ['("local search") (ranking)', '(business listings) (search results) (location)'],
  'information-gain': ['("information gain") (documents)'],
  'authorship': ['("agent rank")', '(author) (reputation) (content) (search)'],
  'page-experience': ['(page layout) (advertisements) (ranking)', '("mobile-friendly" OR "mobile friendly")', '("page load") (ranking)'],
  'reviews': ['(reviews) (quality) (ranking) (search)'],
  'semantic-retrieval': ['(embedding) (neural network) (ranking) (search results)', '("semantic similarity") (query) (document)'],
  'trust': ['(trust) (search result ranking)', '("authoritative sources")'],
  'serp-features': ['("site links" OR sitelinks)', '("rich results" OR "structured data") (search)'],
  'crawl-index': ['("crawl") (scheduling) (documents)', '("index") (tier) (documents) (search)'],
};

// optional: node discover.mjs 25 theme1,theme2  -> only run these themes, merge into existing file
const only = process.argv[3]?.split(',');
const byId = new Map();
if (only && fs.existsSync('data/candidates.json'))
  for (const c of JSON.parse(fs.readFileSync('data/candidates.json', 'utf8'))) byId.set(c.id, c);
for (const [theme, queries] of Object.entries(THEMES)) {
  if (only && !only.includes(theme)) continue;
  for (const q of queries) {
    try {
      const { total, items } = await search({ q, assignee: 'Google', country: 'US', type: 'PATENT', language: 'ENGLISH', num: PER_QUERY });
      console.log(`${theme.padEnd(20)} ${String(total).padStart(6)}  ${q}`);
      items.forEach((it, rank) => {
        const cur = byId.get(it.id) || { ...it, themes: {}, hits: 0, best_rank: 999 };
        cur.themes[theme] = (cur.themes[theme] || 0) + 1;
        cur.hits++;
        cur.best_rank = Math.min(cur.best_rank, rank);
        byId.set(it.id, cur);
      });
    } catch (e) {
      console.log('FAIL', theme, q, e.message);
    }
    await sleep(1500);
  }
}

const list = [...byId.values()].sort((a, b) => b.hits - a.hits || a.best_rank - b.best_rank);
fs.writeFileSync('data/candidates.json', JSON.stringify(list, null, 1));
console.log('unique candidates:', list.length);
