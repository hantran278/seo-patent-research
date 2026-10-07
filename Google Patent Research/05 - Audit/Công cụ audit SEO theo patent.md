---
tags: [audit, tool]
created: 2026-09-30
---

# Công cụ audit SEO theo patent

**Vị trí code:** `C:\Users\PC\Documents\Claude Code\seo-audit\` (xem `README.md` trong thư mục đó)

```
node audit.mjs https://domain.com --brand "Tên thương hiệu" --gsc Queries.csv --backlinks backlinks.csv
```

Kết quả: một file HTML tương tác trong `seo-audit\reports\` gồm 5 tab — **Tổng quan** (điểm theo nhóm, việc nên làm trước), **Vấn đề** (lọc theo nhóm/mức độ, mỗi vấn đề có "vì sao", "cách khắc phục", patent căn cứ kèm link mở note này trong Obsidian), **Trang** (PageRank nội bộ, số từ, link vào, TTFB), **GSC** (biểu đồ CTR theo vị trí), **Patent** (các patent được dùng làm căn cứ).

## Checklist kỹ thuật Enosta
Công cụ đánh giá tự động checklist **Enosta Dev_SEO Checklist** (124 hạng mục, 9 sheet: Planning, Nền tảng & Crawl, Kiến trúc & URL, Template & Metadata, Content & Media, Performance & CWV, Tracking & Pre-launch, GEO & AI Search, Post-launch) và xuất lại file Excel đã điền trạng thái + bằng chứng + patent căn cứ. Hạng mục kỹ thuật được gắn patent khi có cơ chế tương ứng (ví dụ canonical → [[US8868559B2 - Chọn tài liệu đại diện cho một nhóm tài liệu trùng lặp (canonical)]], sitemap lastmod → [[US9355177B2 - Lập lịch crawl dựa trên sitemap của website]]).

## Ánh xạ module ↔ nhóm yếu tố

| Module | Nhóm yếu tố | Nguồn dữ liệu |
|---|---|---|
| Crawl & index | [[Crawl & index]] | Crawl |
| Trùng lặp & canonical | [[Trùng lặp & canonical]] | Crawl |
| Chất lượng site | [[Chất lượng site (Panda, site quality)]] | Crawl + GSC (tỷ lệ thương hiệu) |
| Liên kết & PageRank | [[Liên kết & PageRank]] | Crawl + file backlink |
| Tín hiệu người dùng | [[Tín hiệu người dùng (click, Navboost)]] | GSC |
| Chống spam | [[Chống spam & độ tin cậy]] | Crawl |
| Chủ đề & cấu trúc | [[Độ liên quan chủ đề & phrase-based indexing]], [[Thực thể & Knowledge Graph]] | Crawl |
| Ý định & từ khoá | [[Hiểu truy vấn (rewrite, synonym, intent)]] | GSC (truy vấn + trang) |
| Thực thể & thương hiệu | [[Thực thể & Knowledge Graph]] | Crawl |
| Trải nghiệm trang | [[Trải nghiệm trang (tốc độ, mobile, layout)]] | Crawl |
| Tác giả & độ tươi | [[Tác giả & uy tín (E-E-A-T)]], [[Độ tươi & dữ liệu lịch sử]] | Crawl |

## Chưa có trong phiên bản 1
- [ ] Trọng số theo leak Google/Yandex (hiện ưu tiên theo P1/P2/P3 tự đặt)
- [ ] Module related phrases so với top 10 (cần nguồn SERP)
- [ ] Gom từ khoá theo độ trùng SERP (cần nguồn SERP)
- [ ] Render JavaScript (site SPA)
- [ ] Module Local SEO, Passage/featured snippet, bảng đối chiếu fact thương hiệu đa nguồn
