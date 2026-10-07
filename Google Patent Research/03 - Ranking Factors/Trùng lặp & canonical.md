---
factor: duplicates
theme: "Trùng lặp & canonical"
priority: P1
yandex_consensus:
patents: ["US8452766B1", "US9275143B2", "US8209339B1", "US7627613B1", "US8868559B2", "US7711679B2", "US8548972B1", "US7509315B1", "US8713071B1", "US10275434B1", "US7930400B1"]
tags: [factor, factor/duplicates]
---

# Trùng lặp & canonical

## Định nghĩa
Google phát hiện trùng lặp ở **3 thời điểm**:
1. **Lúc crawl** — simhash/fingerprint nhiều phần nội dung; bản gần trùng có thể không được xử lý tiếp ([[US8548972B1 - Phát hiện tài liệu gần trùng lặp khi crawl]], [[US9275143B2 - Phát hiện file trùng lặp và gần trùng lặp]]).
2. **Lúc index** — trong nhóm trùng, chọn **một URL đại diện theo PageRank/điểm độc lập query** (canonical); các bản còn lại không được index ([[US8868559B2 - Chọn tài liệu đại diện cho một nhóm tài liệu trùng lặp (canonical)]]). Mirror host và nhiều tên miền được gộp về một ([[US8713071B1 - Phát hiện site mirror trên web]], [[US7930400B1 - Quản lý nhiều tên miền cho một website trong hệ thống index]]).
3. **Lúc hiển thị** — lọc kết quả có **đoạn trả lời giống nhau** cho cùng query ([[US8452766B1 - Phát hiện tài liệu trùng lặp theo từng query]]); trùng lặp dựa trên **các câu cốt lõi** chứa related phrase ([[US7711679B2 - Phát hiện tài liệu trùng lặp dựa trên cụm từ]]).

**Hệ quả:** nội dung template chỉ đổi tên địa phương/sản phẩm vẫn bị gom nhóm; nếu không chỉ định canonical rõ + link nội bộ nhất quán, Google có thể chọn URL khác bạn muốn.

## Tín hiệu leak liên quan
- **Google:** _chưa đối chiếu_
- **Yandex:** _chưa đối chiếu_

## Patent giải thích (11)
<!-- auto:patents -->
- [[US8452766B1 - Phát hiện tài liệu trùng lặp theo từng query]] (2000) · SEO: **trung bình**
- [[US9275143B2 - Phát hiện file trùng lặp và gần trùng lặp]] (2001) · SEO: **cao**
- [[US8209339B1 - Phát hiện tài liệu tương tự]] (2003) · SEO: **trung bình**
- [[US7627613B1 - Phát hiện tài liệu trùng lặp trong hệ thống web crawler]] (2003) · SEO: **trung bình**
- [[US8868559B2 - Chọn tài liệu đại diện cho một nhóm tài liệu trùng lặp (canonical)]] (2003) · SEO: **cao**
- [[US7711679B2 - Phát hiện tài liệu trùng lặp dựa trên cụm từ]] (2004) · SEO: **trung bình**
- [[US8548972B1 - Phát hiện tài liệu gần trùng lặp khi crawl]] (2005) · SEO: **trung bình**
- [[US7509315B1 - Quản lý URL khi crawl]] (2005) · SEO: **trung bình**
- [[US8713071B1 - Phát hiện site mirror trên web]] (2005) · SEO: **trung bình**
- [[US10275434B1 - Xác định phiên bản chính của một tài liệu]] (2005) · SEO: **thấp**
- [[US7930400B1 - Quản lý nhiều tên miền cho một website trong hệ thống index]] (2006) · SEO: **trung bình**
<!-- /auto:patents -->

## Cách audit
**A. Canonical**: mọi trang có canonical → URL 200 indexable; link nội bộ trỏ tới URL canonical; GSC "Google chọn trang chuẩn khác".
**B. Host**: http→https, www↔non-www redirect 301 một bước; staging/dev không bị index.
**C. Trùng lặp nội dung**: cặp trang có nội dung chính tương đồng > 80% (simhash/shingle); title/meta description trùng.
**D. URL biến thể**: tham số (sort, filter, UTM, session), phân trang, phiên bản in.
**E. Nội dung đăng lại**: canonical/link về bản gốc.

## Việc cần làm
- [x] Module trùng lặp & canonical trong công cụ audit
