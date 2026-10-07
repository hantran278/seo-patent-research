---
factor: site-quality
theme: "Chất lượng site (Panda, site quality)"
priority: P1
yandex_consensus:
patents: ["US9477714B1", "US8548995B1", "US8065296B1", "US8818982B1", "US9116945B1", "US20120265757A1", "US7971137B2", "US8078607B2", "US8478751B1", "US8442984B1", "US10204138B1", "US8060497B1", "US8965883B2", "US8903812B1", "US9031929B1", "US9195944B1", "US8775924B1", "US9244972B1", "US9020927B1", "US9002832B1", "US8682892B1", "US9558233B1", "US9767157B2", "US9183499B1", "US9454621B2", "US20190155948A1"]
tags: [factor, factor/site-quality]
---

# Chất lượng site (Panda, site quality)

## Định nghĩa
**Chất lượng site** là một nhóm điểm Google tính ở **cấp site / subdomain / thư mục**, độc lập với từng query, rồi dùng để **nâng hoặc hạ toàn bộ các trang** thuộc nhóm đó. Nói cách khác: một trang tốt trên site bị đánh giá kém vẫn khó lên top, còn trang bình thường trên site được đánh giá cao thì dễ lên hơn.

Theo 26 patent trong nhóm, Google đo chất lượng site qua **5 nguồn tín hiệu chính**:

| # | Nguồn tín hiệu | Ý nghĩa | Patent chính |
|---|---|---|---|
| 1 | **Nhu cầu tìm thương hiệu** | Số query nhắc tên site so với tổng lượng query site nhận click | [[US9031929B1 - Điểm chất lượng site (Site quality score)]], [[US8682892B1 - Xếp hạng kết quả tìm kiếm (Panda)]] |
| 2 | **Hành vi người dùng trên site** | Thời gian ở lại (dwell time) trung bình, thắng/thua click so với kết quả cạnh bên | [[US9195944B1 - Chấm điểm chất lượng site theo thời gian truy cập]], [[US9020927B1 - Xác định chất lượng tài liệu dựa trên cạnh tranh giữa các kết quả]], [[US8818982B1 - Rút tín hiệu chất lượng trang và site từ luồng query]] |
| 3 | **Chất lượng link đến & "hàng xóm"** | Link độc lập, tỷ lệ link từ trang chất lượng, link có người click, chất lượng site liên kết qua lại | [[US8682892B1 - Xếp hạng kết quả tìm kiếm (Panda)]], [[US9002832B1 - Phân loại site là site chất lượng thấp]], [[US9558233B1 - Xác định chỉ số chất lượng cho tài liệu]], [[US9183499B1 - Đánh giá chất lượng dựa trên đặc điểm của các trang lân cận]] |
| 4 | **Đặc điểm nội dung toàn site** | Cụm từ lặp lại giống site kém, mức tập trung chủ đề, dấu hiệu content farm/link farm | [[US9767157B2 - Dự đoán chất lượng site]], [[US8548995B1 - Xếp hạng tài liệu dựa trên phân tích tài liệu liên quan]], [[US8775924B1 - Xử lý trang web dựa trên chất lượng nội dung]] |
| 5 | **Đánh giá của con người → mô hình** | Quality rater chấm mẫu site, Google học mô hình rồi áp dụng cho mọi site | [[US8442984B1 - Tạo tín hiệu chất lượng website]], [[US9116945B1 - Dự đoán đánh giá của con người (quality rater) về chất lượng tìm kiếm]] |

**Hệ quả quan trọng:**
- Điểm site ảnh hưởng **cả thứ hạng lẫn crawl/index** (US9195944): site kém → nhiều trang "Đã thu thập dữ liệu – chưa lập chỉ mục".
- "Site" có thể là **thư mục hoặc subdomain** → phần nội dung kém có thể được cô lập nếu tách riêng.
- Ở nhóm top đầu của query danh mục, Google **xếp lại theo chất lượng** thay vì độ liên quan (US20190155948).

## Tín hiệu leak liên quan
- **Google:** `siteAuthority`, nhóm `QualityNsr` (NSR – điểm chất lượng site), `pandaDemotion` / `babyPandaDemotion` / `babyPandaV2Demotion`, `siteFocusScore` / `siteRadius` / `siteEmbeddings`, dữ liệu Navboost (`goodClicks`, `badClicks`, `lastLongestClicks`), `sourceType` của anchor (tier chất lượng trang chứa link), `OriginalContentScore`, `ugcDiscussionEffortScore`. _(Tên thuộc tính cần đối chiếu lại với tài liệu leak gốc khi nhập vào `04 - Leak Signals`.)_
- **Yandex:** _chưa đối chiếu_

## Patent giải thích (26)
<!-- auto:patents -->
- [[US9477714B1 - Xếp hạng tài liệu (theo nguồn và cụm)]] (2002) · SEO: **trung bình**
- [[US8548995B1 - Xếp hạng tài liệu dựa trên phân tích tài liệu liên quan]] (2003) · SEO: **cao**
- [[US8065296B1 - Xác định chất lượng của các mục được cung cấp]] (2004) · SEO: **thấp**
- [[US8818982B1 - Rút tín hiệu chất lượng trang và site từ luồng query]] (2005) · SEO: **cao**
- [[US9116945B1 - Dự đoán đánh giá của con người (quality rater) về chất lượng tìm kiếm]] (2005) · SEO: **trung bình**
- [[US20120265757A1 - Xếp hạng bài viết blog]] (2005) · SEO: **trung bình**
- [[US7971137B2 - Phát hiện và loại bỏ tài liệu gây khó chịu]] (2005) · SEO: **trung bình**
- [[US8078607B2 - Tạo hồ sơ website dựa trên query và hành vi người dùng trên kết quả]] (2006) · SEO: **thấp**
- [[US8478751B1 - Hạ hạng kết quả lặp lại]] (2007) · SEO: **thấp**
- [[US8442984B1 - Tạo tín hiệu chất lượng website]] (2008) · SEO: **cao**
- [[US10204138B1 - Tài liệu điều hướng (navigational resource) cho query]] (2009) · SEO: **trung bình**
- [[US8060497B1 - Khung đánh giá các hàm chấm điểm tìm kiếm]] (2009) · SEO: **thấp**
- [[US8965883B2 - Xếp hạng nội dung do người dùng tạo (UGC)]] (2009) · SEO: **trung bình**
- [[US8903812B1 - Tín hiệu chất lượng độc lập với query]] (2010) · SEO: **thấp**
- [[US9031929B1 - Điểm chất lượng site (Site quality score)]] (2012) · SEO: **cao**
- [[US9195944B1 - Chấm điểm chất lượng site theo thời gian truy cập]] (2012) · SEO: **cao**
- [[US8775924B1 - Xử lý trang web dựa trên chất lượng nội dung]] (2012) · SEO: **cao**
- [[US9244972B1 - Xác định trang điều hướng cho query thông tin]] (2012) · SEO: **trung bình**
- [[US9020927B1 - Xác định chất lượng tài liệu dựa trên cạnh tranh giữa các kết quả]] (2012) · SEO: **cao**
- [[US9002832B1 - Phân loại site là site chất lượng thấp]] (2012) · SEO: **cao**
- [[US8682892B1 - Xếp hạng kết quả tìm kiếm (Panda)]] (2012) · SEO: **cao**
- [[US9558233B1 - Xác định chỉ số chất lượng cho tài liệu]] (2012) · SEO: **cao**
- [[US9767157B2 - Dự đoán chất lượng site]] (2013) · SEO: **cao**
- [[US9183499B1 - Đánh giá chất lượng dựa trên đặc điểm của các trang lân cận]] (2013) · SEO: **cao**
- [[US9454621B2 - Hiển thị kết quả điều hướng]] (2013) · SEO: **thấp**
- [[US20190155948A1 - Xếp hạng lại tài liệu dựa trên chất lượng theo danh mục]] (2014) · SEO: **cao**
<!-- /auto:patents -->

## Cách audit
Thứ tự ưu tiên theo mức ảnh hưởng và độ chắc chắn của cơ chế:

**A. Thương hiệu & nhu cầu tìm kiếm có chủ đích** (US9031929, US8682892, US9244972)
1. GSC → Hiệu suất → lọc query chứa tên thương hiệu/tên miền → tính **tỷ lệ click brand / tổng click**, xem xu hướng 16 tháng.
2. Lọc query "chủ đề + thương hiệu" → biết người dùng gắn thương hiệu với chủ đề nào; so với chủ đề nội dung chủ lực.
3. So sánh volume tìm thương hiệu với đối thủ (Google Trends).

**B. Hành vi người dùng trên toàn site** (US9195944, US9020927, US8818982)
1. GA4: thời gian tương tác trung bình của traffic organic **theo thư mục** → tìm thư mục kéo điểm xuống.
2. GSC: query top 5 có CTR dưới mức trung bình của vị trí → tối ưu title/snippet.
3. Chụp SERP các query chủ lực, so trang mình với kết quả **ngay trên/dưới**: ai trả lời nhanh và đầy đủ hơn.

**C. Chất lượng link & hàng xóm** (US9002832, US9558233, US9183499, US8682892)
1. Phân nhóm backlink theo chất lượng trang nguồn (có traffic thật / có index / liên quan) → tính **% link từ nhóm tốt**.
2. Đếm referring domain **độc lập** (loại cùng chủ, cùng IP, mạng vệ tinh).
3. Rà outbound link: link tới site spam/bị phạt, link sitewide ở footer.
4. Đánh giá link theo **traffic referral thực tế** (GA4) chứ không chỉ DR.

**D. Nội dung toàn site** (US9767157, US8548995, US8775924, US20120265757)
1. Crawl toàn site, thống kê **đoạn văn/cụm từ lặp lại** trên >30% số trang (boilerplate, template AI).
2. Vẽ **bản đồ chủ đề**: % nội dung thuộc chủ đề cốt lõi vs lạc đề.
3. Tự kiểm tra dấu hiệu **content farm**: sản xuất số lượng lớn, nông, đa chủ đề, không rõ tác giả; tần suất đăng đột biến.
4. Tìm trang mỏng/trùng/không traffic 12 tháng → cải thiện, gộp hoặc noindex.

**E. Đối chiếu Quality Rater Guidelines** (US8442984, US9116945)
1. Chấm trang chủ lực theo Page Quality: mục đích trang, E-E-A-T, chất lượng main content, uy tín site.
2. Kiểm tra các trang tin cậy: Giới thiệu, Liên hệ, Chính sách, hồ sơ tác giả, thông tin doanh nghiệp.
3. Kiểm tra trải nghiệm gây phiền: quảng cáo che nội dung, âm thanh tự phát, pop-up (US7971137).

## Việc cần làm
- [ ] Dựng template báo cáo audit "Chất lượng site" theo 5 mục A–E ở trên
- [ ] Xác định ngưỡng cảnh báo cho từng chỉ số (ví dụ tỷ lệ click brand < 5%, % link nhóm kém > 50%)
- [ ] Nhập tín hiệu leak Google vào `04 - Leak Signals` và đối chiếu tên thuộc tính chính xác
- [ ] Đối chiếu nhóm này với leak Yandex (host-level quality, hành vi người dùng)
