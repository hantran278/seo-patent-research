---
factor: topicality
theme: "Độ liên quan chủ đề & phrase-based indexing"
priority: P2
yandex_consensus:
patents: ["US8688720B1", "US8024372B2", "US8060501B1", "US8626787B1", "US7673253B1", "US7426507B1", "US7536408B2", "US7567959B2", "US7580921B2", "US7584175B2", "US7599914B2", "US9037573B2", "US9384224B2", "US8595225B1", "US8090736B1", "US10152535B1", "US8166045B1", "US9223877B1", "US8631027B2", "US8402036B2", "US7996379B1", "US8447760B1", "US8463772B1", "US9053156B1", "US8892422B1"]
tags: [factor, factor/topicality]
---

# Độ liên quan chủ đề & phrase-based indexing

## Định nghĩa
**Độ liên quan chủ đề** là cách Google đánh giá một trang nói về chủ đề gì và **sâu đến đâu** — không qua mật độ từ khoá mà qua **mạng các cụm từ/khái niệm liên quan** xuất hiện cùng nhau, cấu trúc tài liệu và ngữ cảnh bên ngoài (link, hành vi).

25 patent trong nhóm chia làm 3 trụ cột:

| Trụ cột | Ý tưởng | Patent chính |
|---|---|---|
| **1. Phrase-based indexing** (Anna Patterson, 2004) | Index theo **cụm từ có nghĩa**; hai cụm là **related phrase** khi chúng đồng xuất hiện nhiều hơn kỳ vọng (information gain). Trang chứa nhiều related phrase của query phrase = nói sâu về chủ đề. Dùng cả cho snippet, gom cụm kết quả, phát hiện trùng lặp và **spam** | [[US7536408B2 - Index dựa trên cụm từ (phrase-based indexing)]], [[US7580921B2 - Nhận diện cụm từ trong hệ thống truy xuất thông tin]], [[US7584175B2 - Tạo mô tả tài liệu dựa trên cụm từ]] |
| **2. Khái niệm / vector chủ đề** (PHIL, 2002–2003) | Tài liệu được biểu diễn bằng **vector các cụm khái niệm** suy ra từ tổ hợp từ — tiền thân của embedding | [[US8688720B1 - Mô tả tài liệu dựa trên các cụm từ liên quan về khái niệm]], [[US8024372B2 - Học mô hình sinh xác suất cho văn bản (PHIL)]] |
| **3. Cấu trúc & ngữ cảnh** | Khoảng cách giữa từ tính theo **cấu trúc HTML** (heading, list); vị trí/định dạng tăng trọng số cụm từ; chủ đề suy ra từ trang link tới; **độ phổ biến trong chủ đề** | [[US8060501B1 - Xếp hạng tài liệu dựa trên khoảng cách ngữ nghĩa giữa các từ]], [[US8166045B1 - Trích xuất cụm từ bằng chấm điểm cụm từ con]], [[US7673253B1 - Suy ra khái niệm gắn với nội dung]], [[US8595225B1 - Liên hệ chủ đề và độ phổ biến của tài liệu]] |

**Hệ quả cho SEO:**
1. **Related phrases là cơ sở của semantic SEO / "LSI keyword"**: độ sâu chủ đề = độ phủ các cụm liên quan mà top kết quả cũng có.
2. Có **ngưỡng trên**: số related phrase bất thường cao là dấu hiệu nội dung tự động/nhồi ([[US7603345B2 - Phát hiện tài liệu spam trong hệ thống index theo cụm từ]], nhóm [[Chống spam & độ tin cậy]]).
3. **Cấu trúc HTML mang nghĩa**: heading phủ nghĩa cho đoạn bên dưới; list/table đúng thẻ giúp hiểu quan hệ.
4. **Niche authority**: độ phổ biến được so **trong cùng chủ đề** (US8595225) → site ngách dẫn đầu có thể thắng site lớn đa chủ đề.

## Tín hiệu leak liên quan
- **Google:** `siteEmbeddings`, `siteFocusScore`, `siteRadius` (vector chủ đề site/trang, mức tập trung, độ lệch của trang so với trọng tâm site); hệ thống Mustang dùng dữ liệu hit (vị trí từ/cụm trong tài liệu); các trường về phiên bản/thay đổi đáng kể của tài liệu. _(Cần đối chiếu tên chính xác.)_
- **Yandex:** _chưa đối chiếu_

## Patent giải thích (25)
<!-- auto:patents -->
- [[US8688720B1 - Mô tả tài liệu dựa trên các cụm từ liên quan về khái niệm]] (2002) · SEO: **trung bình**
- [[US8024372B2 - Học mô hình sinh xác suất cho văn bản (PHIL)]] (2003) · SEO: **trung bình**
- [[US8060501B1 - Xếp hạng tài liệu dựa trên khoảng cách ngữ nghĩa giữa các từ]] (2004) · SEO: **trung bình**
- [[US8626787B1 - Xác định stopword có ý nghĩa trong hệ thống tìm kiếm theo từ khóa]] (2004) · SEO: **thấp**
- [[US7673253B1 - Suy ra khái niệm gắn với nội dung]] (2004) · SEO: **trung bình**
- [[US7426507B1 - Tự động tạo phân loại (taxonomy) trong kết quả tìm kiếm bằng cụm từ]] (2004) · SEO: **thấp**
- [[US7536408B2 - Index dựa trên cụm từ (phrase-based indexing)]] (2004) · SEO: **cao**
- [[US7567959B2 - Hệ thống truy xuất thông tin dùng nhiều index]] (2004) · SEO: **thấp**
- [[US7580921B2 - Nhận diện cụm từ trong hệ thống truy xuất thông tin]] (2004) · SEO: **cao**
- [[US7584175B2 - Tạo mô tả tài liệu dựa trên cụm từ]] (2004) · SEO: **trung bình**
- [[US7599914B2 - Tìm kiếm dựa trên cụm từ (phrase-based searching)]] (2004) · SEO: **trung bình**
- [[US9037573B2 - Cá nhân hóa tìm kiếm dựa trên cụm từ]] (2004) · SEO: **thấp**
- [[US9384224B2 - Hệ thống lưu trữ nhiều phiên bản tài liệu]] (2004) · SEO: **trung bình**
- [[US8595225B1 - Liên hệ chủ đề và độ phổ biến của tài liệu]] (2004) · SEO: **cao**
- [[US8090736B1 - Cải thiện kết quả bằng quan hệ khái niệm giữa tài liệu]] (2004) · SEO: **thấp**
- [[US10152535B1 - Tách cụm từ trong query (query phrasification)]] (2007) · SEO: **thấp**
- [[US8166045B1 - Trích xuất cụm từ bằng chấm điểm cụm từ con]] (2007) · SEO: **trung bình**
- [[US9223877B1 - Kiến trúc index server dùng phrase posting list chia tầng và phân mảnh]] (2007) · SEO: **thấp**
- [[US8631027B2 - Tích hợp thông tin cụm từ liên quan từ bên ngoài vào hệ thống index theo cụm từ]] (2007) · SEO: **thấp**
- [[US8402036B2 - Tạo snippet dựa trên cụm từ cảm xúc]] (2008) · SEO: **trung bình**
- [[US7996379B1 - Xếp hạng tài liệu bằng quan hệ giữa các từ]] (2008) · SEO: **trung bình**
- [[US8447760B1 - Tạo tập tài liệu liên quan cho một tập tài liệu ban đầu]] (2009) · SEO: **trung bình**
- [[US8463772B1 - Giá trị khoảng cách có mức quan trọng khác nhau]] (2010) · SEO: **thấp**
- [[US9053156B1 - Kết quả tìm kiếm dựa trên chủ đề]] (2012) · SEO: **thấp**
- [[US8892422B1 - Nhận diện cụm từ trong chuỗi từ]] (2012) · SEO: **thấp**
<!-- /auto:patents -->

## Cách audit

**A. Độ phủ related phrases** (US7536408, US7580921, US7996379)
1. Với từ khoá chính: trích cụm 2–4 từ xuất hiện ở ≥ 50% top 10 nhưng hiếm ở web chung → danh sách related phrases.
2. Tính % related phrases có trong trang: thấp = nội dung nông; rất cao + văn phong gượng = nguy cơ nhồi.
3. Rà nội dung chỉ lặp từ khoá chính mà thiếu thuật ngữ/khái niệm đi kèm.

**B. Vị trí & định dạng cụm từ** (US8166045, US7584175, US7599914)
1. Cụm từ chủ đề quan trọng có ở title, H1/H2, đoạn đầu, anchor nội bộ.
2. Đoạn mở đầu chứa từ khoá chính + 2–3 cụm liên quan (ứng viên snippet).
3. Dùng dạng đầy đủ của tên/cụm từ ít nhất một lần.

**C. Cấu trúc HTML mang nghĩa** (US8060501)
1. Heading đúng thứ bậc, mỗi heading mô tả nội dung bên dưới.
2. Danh sách/bảng dùng thẻ thật (`ul/ol/table`), không giả lập bằng ký tự.

**D. Tập trung chủ đề** (US8688720, US8595225, US7673253)
1. Mỗi trang một nhóm khái niệm rõ; không trộn nhiều chủ đề không liên quan.
2. Xác định chủ đề ngách cốt lõi của site; so độ phổ biến với site cùng ngách.
3. Chủ đề của trang nguồn backlink khớp chủ đề trang đích.

**E. Liên kết theo hành trình** (US8447760)
1. Với trang chủ lực: câu hỏi tiếp theo người dùng thường có → link nội bộ tới bài trả lời.

## Việc cần làm
- [ ] Viết script trích related phrases từ top 10 (n-gram + so tần suất nền) làm module công cụ audit
- [ ] Xác định ngưỡng "quá ít / quá nhiều" related phrases theo từng loại trang
- [ ] Liên kết với [[Hiểu truy vấn (rewrite, synonym, intent)]] và [[Thực thể & Knowledge Graph]]
- [ ] Đối chiếu leak Yandex
