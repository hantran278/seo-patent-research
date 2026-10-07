---
factor: links
theme: "Liên kết & PageRank"
priority: P1
yandex_consensus:
patents: ["US6285999B1", "US6799176B1", "US7269587B1", "US7213198B1", "US6754873B1", "US8127220B1", "US6526440B1", "US7028029B2", "US10210256B2", "US8719276B1", "US8595270B2", "US8577893B1", "US7260573B1", "US7716225B1", "US8825645B1", "US8762225B1", "US9208229B2", "US9165040B1", "US8086594B1", "US8732187B1", "US8768932B1", "US8166046B1", "US10270791B1", "US8959093B1", "US8386495B1"]
tags: [factor, factor/links]
---

# Liên kết & PageRank

## Định nghĩa
**Liên kết** là nhóm tín hiệu Google dùng link giữa các trang để đo **mức quan trọng/uy tín** (PageRank và các biến thể) và **nội dung/chủ đề** của trang đích (anchor text, ngữ cảnh quanh link). 25 patent trong nhóm cho thấy PageRank đã tiến hoá qua 4 thế hệ:

| Thế hệ | Ý tưởng | Hệ quả SEO | Patent chính |
|---|---|---|---|
| **1. PageRank gốc** (1997) | Link = phiếu bầu; phiếu chia đều theo số link ra; người lướt ngẫu nhiên | Chất lượng trang nguồn > số lượng link | [[US6285999B1 - Phương pháp xếp hạng node trong cơ sở dữ liệu liên kết (PageRank gốc)]] |
| **2. Reasonable Surfer** (2004) | Mỗi link có trọng số = xác suất được click (vị trí, cỡ chữ, ngữ cảnh) | Link trong nội dung chính >> footer/sidebar | [[US7716225B1 - Xếp hạng tài liệu dựa trên hành vi người dùng và đặc điểm link (Reasonable Surfer)]] |
| **3. Chống thao túng** (2003–2004) | Link từ các site cùng chủ chỉ tính 1 lần / chia cho kích thước cụm; giới hạn rank tối đa một nguồn truyền | PBN, mạng vệ tinh gần như vô giá trị | [[US8825645B1 - Xác định chất lượng tài liệu được liên kết]], [[US8719276B1 - Xếp hạng node dựa trên tính độc lập giữa các node]] |
| **4. Nearest Seed** (2006) | Điểm = khoảng cách ngắn nhất từ tập trang tin cậy (seed) tới trang | Gần nguồn uy tín quan trọng hơn nhiều link | [[US9165040B1 - Xếp hạng trang bằng khoảng cách trong đồ thị link (Seed-set PageRank)]] |

**Ngoài sức mạnh, link còn truyền 3 loại thông tin:**
1. **Anchor text + đoạn văn quanh link** được index cho trang đích ([[US10210256B2 - Index thẻ anchor trong hệ thống web crawler]], [[US8577893B1 - Xếp hạng dựa trên ngữ cảnh của tham chiếu (link)]]).
2. **Mức liên quan chủ đề**: link từ trang cũng xếp hạng cho query đó (Hilltop, [[US6526440B1 - Xếp hạng lại kết quả dựa trên mức liên kết nội bộ trong tập kết quả]]) và co-citation ([[US6754873B1 - Tìm tài liệu liên quan bằng phân tích liên kết]]).
3. **Hành vi người dùng**: click trên trang nguồn truyền qua link ([[US8959093B1 - Xếp hạng kết quả dựa trên anchor]]); link có người click thật giá trị hơn ([[US9558233B1 - Xác định chỉ số chất lượng cho tài liệu]] — nhóm Chất lượng site).

## Tín hiệu leak liên quan
- **Google:** `pagerank`, `PageRank_NS` (Nearest Seed), `homepagePagerankNs`, `toolbarPagerank`; module anchor `AnchorsAnchor` với `text`, `context2` (văn bản quanh link), `fontsize`, `sourceType` (tier chất lượng trang nguồn), `isLocal`; thông tin anchor spam (`IndexingDocjoinerAnchorSpamInfo` — phát hiện đợt tăng anchor spam đột biến). _(Cần đối chiếu tên chính xác với leak gốc.)_
- **Yandex:** _chưa đối chiếu_

## Patent giải thích (25)
<!-- auto:patents -->
- [[US6285999B1 - Phương pháp xếp hạng node trong cơ sở dữ liệu liên kết (PageRank gốc)]] (1997) · SEO: **cao**
- [[US6799176B1 - Phương pháp chấm điểm tài liệu trong cơ sở dữ liệu liên kết]] (1997) · SEO: **trung bình**
- [[US7269587B1 - Chấm điểm tài liệu trong cơ sở dữ liệu liên kết (PageRank)]] (1997) · SEO: **trung bình**
- [[US7213198B1 - Gom cụm tài liệu dựa trên liên kết]] (1999) · SEO: **thấp**
- [[US6754873B1 - Tìm tài liệu liên quan bằng phân tích liên kết]] (1999) · SEO: **trung bình**
- [[US8127220B1 - Chấm điểm các link trong tài liệu]] (1999) · SEO: **thấp**
- [[US6526440B1 - Xếp hạng lại kết quả dựa trên mức liên kết nội bộ trong tập kết quả]] (2001) · SEO: **trung bình**
- [[US7028029B2 - Tính toán xếp hạng thích ứng]] (2003) · SEO: **thấp**
- [[US10210256B2 - Index thẻ anchor trong hệ thống web crawler]] (2003) · SEO: **cao**
- [[US8719276B1 - Xếp hạng node dựa trên tính độc lập giữa các node]] (2003) · SEO: **cao**
- [[US8595270B2 - Anchor nhân tạo cho tài liệu (link tới đoạn trong trang)]] (2003) · SEO: **trung bình**
- [[US8577893B1 - Xếp hạng dựa trên ngữ cảnh của tham chiếu (link)]] (2004) · SEO: **cao**
- [[US7260573B1 - Cá nhân hóa điểm anchor text trong search engine]] (2004) · SEO: **thấp**
- [[US7716225B1 - Xếp hạng tài liệu dựa trên hành vi người dùng và đặc điểm link (Reasonable Surfer)]] (2004) · SEO: **cao**
- [[US8825645B1 - Xác định chất lượng tài liệu được liên kết]] (2004) · SEO: **cao**
- [[US8762225B1 - Chấm điểm tài liệu (sách)]] (2004) · SEO: **thấp**
- [[US9208229B2 - Tổng hợp anchor text để chứng thực fact]] (2005) · SEO: **trung bình**
- [[US9165040B1 - Xếp hạng trang bằng khoảng cách trong đồ thị link (Seed-set PageRank)]] (2006) · SEO: **cao**
- [[US8086594B1 - Chấm điểm liên quan tài liệu theo hai nhánh]] (2007) · SEO: **thấp**
- [[US8732187B1 - Xếp hạng theo link cho đối tượng không có link rõ ràng]] (2007) · SEO: **thấp**
- [[US8768932B1 - Xếp hạng kết quả tìm kiếm theo thuộc tính]] (2007) · SEO: **thấp**
- [[US8166046B1 - Bộ lọc link]] (2007) · SEO: **thấp**
- [[US10270791B1 - Ma trận chuyển tiếp giữa các entity tìm kiếm và ứng dụng]] (2009) · SEO: **trung bình**
- [[US8959093B1 - Xếp hạng kết quả dựa trên anchor]] (2010) · SEO: **cao**
- [[US8386495B1 - Đồ thị tài liệu mở rộng để chấm điểm tài liệu]] (2010) · SEO: **trung bình**
<!-- /auto:patents -->

## Cách audit

**A. Sức mạnh & độ tin cậy của nguồn link** (US6285999, US9165040, US6526440)
1. Đánh giá backlink theo **sức mạnh trang nguồn** (UR/PA) và **số link ra** trên trang nguồn — không đếm tổng số link.
2. Liệt kê các nguồn uy tín nhất ngành (báo lớn, cơ quan nhà nước, hiệp hội, đại học, Wikipedia) → site đã có link từ nhóm này, hoặc từ site được nhóm này link tới chưa ("khoảng cách tới seed").
3. Tỷ lệ backlink từ site **cùng chủ đề ngành** / tổng số.

**B. Tính độc lập của nguồn** (US8825645, US8719276, US6754873)
1. Nhóm backlink theo **chủ sở hữu**: cùng IP/C-class, WHOIS, GA/AdSense ID, theme/footer giống nhau → đếm **số chủ sở hữu độc lập**.
2. Mức phụ thuộc: % sức mạnh link đến từ top 5 referring domain.
3. Phát hiện host có hàng trăm link tới site (sitewide).

**C. Vị trí & ngữ cảnh link** (US7716225, US8577893, US10210256)
1. Phân loại backlink theo vị trí: **trong nội dung** / sidebar / footer / comment / profile.
2. Đoạn văn quanh link: có thuật ngữ chuyên ngành cụ thể không, hay là câu mẫu lặp lại (guest post template).
3. Phân bố anchor text: brand / URL / chủ đề / chung chung — cảnh báo nếu anchor exact-match chiếm tỷ lệ bất thường.

**D. Link nội bộ** (US6285999, US7716225, US10210256)
1. Tính PageRank nội bộ (Screaming Frog Link Score / Sitebulb): trang chủ lực có nhận đủ link nội bộ không.
2. Trang mồ côi, trang sâu > 3 click từ trang chủ.
3. Link nội bộ tới trang chủ lực nằm **trong thân bài**, anchor mô tả rõ (không "xem thêm", "click here").
4. Mega menu/footer quá nhiều link làm loãng trọng số.

**E. Link có giá trị hành vi** (US8959093, US8386495, US9558233)
1. GA4 → Referral: backlink nào mang **traffic thật** → nhân rộng loại link đó.
2. Với từ khoá mục tiêu: trang nào đang xếp hạng top 20 (không phải đối thủ trực tiếp) → mục tiêu xin link.
3. Dùng các trang có traffic organic cao nhất của site làm nguồn link nội bộ tới trang cần đẩy.

**F. Co-citation & entity** (US6754873, US9208229)
1. Tìm bài "top X", danh sách nhà cung cấp, bài so sánh đang nhắc/link đối thủ nhưng chưa có bạn.
2. Tỷ lệ anchor chứa **tên thương hiệu chính xác** (giúp gắn với entity trong Knowledge Graph).

## Việc cần làm
- [ ] Dựng template báo cáo audit "Liên kết" theo 6 mục A–F
- [ ] Xác định ngưỡng cảnh báo: % link từ nguồn không độc lập, % anchor exact-match, % link footer/sidebar
- [ ] Đối chiếu với mục C của [[Chất lượng site (Panda, site quality)]] (tỷ lệ link chất lượng thấp → phân loại site kém)
- [ ] Đối chiếu leak Yandex (Yandex nổi tiếng giảm mạnh vai trò link thương mại từ 2014)
