// Core layer: hand-picked search/ranking patents, grouped by factor theme.
// Picked from data/families.txt (discovery) + well-known SEO patents (seeds, verified on crawl).
export const CORE = {
  'links': [
    'US6285999B1', 'US7058628B1', 'US6799176B1', 'US7269587B1', // PageRank (Stanford, licensed to Google)
    'US7716225B1', 'US10152520B1', // reasonable surfer
    'US9165040B1', 'US9953049B1', // seed-set distance PageRank
    'US10270791B1', 'US8825645B1', 'US10210256B2', 'US8595270B2', 'US8719276B1', 'US8762225B1',
    'US8768932B1', 'US8086594B1',
  ],
  'user-signals': [
    'US8661029B1', 'US9235627B1', 'US8938463B1', 'US8694511B1', 'US9092510B1', 'US9002817B2',
    'US8615514B1', 'US9697259B1', 'US9218397B1', 'US9767478B2',
  ],
  'site-quality': [
    'US9031929B1', 'US9760641B1', 'US8682892B1', 'US9183499B1', 'US8818982B1', 'US9569504B1',
    'US9195944B1', 'US9767157B2', 'US9002832B1', 'US20190155948A1', 'US10204138B1', 'US9244972B1',
    'US9454621B2', 'US8478751B1', 'US9116945B1', 'US9477714B1', 'US8965883B2', 'US20120265757A1',
  ],
  'freshness': [
    'US7346839B2', 'US8527524B2', 'US8266143B2', 'US9002867B1', 'US8874555B1', 'US8423885B1',
    'US9507826B1', 'US8224827B2', 'US9405805B2', 'US8782032B2',
  ],
  'spam': [
    'US7603350B1', 'US8244722B1', 'US8078629B2', 'US7603345B2', 'US8452746B2', 'US7953763B2',
    'US8874565B1', 'US9147154B2', 'US9336279B2',
  ],
  'topicality': [
    'US7536408B2', 'US7580921B2', 'US7567959B2', 'US7599914B2', 'US7584175B2', 'US7426507B1',
    'US9384224B2', 'US9361331B2', 'US9037573B2', 'US8631027B2', 'US8166045B1', 'US9223877B1',
    'US8060501B1', 'US8463772B1', 'US8626787B1', 'US10152535B1', 'US8402036B2', 'US9053156B1',
    'US7996379B1', 'US8688720B1', 'US8024372B2',
  ],
  'entities': [
    'US10339190B2', 'US9336211B1', 'US9390174B2', 'US10235423B2', 'US9275152B2', 'US10108700B2',
    'US9898554B2', 'US8843466B1', 'US9135238B2', 'US9760570B2', 'US9710549B2', 'US10068022B2',
    'US9047278B1', 'US10331706B1', 'US11403288B2', 'US9558186B2', 'US20230177360A1',
  ],
  'passages': [
    'US9940367B1', 'US10783156B1', 'US10180964B1', 'US9959315B1', 'US11409748B1', 'US10019513B1',
    'US9274683B2', 'US11093813B2', 'US9679027B1', 'US8655866B1', 'US20250181664A1',
  ],
  'generative-search': ['US11900068B1', 'US20240289395A1', 'US20240289407A1'],
  'query-understanding': [
    'US9697249B1', 'US8805867B2', 'US10685017B1', 'US8375049B2', 'US8321201B1', 'US8161041B1',
    'US9183297B1', 'US8868548B2', 'US9323806B2', 'US8458171B2', 'US9009146B1', 'US9483530B1',
    'US10387437B2', 'US8996554B2', 'US8577907B1', 'US9116976B1',
  ],
  'duplicates': [
    'US7711679B2', 'US8108412B2', 'US9275143B2', 'US8209339B1', 'US8452766B1', 'US8548972B1',
    'US8868559B2', 'US8713071B1', 'US10275434B1',
  ],
  'local': [
    'US8046371B2', 'US8312010B1', 'US8880516B2', 'US11893034B2', 'US7917490B2', 'US9189496B2',
    'US8433704B2', 'US11461336B2',
  ],
  'information-gain': ['US12013887B2'],
  'authorship': [
    'US7565358B2', 'US8296293B2', 'US8150842B2', 'US8645396B2', 'US8396879B1', 'US9442989B1',
    'US11868724B2',
  ],
  'page-experience': ['US8645362B1', 'US20160314215A1', 'US7676745B2', 'US11036804B1'],
  'reviews': ['US9317559B1', 'US10061767B1'],
  'crawl-index': ['US9355177B2', 'US8655864B1', 'US8032518B2', 'US8554759B1'],
  'serp-features': ['US10776435B2', 'US9720913B1', 'US20170270169A1'],
};

// Round 2: Google patents cited/citing by >=3 core patents (from data/suggestions.txt), hand-filtered.
const EXTRA = {
  'links': ['US6754873B1', 'US8959093B1', 'US6526440B1', 'US7260573B1', 'US8386495B1', 'US8577893B1',
    'US8127220B1', 'US7213198B1', 'US8166046B1', 'US8732187B1', 'US7028029B2', 'US9208229B2'],
  'user-signals': ['US8832083B1', 'US8396865B1', 'US7756887B1', 'US8874570B1', 'US8359309B1', 'US8423541B1',
    'US8001118B2', 'US7454417B2', 'US8959103B1', 'US8965882B1'],
  'freshness': ['US8909655B1', 'US8972391B1', 'US8924379B1', 'US9189526B1', 'US7797316B2', 'US8832088B1',
    'US8332408B1', 'US8239350B1', 'US7577655B2', 'US7568148B1', 'US8086953B1'],
  'site-quality': ['US8442984B1', 'US9558233B1', 'US9020927B1', 'US7971137B2', 'US8775924B1', 'US8903812B1',
    'US8078607B2', 'US8060497B1', 'US8548995B1', 'US8065296B1'],
  'spam': ['US7743045B2', 'US7302645B1', 'US8694374B1', 'US8752184B1', 'US8332415B1', 'US9178848B1', 'US8868536B1'],
  'topicality': ['US8892422B1', 'US8447760B1', 'US8090736B1', 'US7673253B1', 'US8595225B1'],
  'entities': ['US7769579B2', 'US8812435B1', 'US7953720B1', 'US8682913B1', 'US7831545B1', 'US7970766B1',
    'US7966291B1', 'US8244689B2', 'US8954438B1', 'US9110852B1'],
  'passages': ['US9323827B2'],
  'serp-features': ['US9081831B2', 'US8145617B1', 'US10007731B2'],
  'query-understanding': ['US7505964B2', 'US7636714B1', 'US8819000B1', 'US9152698B1', 'US9116957B1', 'US8661012B1',
    'US7565345B2', 'US9110975B1', 'US7925657B1', 'US8838587B1', 'US8738643B1'],
  'duplicates': ['US7627613B1', 'US7930400B1', 'US7509315B1'],
  'local': ['US8086690B1', 'US8005822B2', 'US9348925B2', 'US8200694B1', 'US8788490B1', 'US7451130B2', 'US9098582B1'],
  'crawl-index': ['US9501506B1', 'US9483568B1', 'US8042112B1', 'US7725452B1', 'US8666964B1', 'US8386459B1',
    'US7774782B1', 'US8868541B2', 'US8533226B1', 'US7925655B1'],
  'authorship': ['US8983970B1', 'US9177074B2', 'US9521182B1'],
  'reviews': ['US8438469B1'],
  'page-experience': ['US8019700B2', 'US9767169B1'],
};
for (const [f, ids] of Object.entries(EXTRA)) CORE[f] = [...new Set([...(CORE[f] || []), ...ids])];

export const FACTOR_LABELS = {
  'links': 'Liên kết & PageRank',
  'user-signals': 'Tín hiệu người dùng (click, Navboost)',
  'site-quality': 'Chất lượng site (Panda, site quality)',
  'freshness': 'Độ tươi & dữ liệu lịch sử',
  'spam': 'Chống spam & độ tin cậy',
  'topicality': 'Độ liên quan chủ đề & phrase-based indexing',
  'entities': 'Thực thể & Knowledge Graph',
  'passages': 'Passage ranking & featured snippet',
  'generative-search': 'Tìm kiếm tạo sinh (AI Overviews, AI Mode)',
  'query-understanding': 'Hiểu truy vấn (rewrite, synonym, intent)',
  'duplicates': 'Trùng lặp & canonical',
  'local': 'Local SEO',
  'information-gain': 'Information gain',
  'authorship': 'Tác giả & uy tín (E-E-A-T)',
  'page-experience': 'Trải nghiệm trang (tốc độ, mobile, layout)',
  'reviews': 'Đánh giá & cảm xúc',
  'crawl-index': 'Crawl & index',
  'serp-features': 'SERP features (sitelinks, snippet)',
};
