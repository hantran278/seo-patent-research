import * as cheerio from 'cheerio';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) patent-research-script';
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function get(url, tries = 4) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA } });
      if (r.status === 429 || r.status >= 500) throw new Error('HTTP ' + r.status);
      if (!r.ok) return { status: r.status, text: '' };
      return { status: r.status, text: await r.text() };
    } catch (e) {
      if (i === tries - 1) throw e;
      await sleep(5000 * (i + 1));
    }
  }
}

// Google Patents search. params: e.g. { q: '("site quality")', assignee: 'Google', country: 'US', type: 'PATENT', num: 100 }
export async function search(params) {
  const inner = Object.entries(params)
    .flatMap(([k, v]) => (Array.isArray(v) ? v : [v]).map((x) => `${k}=${encodeURIComponent(x)}`))
    .join('&');
  const { text } = await get('https://patents.google.com/xhr/query?url=' + encodeURIComponent(inner) + '&exp=');
  const j = JSON.parse(text);
  const out = [];
  for (const c of j.results?.cluster || [])
    for (const r of c.result || []) {
      const p = r.patent;
      out.push({
        id: p.publication_number,
        title: clean(p.title),
        assignee: clean(p.assignee),
        priority_date: p.priority_date,
        grant_date: p.grant_date,
      });
    }
  return { total: j.results?.total_num_results ?? 0, items: out };
}

export const clean = (s) =>
  (s || '')
    .replace(/<[^>]+>/g, '')
    .replace(/&hellip;/g, '…')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

function rows($, prop) {
  return $(`tr[itemprop="${prop}"]`)
    .map((_, el) => {
      const $r = $(el);
      return {
        id: $r.find('[itemprop="publicationNumber"]').first().text().trim(),
        title: clean($r.find('[itemprop="title"]').first().text()),
        assignee: clean($r.find('[itemprop="assigneeOriginal"]').first().text()),
      };
    })
    .get()
    .filter((x) => x.id);
}

export function parsePatent(html, id) {
  const $ = cheerio.load(html);
  const meta = (n) => $(`meta[name="${n}"]`).attr('content')?.trim() || '';
  const time = (p) => $(`time[itemprop="${p}"]`).first().text().trim();
  const cpc = [
    ...new Set(
      $('[itemprop="classifications"] [itemprop="Code"]')
        .map((_, e) => $(e).text().trim())
        .get()
        .filter((c) => c.includes('/'))
    ),
  ];
  const claims = $('div.claims div.claim[num]')
    .map((_, el) => {
      const $c = $(el);
      return { text: clean($c.text()), dependent: $c.find('claim-ref').length > 0 };
    })
    .get();
  const descEl = $('section[itemprop="description"] [itemprop="content"]');
  const description = descEl
    .find('heading, div.description-paragraph, p, div.description-line')
    .map((_, e) => {
      const t = clean($(e).text());
      return e.tagName === 'heading' ? `\n## ${t}\n` : t;
    })
    .get()
    .filter(Boolean)
    .join('\n\n');
  return {
    id,
    title: clean(meta('DC.title')),
    abstract: clean($('section[itemprop="abstract"] [itemprop="content"]').text()),
    inventors: $('dd[itemprop="inventor"]').map((_, e) => clean($(e).text())).get(),
    assignee_original: clean($('dd[itemprop="assigneeOriginal"]').first().text()),
    assignee_current: clean($('dd[itemprop="assigneeCurrent"]').first().text()),
    priority_date: time('priorityDate'),
    filing_date: time('filingDate'),
    publication_date: time('publicationDate'),
    status: clean($('[itemprop="legalStatusIfi"] [itemprop="status"]').first().text()),
    expiration: $('[itemprop="legalStatusIfi"] time[itemprop="expiration"]').first().text().trim(),
    cpc,
    claims,
    description: description || clean(descEl.text()),
    cited_by: rows($, 'forwardReferencesOrig').concat(rows($, 'forwardReferencesFamily')),
    cites: rows($, 'backwardReferencesOrig').concat(rows($, 'backwardReferencesFamily')),
    similar: $('tr[itemprop="similarDocuments"]')
      .map((_, el) => ({
        id: $(el).find('[itemprop="publicationNumber"]').first().text().trim(),
        title: clean($(el).find('[itemprop="title"]').first().text()),
      }))
      .get()
      .filter((x) => x.id),
    source_url: `https://patents.google.com/patent/${id}/en`,
  };
}
