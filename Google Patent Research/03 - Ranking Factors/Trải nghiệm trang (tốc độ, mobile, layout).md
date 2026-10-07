---
factor: page-experience
theme: "Trải nghiệm trang (tốc độ, mobile, layout)"
priority: P2
yandex_consensus:
patents: ["US7676745B2", "US8019700B2", "US8645362B1", "US11036804B1", "US9767169B1", "US20160314215A1"]
tags: [factor, factor/page-experience]
---

# Trải nghiệm trang (tốc độ, mobile, layout)

## Định nghĩa
- **Tốc độ theo dữ liệu thật**: thời gian tải đo từ thiết bị người dùng (field data) điều chỉnh điểm xếp hạng ([[US8645362B1 - Dùng thời gian tải trang để xếp hạng kết quả tìm kiếm]]) → Core Web Vitals / CrUX.
- **Mobile-friendly sau khi render**: viewport, cỡ chữ, vùng chạm, nội dung vừa màn hình ([[US20160314215A1 - Tính điểm mobile-friendly cho tài liệu]]); xếp hạng khác nhau theo thiết bị ([[US11036804B1 - Điều chỉnh theo thiết bị dựa trên mức hữu dụng của tài liệu]]).
- **Bố cục thị giác**: trang được chia khối theo khoảng trắng; nội dung chính phải tách biệt rõ ([[US7676745B2 - Phân đoạn tài liệu dựa trên khoảng trống thị giác]]).
- **An toàn**: redirect/malware bị phát hiện ([[US8019700B2 - Phát hiện landing page gây phiền toái (intrusive)]]).

## Tín hiệu leak liên quan
- **Google:** dữ liệu Chrome, Core Web Vitals trong tín hiệu chất lượng. _(Cần đối chiếu.)_
- **Yandex:** _chưa đối chiếu_

## Patent giải thích (6)
<!-- auto:patents -->
- [[US7676745B2 - Phân đoạn tài liệu dựa trên khoảng trống thị giác]] (2004) · SEO: **trung bình**
- [[US8019700B2 - Phát hiện landing page gây phiền toái (intrusive)]] (2007) · SEO: **trung bình**
- [[US8645362B1 - Dùng thời gian tải trang để xếp hạng kết quả tìm kiếm]] (2010) · SEO: **cao**
- [[US11036804B1 - Điều chỉnh theo thiết bị dựa trên mức hữu dụng của tài liệu]] (2014) · SEO: **trung bình**
- [[US9767169B1 - Cải thiện khả năng đọc của kết quả tìm kiếm]] (2014) · SEO: **thấp**
- [[US20160314215A1 - Tính điểm mobile-friendly cho tài liệu]] (2015) · SEO: **cao**
<!-- /auto:patents -->

## Cách audit
**A. Tốc độ**: CWV field data (GSC/CrUX: LCP, INP, CLS); TTFB và kích thước HTML khi crawl.
**B. Mobile**: meta viewport; nội dung mobile tương đương desktop; so vị trí mobile vs desktop (GSC).
**C. Bố cục**: nội dung chính tách khỏi sidebar/quảng cáo; không pop-up che nội dung.
**D. An toàn**: HTTPS, không mixed content, GSC Vấn đề bảo mật, Safe Browsing.

## Việc cần làm
- [x] Module trải nghiệm trang (phần đo được khi crawl) trong công cụ audit
