---
factor: spam
theme: "Chống spam & độ tin cậy"
priority: P1
yandex_consensus:
patents: ["US7953763B2", "US7302645B1", "US7603345B2", "US8244722B1", "US7743045B2", "US8452746B2", "US7603350B1", "US8694374B1", "US9178848B1", "US8874565B1", "US8752184B1", "US8332415B1", "US8868536B1", "US9336279B2", "US9147154B2"]
tags: [factor, factor/spam]
---

# Chống spam & độ tin cậy

## Định nghĩa
15 patent cho thấy Google phát hiện spam **theo mô hình**, không theo từng dấu hiệu riêng lẻ:

| Loại spam | Cách phát hiện | Patent |
|---|---|---|
| **Nhồi nội dung** | Số related phrase thực tế vượt xa kỳ vọng | [[US7603345B2 - Phát hiện tài liệu spam trong hệ thống index theo cụm từ]] |
| **Văn bản ẩn** | So DOM tree với render tree | [[US9336279B2 - Phát hiện văn bản ẩn khi chấm điểm kết quả tìm kiếm]] |
| **Link spam / link farm** | Độ nhạy bất thường của PageRank | [[US7953763B2 - Phát hiện link spam trong cơ sở dữ liệu liên kết]] |
| **Doorway / PBN** | Đồ thị con dày đặc doorway → đích | [[US7302645B1 - Xác định bài viết bị thao túng]] |
| **Scraper / proxy** | So sánh chất lượng trong cụm nội dung giống nhau | [[US8874565B1 - Phát hiện site 'proxy pad' (site vệ tinh ăn theo)]] |
| **Click giả** | Mô hình hành vi click bình thường | [[US8694374B1 - Phát hiện click spam]] |
| **Local spam** | Tần suất cụm từ so với nguồn tin cậy; tương quan từ khoá trong listing | [[US8332415B1 - Xác định spam trong thông tin thu thập từ một nguồn]], [[US8868536B1 - Phát hiện spam bản đồ theo thời gian thực]] |

**Và một cơ chế gây nhiễu:** khi yếu tố xếp hạng thay đổi, thứ hạng chuyển tiếp theo hàm có thể **dao động/giảm tạm thời** để phát hiện người thao túng ([[US8244722B1 - Xếp hạng tài liệu (hàm chuyển tiếp thứ hạng — Rank Transition)]]).

**Độ tin cậy** ngược lại đến từ nhãn/đề cập của các nguồn uy tín ([[US7603350B1 - Xếp hạng kết quả tìm kiếm dựa trên độ tin cậy (trust)]]).

## Tín hiệu leak liên quan
- **Google:** `spamScore`, `keywordStuffingScore`, `gibberishScore`, `spamrank`, `unsquashedClicks`; anchor spam (`IndexingDocjoinerAnchorSpamInfo`). _(Cần đối chiếu.)_
- **Yandex:** _chưa đối chiếu_

## Patent giải thích (15)
<!-- auto:patents -->
- [[US7953763B2 - Phát hiện link spam trong cơ sở dữ liệu liên kết]] (2003) · SEO: **cao**
- [[US7302645B1 - Xác định bài viết bị thao túng]] (2003) · SEO: **cao**
- [[US7603345B2 - Phát hiện tài liệu spam trong hệ thống index theo cụm từ]] (2004) · SEO: **cao**
- [[US8244722B1 - Xếp hạng tài liệu (hàm chuyển tiếp thứ hạng — Rank Transition)]] (2005) · SEO: **trung bình**
- [[US7743045B2 - Phát hiện ngữ cảnh spam và thiên lệch trong search engine lập trình được]] (2005) · SEO: **thấp**
- [[US8452746B2 - Phát hiện kết quả spam cho query xử lý theo ngữ cảnh]] (2005) · SEO: **thấp**
- [[US7603350B1 - Xếp hạng kết quả tìm kiếm dựa trên độ tin cậy (trust)]] (2006) · SEO: **trung bình**
- [[US8694374B1 - Phát hiện click spam]] (2007) · SEO: **trung bình**
- [[US9178848B1 - Xác định các domain có liên kết với nhau (affiliated)]] (2007) · SEO: **trung bình**
- [[US8874565B1 - Phát hiện site 'proxy pad' (site vệ tinh ăn theo)]] (2007) · SEO: **trung bình**
- [[US8752184B1 - Phát hiện spam nhồi từ khóa trong video do người dùng đăng]] (2008) · SEO: **trung bình**
- [[US8332415B1 - Xác định spam trong thông tin thu thập từ một nguồn]] (2011) · SEO: **trung bình**
- [[US8868536B1 - Phát hiện spam bản đồ theo thời gian thực]] (2012) · SEO: **trung bình**
- [[US9336279B2 - Phát hiện văn bản ẩn khi chấm điểm kết quả tìm kiếm]] (2012) · SEO: **cao**
- [[US9147154B2 - Phân loại tài liệu bằng mạng học sâu]] (2013) · SEO: **trung bình**
<!-- /auto:patents -->

## Cách audit
**A. Nội dung**: mật độ từ khoá bất thường; thuật ngữ bị liệt kê gượng ép; nội dung template hàng loạt (doorway).
**B. Văn bản ẩn**: CSS ẩn inline, font 0, text-indent âm; nội dung quan trọng ẩn trong tab.
**C. Link**: link ra hàng loạt/sitewide; mô hình mạng vệ tinh; vòng trao đổi link.
**D. Local**: tên/mô tả GBP không nhồi từ khoá.
**E. Hành vi**: không dùng dịch vụ click/traffic ảo; ghi nhật ký thay đổi, đánh giá sau 2–4 tuần.

## Việc cần làm
- [x] Module spam trong công cụ audit
