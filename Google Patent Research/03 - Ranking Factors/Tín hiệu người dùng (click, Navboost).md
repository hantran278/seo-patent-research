---
factor: user-signals
theme: "Tín hiệu người dùng (click, Navboost)"
priority: P1
yandex_consensus:
patents: ["US8001118B2", "US7454417B2", "US9767478B2", "US9218397B1", "US8874570B1", "US7756887B1", "US8423541B1", "US8661029B1", "US9002817B2", "US8938463B1", "US9092510B1", "US8359309B1", "US8694511B1", "US8396865B1", "US9697259B1", "US8615514B1", "US8832083B1", "US8965882B1", "US8959103B1"]
tags: [factor, factor/user-signals]
---

# Tín hiệu người dùng (click, Navboost)

## Định nghĩa
**Tín hiệu người dùng** là dữ liệu Google thu từ hành vi thật của người tìm kiếm — click, thời gian ở lại, quay lại SERP, lượt truy cập — để điều chỉnh thứ hạng. Hệ thống trung tâm là **Navboost**: được xác nhận trong vụ kiện DOJ (2023) và leak 2024, dùng khoảng **13 tháng dữ liệu click** theo từng cặp query–tài liệu.

19 patent trong nhóm mô tả 4 lớp của hệ thống:

| Lớp | Google làm gì | Patent chính |
|---|---|---|
| **1. Đo mức hài lòng** | Tỷ lệ **long click / tổng click** cho từng cặp query–trang; lượt click cuối phiên | [[US8661029B1 - Điều chỉnh xếp hạng dựa trên phản hồi ngầm của người dùng (Navboost)]] |
| **2. Khử nhiễu** | Trừ phần click do **vị trí trên SERP** (presentation bias); tách theo quốc gia/ngôn ngữ; trọng số theo thời gian | [[US8938463B1 - Điều chỉnh xếp hạng bằng phản hồi ngầm và mô hình thiên lệch vị trí]], [[US8694511B1 - Điều chỉnh xếp hạng dựa trên nhóm người dùng (population)]], [[US9092510B1 - Điều chỉnh xếp hạng dựa trên yếu tố thời gian của phản hồi người dùng]] |
| **3. Tổng hợp lên cấp site** | Người dùng có ưu tiên site **vượt mức khớp từ khoá** không | [[US8615514B1 - Đánh giá thuộc tính website bằng cách phân nhóm phản hồi người dùng]] (và nhóm [[Chất lượng site (Panda, site quality)]]) |
| **4. Thử nghiệm & định dạng SERP** | Đẩy thử kết quả mới lên top (exploration); chọn loại kết quả (video, tin…) theo click | [[US9218397B1 - Cải thiện tìm kiếm bằng cách đẩy hạng kết quả]], [[US9002817B2 - Xen kẽ kết quả tìm kiếm (interleaving)]] |

**Ba nguyên tắc rút ra:**
1. **Theo từng query**: một trang có thể "tốt" cho query A và "kém" cho query B.
2. **So với kỳ vọng**: CTR cao ở vị trí 1 là bình thường; CTR vượt mức kỳ vọng của vị trí mới là tín hiệu tốt.
3. **Không cần quay lại Google** là mục tiêu: long click và last click quan trọng hơn số click.

## Tín hiệu leak liên quan
- **Google:** module Navboost `QualityNavboostCrapsCrapsData`: `goodClicks`, `badClicks`, `lastLongestClicks`, `unsquashedClicks`, `impressions`; `chromeInTotal` (lượt xem Chrome cấp site). Vụ kiện DOJ: Navboost và Glue (click trên các loại kết quả khác), 13 tháng dữ liệu. _(Cần đối chiếu tên chính xác với leak gốc.)_
- **Yandex:** _chưa đối chiếu_ (leak Yandex được phân tích công khai là có nhiều factor hành vi người dùng: tỷ lệ quay lại SERP, thời gian trên trang…)

## Patent giải thích (19)
<!-- auto:patents -->
- [[US8001118B2 - Dùng thống kê sử dụng trong truy xuất tài liệu]] (2001) · SEO: **trung bình**
- [[US7454417B2 - Cải thiện xếp hạng bằng thông tin nhóm người dùng (population)]] (2003) · SEO: **trung bình**
- [[US9767478B2 - Chấm điểm tài liệu dựa trên traffic liên quan]] (2003) · SEO: **trung bình**
- [[US9218397B1 - Cải thiện tìm kiếm bằng cách đẩy hạng kết quả]] (2003) · SEO: **trung bình**
- [[US8874570B1 - Vector tăng hạng dựa trên dữ liệu cùng truy cập (co-visitation)]] (2004) · SEO: **trung bình**
- [[US7756887B1 - Điều chỉnh độ liên quan bằng theo dõi hoạt động con trỏ chuột]] (2004) · SEO: **thấp**
- [[US8423541B1 - Dùng kết quả được người dùng lưu lại làm phản hồi chất lượng]] (2005) · SEO: **thấp**
- [[US8661029B1 - Điều chỉnh xếp hạng dựa trên phản hồi ngầm của người dùng (Navboost)]] (2006) · SEO: **cao**
- [[US9002817B2 - Xen kẽ kết quả tìm kiếm (interleaving)]] (2006) · SEO: **trung bình**
- [[US8938463B1 - Điều chỉnh xếp hạng bằng phản hồi ngầm và mô hình thiên lệch vị trí]] (2007) · SEO: **cao**
- [[US9092510B1 - Điều chỉnh xếp hạng dựa trên yếu tố thời gian của phản hồi người dùng]] (2007) · SEO: **cao**
- [[US8359309B1 - Điều chỉnh xếp hạng dựa trên thống kê tìm kiếm theo từng kho dữ liệu]] (2007) · SEO: **thấp**
- [[US8694511B1 - Điều chỉnh xếp hạng dựa trên nhóm người dùng (population)]] (2007) · SEO: **trung bình**
- [[US8396865B1 - Chia sẻ dữ liệu độ liên quan giữa các kho dữ liệu]] (2008) · SEO: **thấp**
- [[US9697259B1 - Tinh chỉnh kết quả tìm kiếm theo đặc điểm người dùng]] (2009) · SEO: **trung bình**
- [[US8615514B1 - Đánh giá thuộc tính website bằng cách phân nhóm phản hồi người dùng]] (2010) · SEO: **cao**
- [[US8832083B1 - Kết hợp các nguồn phản hồi người dùng]] (2010) · SEO: **thấp**
- [[US8965882B1 - Đánh giá quy tắc đồng nghĩa bằng clickskip]] (2011) · SEO: **thấp**
- [[US8959103B1 - Đánh giá quy tắc đảo thứ tự từ bằng clickskip]] (2012) · SEO: **thấp**
<!-- /auto:patents -->

## Cách audit

**A. Mức hài lòng theo từng query** (US8661029)
1. Lấy top 20–50 query mang traffic (GSC), mở trang đích và trả lời: *người gõ query này có cần quay lại Google không?*
2. Màn hình đầu tiên: câu trả lời/giá trị chính có hiện ngay, hay bị che bởi intro dài, quảng cáo, pop-up.
3. So title/meta với nội dung thực: có hứa quá mức (clickbait → short click) không.
4. GA4: engagement rate & thời gian tương tác của traffic organic **theo trang đích**.

**B. CTR so với kỳ vọng vị trí** (US8938463, US8615514)
1. GSC: xuất query + vị trí + CTR → vẽ đường CTR trung bình theo vị trí của chính site.
2. Query **dưới** đường kỳ vọng → sửa title/snippet, thêm rich result.
3. Query **trên** đường kỳ vọng ở vị trí 4–10 → ứng viên đẩy lên top; củng cố nội dung/link nội bộ.
4. Nếu CTR thấp hơn kỳ vọng **một cách hệ thống** trên toàn site → vấn đề nhận diện thương hiệu (favicon, tên site, đánh giá).

**C. Xu hướng theo thời gian** (US9092510, US9767478)
1. GSC: so click/CTR theo quý của trang chủ lực → trang giảm dần cần làm mới.
2. Theo dõi mất backlink theo thời gian của trang chủ lực.
3. Lập lịch cập nhật cho nội dung có yếu tố thời gian (giá, năm, số liệu).

**D. Định dạng khớp SERP** (US9002817, US8359309)
1. Với query mục tiêu: ghi nhận loại kết quả trên SERP (video, hình, tin, PAA, local pack).
2. Bổ sung định dạng còn thiếu (video + VideoObject, hình ảnh chất lượng, FAQ).

**E. Thị trường & nhóm người dùng** (US8694511, US9697259, US7454417)
1. GSC → Quốc gia: CTR/traffic theo thị trường mục tiêu.
2. Site đa quốc gia: hreflang, nội dung bản địa hoá.

**F. Traffic ngoài Google** (US8001118, US8874570)
1. GA4: tỷ lệ organic / tổng traffic; phát triển direct, social, email, referral — lượt truy cập thật từ mọi nguồn có thể được ghi nhận (Chrome).

> [!warning] Không dùng click ảo / CTR manipulation
> Các patent đều có cơ chế lọc theo thời gian, địa chỉ mạng, phiên và phát hiện cụm spam ([[US10270791B1 - Ma trận chuyển tiếp giữa các entity tìm kiếm và ứng dụng]]). Click ảo không tạo long click thật và dễ bị gom thành cụm spam.

## Việc cần làm
- [ ] Dựng template "CTR vs kỳ vọng vị trí" từ dữ liệu GSC (có thể tự động hoá bằng script)
- [ ] Xây checklist đánh giá "mức hài lòng" cho trang đích theo từng loại ý định (thông tin, giao dịch, điều hướng, local)
- [ ] Đối chiếu leak Yandex (factor hành vi người dùng)
