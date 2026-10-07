---
title: Google Patent Research — Index
created: 2026-09-30
tags: [moc, google-patent-research]
---

# Google Patent Research

Kho nghiên cứu **bằng sáng chế (patent) của Google** liên quan đến Search/Ranking, đối chiếu với **Google Content Warehouse leak (2024)** và **Yandex source leak (2023)**, để làm nền tảng cho **quy trình audit website SEO**.

## Mục tiêu
1. Thu thập patent Google theo 2 lớp:
   - **Lớp lõi** (~150–300 patent): đọc toàn văn, phân tích cơ chế, gắn với yếu tố ranking.
   - **Lớp mở rộng** (vài nghìn patent nhóm search/ranking): metadata + tóm tắt để tra cứu.
2. Nhóm tín hiệu leak thành các **nhóm yếu tố ranking**, chấm độ đồng thuận Google ↔ Yandex.
3. Dùng patent để giải thích *vì sao / như thế nào* từng yếu tố vận hành.
4. Suy ra **checklist audit** có thể áp dụng cho website.

## Cấu trúc thư mục
| Thư mục | Nội dung |
|---|---|
| `01 - Core Patents/` | Lớp lõi — 1 note/patent, phân tích sâu |
| `02 - Extended Patents/` | Lớp mở rộng — metadata + tóm tắt |
| `03 - Ranking Factors/` | Nhóm yếu tố ranking, link tới patent + tín hiệu leak |
| `04 - Leak Signals/` | Tín hiệu từ Google leak 2024 & Yandex 2023 |
| `05 - Audit/` | Checklist / quy trình audit suy ra từ các lớp trên |
| `_Templates/` | Template cho note patent và note yếu tố |

## Quy ước
- **Tên note patent:** `US1234567B2 - Tên ngắn.md`
- **Tên note yếu tố:** `F01.1 - Tên yếu tố.md`
- **Tag:**
  - `#patent/core`, `#patent/extended`
  - `#factor/<nhóm>` (vd. `#factor/site-quality`, `#factor/links`, `#factor/user-signals`)
  - `#status/todo`, `#status/read`, `#status/analyzed`

## Nguồn dữ liệu
- USPTO PatentsView API — danh sách & metadata patent
- Google Patents (patents.google.com) — toàn văn, claims, citations
- Google Content Warehouse API leak (05/2024)
- Yandex source code leak (01/2023)

## Lưu ý khi đọc
> [!warning]
> - Có patent **không có nghĩa** Google đang dùng trong ranking.
> - Leak Google chỉ có **tên & mô tả thuộc tính**, không có trọng số → mức ưu tiên là suy luận.
> - Google ≠ Yandex; "đồng thuận" chỉ là tín hiệu tham khảo.
> - Mọi kết luận nên xem là **giả thuyết cần test** trên site thật.

## Số liệu hiện tại
- **262 patent lõi** trong `01 - Core Patents` (275 bản tải về, đã gộp 13 bản cùng họ). Tiêu đề và tóm tắt đã dịch tiếng Việt; claims và toàn văn gốc tiếng Anh nằm trong khung thu gọn.
- **18 nhóm yếu tố** trong `03 - Ranking Factors`:

| Nhóm yếu tố | Số patent |
|---|---|
| [[Hiểu truy vấn (rewrite, synonym, intent)]] | 27 |
| [[Thực thể & Knowledge Graph]] | 27 |
| [[Chất lượng site (Panda, site quality)]] | 26 |
| [[Liên kết & PageRank]] | 25 |
| [[Độ liên quan chủ đề & phrase-based indexing]] | 25 |
| [[Độ tươi & dữ liệu lịch sử]] | 21 |
| [[Tín hiệu người dùng (click, Navboost)]] | 19 |
| [[Local SEO]] | 15 |
| [[Chống spam & độ tin cậy]] | 15 |
| [[Crawl & index]] | 13 |
| [[Trùng lặp & canonical]] | 11 |
| [[Passage ranking & featured snippet]] | 10 |
| [[Tác giả & uy tín (E-E-A-T)]] | 9 |
| [[SERP features (sitelinks, snippet)]] | 6 |
| [[Trải nghiệm trang (tốc độ, mobile, layout)]] | 6 |
| [[Đánh giá & cảm xúc]] | 3 |
| [[Tìm kiếm tạo sinh (AI Overviews, AI Mode)]] | 3 |
| [[Information gain]] | 1 |

## Cách dùng
- Bắt đầu từ một note nhóm yếu tố → mở từng patent trong danh sách.
- Tìm nhanh: `Ctrl+Shift+F` trong Obsidian (tìm cả trong toàn văn gốc), hoặc lọc theo tag `#factor/site-quality`, `#status/todo`…
- Khi đã phân tích xong một patent, đổi `status: todo` → `status: analyzed` trong frontmatter. Script sẽ **không ghi đè** note đó ở các lần chạy sau.
- Script sinh dữ liệu: `C:\Users\PC\Documents\Claude Code\patent-crawler\` (`crawl.mjs` → `build-notes.mjs`).

## Trạng thái
- [x] Tạo cấu trúc thư mục & template
- [x] Crawl lớp lõi (262 patent) + dịch tiêu đề/tóm tắt
- [ ] Viết phần "Cơ chế hoạt động" & "Ý nghĩa SEO" cho từng patent
  - [x] [[Chất lượng site (Panda, site quality)]] — 26/26 patent + note tổng hợp & quy trình audit
  - [x] [[Liên kết & PageRank]] — 25/25 patent + note tổng hợp & quy trình audit
  - [x] [[Tín hiệu người dùng (click, Navboost)]] — 19/19 patent + note tổng hợp & quy trình audit
  - [x] [[Thực thể & Knowledge Graph]] — 27/27 patent + note tổng hợp & quy trình audit
  - [x] [[Hiểu truy vấn (rewrite, synonym, intent)]] — 27/27 patent + note tổng hợp & quy trình audit
  - [x] [[Độ liên quan chủ đề & phrase-based indexing]] — 25/25 patent + note tổng hợp & quy trình audit
  - [x] [[Crawl & index]] (13), [[Trùng lặp & canonical]] (11), [[Trải nghiệm trang (tốc độ, mobile, layout)]] (6), [[Chống spam & độ tin cậy]] (15)
  - [ ] Còn lại: Độ tươi, Local, Passage, Tác giả/E-E-A-T, SERP features, Reviews, AI search, Information gain
- [ ] Crawl lớp mở rộng
- [ ] Nhập tín hiệu leak Google & Yandex
- [ ] Hoàn thiện nhóm yếu tố ranking (định nghĩa, ưu tiên, đồng thuận Yandex)
- [x] Xây công cụ audit v1 → [[Công cụ audit SEO theo patent]]
