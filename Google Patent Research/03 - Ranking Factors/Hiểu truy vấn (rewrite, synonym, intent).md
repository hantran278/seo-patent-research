---
factor: query-understanding
theme: "Hiểu truy vấn (rewrite, synonym, intent)"
priority: P2
yandex_consensus:
patents: ["US8577907B1", "US7505964B2", "US9697249B1", "US9116976B1", "US7925657B1", "US10685017B1", "US8805867B2", "US9483530B1", "US7565345B2", "US8375049B2", "US7636714B1", "US9183297B1", "US9110975B1", "US8321201B1", "US8661012B1", "US8161041B1", "US8738643B1", "US8996554B2", "US8458171B2", "US9009146B1", "US9323806B2", "US8838587B1", "US8868548B2", "US8819000B1", "US9152698B1", "US9116957B1", "US10387437B2"]
tags: [factor, factor/query-understanding]
---

# Hiểu truy vấn (rewrite, synonym, intent)

## Định nghĩa
**Hiểu truy vấn** là tầng xử lý Google chạy **trước khi** tìm tài liệu: đoán ý định, mở rộng bằng đồng nghĩa, bỏ từ không quan trọng, viết lại query theo ngữ cảnh phiên. Hệ quả: **query người dùng gõ ≠ query Google thực sự tìm**, và trang có thể xếp hạng cho từ khoá không chứa nguyên văn.

27 patent trong nhóm chia thành 4 cơ chế:

| Cơ chế | Google làm gì | Patent chính |
|---|---|---|
| **1. Đồng nghĩa & từ thay thế** | Học đồng nghĩa từ log query (cặp query khác nhau 1 cụm), từ nội dung tài liệu (đồng xuất hiện, gần nhau), từ anchor text; chỉ chấp nhận từ thay thế xuất hiện phổ biến trong top kết quả | [[US8161041B1 - Tạo từ đồng nghĩa dựa trên tài liệu]], [[US8577907B1 - Cải thiện query dựa trên thông tin ngữ nghĩa của query]], [[US7636714B1 - Xác định từ đồng nghĩa trong ngữ cảnh query]], [[US8738643B1 - Học tên đồng nghĩa của đối tượng từ anchor text]] |
| **2. Từ quan trọng / tuỳ chọn** | Từ thêm vào mà không đổi kết quả → coi là tuỳ chọn | [[US9483530B1 - Xác định từ ít quan trọng trong query]] |
| **3. Ý định & khía cạnh** | Từ làm rõ ý định ("giá", "review", "cách") gắn ý định cho phiên; gom query tinh chỉnh thành cụm nhu cầu; xác định khía cạnh phổ biến của entity | [[US8868548B2 - Xác định ý định người dùng từ mẫu query]], [[US9323806B2 - Gom cụm các query tinh chỉnh theo ý định người dùng suy ra]], [[US8458171B2 - Xác định các khía cạnh (aspect) của query]] |
| **4. Viết lại & mượn dữ liệu** | Nhiều bộ sửa query chấm theo mức hài lòng; kết hợp query trước trong phiên; query hiếm mượn dữ liệu click của query tương tự/tổng quát hơn | [[US9697249B1 - Ước tính độ tin cậy cho mô hình sửa query]], [[US10387437B2 - Viết lại query dựa trên thông tin phiên tìm kiếm]], [[US9110975B1 - Đầu vào kết quả tìm kiếm từ các biến thể query tổng quát hóa]], [[US9009146B1 - Xếp hạng kết quả dựa trên các query tương tự]] |

**Hệ quả cho SEO:**
1. **Nhắm theo ý định và nhu cầu, không theo chuỗi ký tự** — không cần trang riêng cho từng biến thể từ khoá có cùng SERP.
2. **Một từ khoá = nhiều cụm nhu cầu** (US9323806, US8458171) → nền tảng khoa học cho **topic cluster** và **aspect coverage**.
3. **Từ vựng của top kết quả định nghĩa chủ đề** (US8577907) → dùng đúng thuật ngữ ngành.
4. Trang mạnh cho **query chính** được hưởng lợi cho cả **họ long-tail** (mượn dữ liệu click).

## Tín hiệu leak liên quan
- **Google:** leak có nhắc tới tầng xử lý query (QRewrite, Superroot) nằm trước tầng xếp hạng. _(Cần đối chiếu với leak gốc.)_
- **Yandex:** _chưa đối chiếu_

## Patent giải thích (27)
<!-- auto:patents -->
- [[US8577907B1 - Cải thiện query dựa trên thông tin ngữ nghĩa của query]] (2003) · SEO: **trung bình**
- [[US7505964B2 - Cải thiện xếp hạng bằng các query liên quan]] (2003) · SEO: **trung bình**
- [[US9697249B1 - Ước tính độ tin cậy cho mô hình sửa query]] (2003) · SEO: **trung bình**
- [[US9116976B1 - Xếp hạng tài liệu dựa trên tập dữ liệu lớn]] (2003) · SEO: **trung bình**
- [[US7925657B1 - Điều chỉnh điểm dựa trên độ rộng của query]] (2004) · SEO: **trung bình**
- [[US10685017B1 - Viết lại query hiệu quả]] (2004) · SEO: **thấp**
- [[US8805867B2 - Viết lại query khi phát hiện entity]] (2004) · SEO: **trung bình**
- [[US9483530B1 - Xác định từ ít quan trọng trong query]] (2005) · SEO: **trung bình**
- [[US7565345B2 - Tích hợp nhiều mô hình sửa query]] (2005) · SEO: **thấp**
- [[US8375049B2 - Sửa query bằng các query đã biết là xếp hạng cao]] (2005) · SEO: **trung bình**
- [[US7636714B1 - Xác định từ đồng nghĩa trong ngữ cảnh query]] (2005) · SEO: **thấp**
- [[US9183297B1 - Tạo từ đồng nghĩa từ vựng cho các từ trong query]] (2006) · SEO: **thấp**
- [[US9110975B1 - Đầu vào kết quả tìm kiếm từ các biến thể query tổng quát hóa]] (2006) · SEO: **trung bình**
- [[US8321201B1 - Xác định từ đồng nghĩa theo N-gram cho cụm từ trong query]] (2006) · SEO: **thấp**
- [[US8661012B1 - Đảm bảo từ đồng nghĩa không làm mất thông tin của cụm từ trong query]] (2006) · SEO: **thấp**
- [[US8161041B1 - Tạo từ đồng nghĩa dựa trên tài liệu]] (2007) · SEO: **trung bình**
- [[US8738643B1 - Học tên đồng nghĩa của đối tượng từ anchor text]] (2007) · SEO: **trung bình**
- [[US8996554B2 - Sửa query theo ngữ cảnh]] (2007) · SEO: **thấp**
- [[US8458171B2 - Xác định các khía cạnh (aspect) của query]] (2009) · SEO: **cao**
- [[US9009146B1 - Xếp hạng kết quả dựa trên các query tương tự]] (2009) · SEO: **trung bình**
- [[US9323806B2 - Gom cụm các query tinh chỉnh theo ý định người dùng suy ra]] (2009) · SEO: **cao**
- [[US8838587B1 - Lan truyền phân loại query]] (2010) · SEO: **trung bình**
- [[US8868548B2 - Xác định ý định người dùng từ mẫu query]] (2010) · SEO: **cao**
- [[US8819000B1 - Sửa đổi query]] (2011) · SEO: **thấp**
- [[US9152698B1 - Xác định từ thay thế dựa trên các từ xuất hiện nhiều bất thường]] (2012) · SEO: **thấp**
- [[US9116957B1 - Chấm điểm từ thay thế]] (2013) · SEO: **thấp**
- [[US10387437B2 - Viết lại query dựa trên thông tin phiên tìm kiếm]] (2014) · SEO: **trung bình**
<!-- /auto:patents -->

## Cách audit

**A. Gom từ khoá theo SERP, không theo chuỗi ký tự** (US9483530, US9009146, US8375049)
1. Với danh sách từ khoá: so sánh top 10 của từng cặp biến thể → nếu trùng ≥ 6/10 URL thì nhắm **cùng một trang**.
2. Chọn **phiên bản chuẩn** (volume cao, SERP ổn định) làm từ khoá chính của trang.
3. Phát hiện **cannibalization**: nhiều trang của site cạnh tranh cùng một cụm SERP.

**B. Ý định của trang khớp ý định SERP** (US8868548, US8838587)
1. Phân loại mỗi trang chủ lực: thông tin / điều tra thương mại / giao dịch / điều hướng / local.
2. Xem loại trang đang xếp hạng cho từ khoá chính (bài hướng dẫn, danh mục, sản phẩm, so sánh) → khớp với loại trang của bạn không.
3. Từ khoá đa ý định → cân nhắc tách trang hoặc có mục riêng cho từng ý định.

**C. Bao phủ cụm nhu cầu & khía cạnh** (US9323806, US8458171, US9697249)
1. Với từ khoá trụ cột: thu thập query tinh chỉnh (Tìm kiếm liên quan, Autocomplete, PAA) → **gom cụm theo nhu cầu**.
2. Đối chiếu các cụm với cấu trúc cụm bài/heading hiện có → nhu cầu nào chưa có nội dung.
3. Hub page về entity: có mục/link tới từng khía cạnh phổ biến.

**D. Từ vựng chủ đề** (US8577907, US8161041, US9152698)
1. So sánh từ vựng trang với top 10 (TF-IDF/content editor): thiếu thuật ngữ đa số top dùng.
2. Dùng biến thể/đồng nghĩa tự nhiên thay vì lặp một cụm từ khoá.

**E. Thương hiệu trong query** (US8805867, US8738643)
1. Tìm "thương hiệu + sản phẩm": các kết quả đầu có thuộc domain của bạn, có sitelinks không.
2. Liệt kê các cách gọi khác của thương hiệu/sản phẩm → có trong anchor text và `alternateName`.

## Việc cần làm
- [ ] Viết script gom từ khoá theo độ trùng SERP (keyword clustering) làm module của công cụ audit
- [ ] Template "Intent audit": bảng trang ↔ ý định trang ↔ ý định SERP
- [ ] Liên kết với [[Thực thể & Knowledge Graph]] (aspect/attribute coverage)
- [ ] Đối chiếu leak Yandex
