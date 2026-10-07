---
factor: crawl-index
theme: "Crawl & index"
priority: P1
yandex_consensus:
patents: ["US7725452B1", "US7774782B1", "US8386459B1", "US8666964B1", "US9355177B2", "US8655864B1", "US8533226B1", "US8032518B2", "US7925655B1", "US8554759B1", "US8868541B2", "US9501506B1", "US9483568B1"]
tags: [factor, factor/crawl-index]
---

# Crawl & index

## Định nghĩa
Trước khi xếp hạng, trang phải được **crawl** (thu thập) và **chọn vào index**. 13 patent cho thấy cả hai bước đều **có chọn lọc**:
- **Crawl có ngân sách**: số trang crawl mỗi site có giới hạn; vượt mức chỉ crawl trang có mức quan trọng cao ([[US7509315B1 - Quản lý URL khi crawl]]); URL lỗi lặp lại bị loại ([[US7725452B1 - Bộ lập lịch cho crawler của search engine]]); tải server được giới hạn.
- **Tần suất crawl lại** theo độ phổ biến + tần suất thay đổi **ở phần nội dung chính** (đổi ngày, sidebar không tính) ([[US8868541B2 - Lập lịch crawl tài liệu]]).
- **Sitemap** là kênh báo thay đổi chính thức, dùng lastmod để ưu tiên ([[US9355177B2 - Lập lịch crawl dựa trên sitemap của website]]).
- **Index có chọn lọc**: mỗi tài liệu được dự đoán **điểm hữu ích**; chỉ tài liệu đủ điểm được index ([[US8554759B1 - Chọn tài liệu để đưa vào index]]) → nguồn gốc trạng thái "Đã thu thập dữ liệu – chưa lập chỉ mục".

## Tín hiệu leak liên quan
- **Google:** tier index (base / landfill…), ngày cập nhật đáng kể của tài liệu. _(Cần đối chiếu.)_
- **Yandex:** _chưa đối chiếu_

## Patent giải thích (13)
<!-- auto:patents -->
- [[US7725452B1 - Bộ lập lịch cho crawler của search engine]] (2003) · SEO: **trung bình**
- [[US7774782B1 - Giới hạn số request của crawler tới một host]] (2003) · SEO: **thấp**
- [[US8386459B1 - Lập lịch crawl lại]] (2005) · SEO: **thấp**
- [[US8666964B1 - Quản lý các mục trong lịch crawl]] (2005) · SEO: **thấp**
- [[US9355177B2 - Lập lịch crawl dựa trên sitemap của website]] (2005) · SEO: **cao**
- [[US8655864B1 - Sitemap cho di động (Mobile Sitemaps)]] (2005) · SEO: **thấp**
- [[US8533226B1 - Xác minh và thu hồi quyền sở hữu website trong hệ thống index]] (2006) · SEO: **thấp**
- [[US8032518B2 - Cho phép chủ website điều chỉnh crawl rate]] (2006) · SEO: **trung bình**
- [[US7925655B1 - Lập lịch query trên các tầng index server]] (2007) · SEO: **thấp**
- [[US8554759B1 - Chọn tài liệu để đưa vào index]] (2008) · SEO: **cao**
- [[US8868541B2 - Lập lịch crawl tài liệu]] (2011) · SEO: **cao**
- [[US9501506B1 - Hệ thống index (cập nhật index hybrid-sharded)]] (2013) · SEO: **thấp**
- [[US9483568B1 - Hệ thống index (hybrid-sharded)]] (2013) · SEO: **thấp**
<!-- /auto:patents -->

## Cách audit
**A. Khả năng crawl**: robots.txt, mã trạng thái (4xx/5xx/redirect), link nội bộ trỏ tới URL lỗi, chuỗi redirect, TTFB/tỉ lệ lỗi server.
**B. Lãng phí crawl budget**: tỷ lệ URL rác (tham số, bộ lọc, tìm kiếm nội bộ, thẻ) so với trang cần index.
**C. Sitemap**: tồn tại, khai báo trong robots.txt; chỉ chứa URL 200 + indexable + canonical tự trỏ; lastmod thật; so sánh sitemap ↔ crawl (mồ côi).
**D. Index**: GSC "Đã thu thập – chưa lập chỉ mục", "Đã phát hiện – chưa lập chỉ mục" → phân loại theo loại trang → noindex/gộp/cải thiện.
**E. Cập nhật thật**: làm mới nội dung chính, dateModified khớp thay đổi thật.

## Việc cần làm
- [x] Module crawl & index trong công cụ audit
