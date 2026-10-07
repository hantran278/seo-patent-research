---
factor: entities
theme: "Thực thể & Knowledge Graph"
priority: P2
yandex_consensus:
patents: ["US7953720B1", "US8682913B1", "US7769579B2", "US7831545B1", "US9558186B2", "US8244689B2", "US9710549B2", "US9135238B2", "US9760570B2", "US7966291B1", "US7970766B1", "US8812435B1", "US10068022B2", "US8843466B1", "US9275152B2", "US8954438B1", "US9110852B1", "US9390174B2", "US9047278B1", "US10235423B2", "US11403288B2", "US9336211B1", "US10108700B2", "US10339190B2", "US10331706B1", "US9898554B2", "US20230177360A1"]
tags: [factor, factor/entities]
---

# Thực thể & Knowledge Graph

## Định nghĩa
**Entity** (thực thể) là một "sự vật" xác định — người, doanh nghiệp, địa điểm, sản phẩm, khái niệm — có **thuộc tính** (fact) và **quan hệ** với entity khác. Google lưu chúng trong **Knowledge Graph** và dùng để: hiểu query, hiểu trang nói về gì, trả lời trực tiếp trên SERP, và hiển thị Knowledge Panel.

27 patent trong nhóm mô tả một **dây chuyền 4 bước**:

| Bước | Google làm gì | Patent chính |
|---|---|---|
| **1. Nhận diện entity trong trang** | Tìm trang nhắc tới entity qua sự đồng xuất hiện của các fact đặc trưng; phân biệt entity trùng tên bằng ngữ cảnh; xác định **entity chủ đề** của trang (có trong title/URL + trang xếp hạng cho entity đó) | [[US9760570B2 - Tìm và phân biệt tham chiếu entity trên trang web]], [[US9135238B2 - Phân biệt entity trùng tên]], [[US10068022B2 - Xác định entity chủ đề (topical entity) của trang]] |
| **2. Trích fact** | Học mẫu trình bày (bảng, "thuộc tính: giá trị", template title) để trích fact hàng loạt; dùng anchor text để xác định chủ thể | [[US9558186B2 - Trích xuất fact không giám sát]], [[US8812435B1 - Học đối tượng và fact từ tài liệu]], [[US7831545B1 - Xác định chủ thể chung của một tập fact]] |
| **3. Chứng thực & gộp** | Fact chỉ được tin khi **nhiều nguồn độc lập nhất quán**; gộp các bản ghi trùng qua tên chuẩn hoá và fact hiếm; entity mới chỉ được tạo khi đủ fact chứng thực chéo | [[US8682913B1 - Chứng thực fact trích từ nhiều nguồn]], [[US10331706B1 - Tự động phát hiện entity mới bằng đối chiếu đồ thị]], [[US9710549B2 - Chuẩn hóa entity qua chuẩn hóa tên]] |
| **4. Dùng trên SERP** | Trả lời câu hỏi từ entity xuất hiện nhiều nhất trong top kết quả; hiển thị thuộc tính người dùng hay hỏi nhất; entity liên quan | [[US10339190B2 - Trả lời câu hỏi bằng tham chiếu entity trong dữ liệu phi cấu trúc]], [[US9047278B1 - Xác định và xếp hạng thuộc tính của entity]], [[US9275152B2 - Entity liên quan]] |

**Ba hệ quả chính cho SEO:**
1. **Mỗi trang cần một entity chủ đề rõ ràng** (trong title, H1, URL) — nền tảng của semantic SEO.
2. **Nội dung về entity nên bao phủ các thuộc tính người dùng hay hỏi nhất** của loại entity đó (US9047278) — "attribute coverage".
3. **Thương hiệu là entity**: cần fact nhất quán trên nhiều nguồn độc lập để Google tin và tạo Knowledge Panel.

## Tín hiệu leak liên quan
- **Google:** dữ liệu entity gắn với tài liệu (nhóm `webrefEntities` — entity được nhận diện trong trang kèm điểm tin cậy và topicality); các thuộc tính liên quan tác giả/entity tác giả. _(Cần đối chiếu tên chính xác với leak gốc.)_
- **Yandex:** _chưa đối chiếu_

## Patent giải thích (27)
<!-- auto:patents -->
- [[US7953720B1 - Chọn câu trả lời tốt nhất cho query hỏi fact]] (2005) · SEO: **trung bình**
- [[US8682913B1 - Chứng thực fact trích từ nhiều nguồn]] (2005) · SEO: **cao**
- [[US7769579B2 - Học fact từ văn bản bán cấu trúc]] (2005) · SEO: **trung bình**
- [[US7831545B1 - Xác định chủ thể chung của một tập fact]] (2005) · SEO: **trung bình**
- [[US9558186B2 - Trích xuất fact không giám sát]] (2005) · SEO: **trung bình**
- [[US8244689B2 - Dùng entropy thuộc tính làm tín hiệu chuẩn hóa đối tượng]] (2006) · SEO: **thấp**
- [[US9710549B2 - Chuẩn hóa entity qua chuẩn hóa tên]] (2006) · SEO: **trung bình**
- [[US9135238B2 - Phân biệt entity trùng tên]] (2006) · SEO: **cao**
- [[US9760570B2 - Tìm và phân biệt tham chiếu entity trên trang web]] (2006) · SEO: **cao**
- [[US7966291B1 - Gộp đối tượng dựa trên fact]] (2007) · SEO: **thấp**
- [[US7970766B1 - Gán loại entity]] (2007) · SEO: **thấp**
- [[US8812435B1 - Học đối tượng và fact từ tài liệu]] (2007) · SEO: **trung bình**
- [[US10068022B2 - Xác định entity chủ đề (topical entity) của trang]] (2011) · SEO: **cao**
- [[US8843466B1 - Xác định entity bằng kết quả tìm kiếm]] (2011) · SEO: **trung bình**
- [[US9275152B2 - Entity liên quan]] (2012) · SEO: **trung bình**
- [[US8954438B1 - Trích xuất metadata có cấu trúc]] (2012) · SEO: **trung bình**
- [[US9110852B1 - Trích xuất thông tin từ văn bản]] (2012) · SEO: **thấp**
- [[US9390174B2 - Xếp hạng và trình bày kết quả tìm kiếm]] (2012) · SEO: **trung bình**
- [[US9047278B1 - Xác định và xếp hạng thuộc tính của entity]] (2012) · SEO: **cao**
- [[US10235423B2 - Xếp hạng kết quả tìm kiếm dựa trên chỉ số của entity]] (2012) · SEO: **trung bình**
- [[US11403288B2 - Truy vấn đồ thị dữ liệu bằng query ngôn ngữ tự nhiên]] (2013) · SEO: **thấp**
- [[US9336211B1 - Gắn entity với một query tìm kiếm]] (2013) · SEO: **trung bình**
- [[US10108700B2 - Hỏi đáp để bổ sung dữ liệu cho knowledge base]] (2013) · SEO: **trung bình**
- [[US10339190B2 - Trả lời câu hỏi bằng tham chiếu entity trong dữ liệu phi cấu trúc]] (2013) · SEO: **cao**
- [[US10331706B1 - Tự động phát hiện entity mới bằng đối chiếu đồ thị]] (2013) · SEO: **trung bình**
- [[US9898554B2 - Nhận diện query câu hỏi ngầm]] (2013) · SEO: **trung bình**
- [[US20230177360A1 - Hiển thị fact độc đáo về entity]] (2016) · SEO: **trung bình**
<!-- /auto:patents -->

## Cách audit

**A. Entity chủ đề của từng trang** (US10068022, US9135238, US10339190)
1. Mỗi trang chủ lực: xác định **1 entity chủ đề**; entity có nằm trong **title, H1, URL** không.
2. Chạy Google Natural Language API (hoặc công cụ entity extraction) trên nội dung → entity có salience cao nhất có đúng chủ đề mong muốn không.
3. Dùng **tên chuẩn** của entity (khớp Wikipedia/Knowledge Graph) ít nhất một lần; tên trùng từ thông dụng phải kèm ngữ cảnh.

**B. Độ bao phủ thuộc tính** (US9047278, US9390174, US9898554)
1. Với entity chủ đề: thu thập hậu tố/thuộc tính người dùng hay tìm (Autocomplete, People Also Ask, "Also rank for") → trang đã trả lời đủ chưa.
2. So độ bao phủ thuộc tính với top 3 đối thủ.
3. Query dạng "thuộc tính + entity": có câu trả lời trực tiếp 1–2 câu ở đầu; nội dung "top/lớn nhất" có bảng số liệu.

**C. Trình bày fact dễ trích xuất** (US9558186, US8812435, US9110852, US8954438)
1. Bảng thông số dạng "thuộc tính – giá trị" bằng HTML thật (`table`, `dl`), không phải ảnh.
2. Các trang cùng loại dùng **template nhất quán** (title, bố cục bảng).
3. Fact quan trọng viết thành **câu đơn rõ chủ–vị**.

**D. Thương hiệu như một entity** (US9336211, US8682913, US10331706, US9760570, US9710549)
1. Tìm tên thương hiệu: có Knowledge Panel không, thông tin có đúng không.
2. Lập **bảng đối chiếu fact** (tên, địa chỉ, SĐT, năm thành lập, người sáng lập, mô tả) trên website, Google Business Profile, Facebook, LinkedIn, danh bạ, báo chí → sửa mọi điểm không nhất quán.
3. Một tên thương hiệu chuẩn, dùng thống nhất; tên khác đưa vào `alternateName`.
4. Schema `Organization`/`LocalBusiness` đầy đủ: `name`, `logo`, `sameAs`, `foundingDate`, `founder`, `address`.
5. Đếm số **nguồn độc lập** nhắc tới thương hiệu kèm fact; cân nhắc Wikidata nếu đủ điều kiện.
6. Anchor text trỏ tới trang chủ/Giới thiệu dùng đúng tên thương hiệu (US7831545).

## Việc cần làm
- [ ] Dựng template "Entity audit" cho một trang: entity chủ đề, salience, thuộc tính đã/chưa bao phủ
- [ ] Dựng template "Brand entity audit": bảng đối chiếu fact đa nguồn + trạng thái Knowledge Panel
- [ ] Liên kết với nhóm [[Hiểu truy vấn (rewrite, synonym, intent)]] và [[Độ liên quan chủ đề & phrase-based indexing]] khi phân tích
- [ ] Đối chiếu leak Yandex
