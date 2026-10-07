---
patent_id: US6799176B1
title: "Phương pháp chấm điểm tài liệu trong cơ sở dữ liệu liên kết"
title_en: "Method for scoring documents in a linked database"
assignee: "Google LLC"
assignee_original: "Leland Stanford Junior University"
priority_date: 1997-01-10
filing_date: 2001-07-06
grant_date: 2004-09-28
legal_status: "Expired - Lifetime"
expiration: 2018-06-29
cpc: ["G06F16/00", "G06F16/90", "G06F16/95", "G06F16/951", "G06F16/30", "G06F16/38", "G06F16/382"]
inventors: ["Lawrence Page"]
layer: core
factors: ["links"]
family: []
status: analyzed
seo_relevance: trung bình
auto: true
source_url: https://patents.google.com/patent/US6799176B1/en
tags: ["patent/core", "status/analyzed", "seo/trung-bình", "factor/links"]
---

# Phương pháp chấm điểm tài liệu trong cơ sở dữ liệu liên kết
*Tên gốc: Method for scoring documents in a linked database*

> [!info] US6799176B1 · Google LLC · ưu tiên 1997-01-10 · cấp 2004-09-28
> **Tác giả:** Lawrence Page
> **Nhóm yếu tố:** [[Liên kết & PageRank]]
> **Trạng thái pháp lý:** Expired - Lifetime (hết hạn 2018-06-29) · [Google Patents](https://patents.google.com/patent/US6799176B1/en)
> **Mức liên quan SEO:** trung bình

## Tóm tắt
Xác định các link từ trang nguồn tới trang đích, đánh giá mức quan trọng của từng link, gán trọng số cho link theo mức quan trọng đó, rồi chấm điểm trang đích dựa trên các link có trọng số.

> [!quote]- Tóm tắt gốc (tiếng Anh)
> A method is presented for scoring documents stored in a network. The method includes identifying links from linking documents to linked documents in the network and determining an importance of the identified links. The method further includes weighting the identified links based on the determined importance and scoring the linked documents based on the weighted links.

## Cơ chế hoạt động
- Biến thể PageRank: tính **xác suất người tìm kiếm tới được mỗi tài liệu sau khi đi theo một số link**, và chấm điểm theo xác suất đó.
- Bản mô tả cho phép gán **trọng số khác nhau cho từng link** theo mức quan trọng (không nhất thiết chia đều).

## Claims chính
1 claim độc lập / 1 claim.

> [!quote]- Claims độc lập (bản gốc tiếng Anh)
> 1. A computer implemented method for scoring documents, at least some of the documents containing links to other ones of the documents, the method comprising: determining a probability that a searcher will access each of the documents after following a number of the links; and scoring each of the documents based on the determined probability.

## Liên hệ với leak
- **Google leak 2024:** Xem `PageRank_NS` trong leak.
- **Yandex 2023:** _chưa đối chiếu_

## Ý nghĩa SEO
- Tiền đề cho việc link có trọng số khác nhau (vị trí, ngữ cảnh) → phát triển thành Reasonable Surfer.

## Hành động audit
_Không có hành động audit trực tiếp._

## Patent liên quan
- [[US6285999B1 - Phương pháp xếp hạng node trong cơ sở dữ liệu liên kết (PageRank gốc)]] _(Trích dẫn)_
- [[US7269587B1 - Chấm điểm tài liệu trong cơ sở dữ liệu liên kết (PageRank)]] _(Trích dẫn)_
- [[US8127220B1 - Chấm điểm các link trong tài liệu]] _(Trích dẫn)_
- [[US7716225B1 - Xếp hạng tài liệu dựa trên hành vi người dùng và đặc điểm link (Reasonable Surfer)]] _(Được trích dẫn bởi)_
- [[US7831545B1 - Xác định chủ thể chung của một tập fact]] _(Được trích dẫn bởi)_
- [[US7966291B1 - Gộp đối tượng dựa trên fact]] _(Được trích dẫn bởi)_
- [[US7970766B1 - Gán loại entity]] _(Được trích dẫn bởi)_
- [[US7996379B1 - Xếp hạng tài liệu bằng quan hệ giữa các từ]] _(Được trích dẫn bởi)_
- [[US8239350B1 - Giải quyết ngày tháng mơ hồ]] _(Được trích dẫn bởi)_
- [[US8244689B2 - Dùng entropy thuộc tính làm tín hiệu chuẩn hóa đối tượng]] _(Được trích dẫn bởi)_
- [[US8452746B2 - Phát hiện kết quả spam cho query xử lý theo ngữ cảnh]] _(Được trích dẫn bởi)_
- [[US8682913B1 - Chứng thực fact trích từ nhiều nguồn]] _(Được trích dẫn bởi)_
- [[US8738643B1 - Học tên đồng nghĩa của đối tượng từ anchor text]] _(Được trích dẫn bởi)_
- [[US8812435B1 - Học đối tượng và fact từ tài liệu]] _(Được trích dẫn bởi)_
- [[US9208229B2 - Tổng hợp anchor text để chứng thực fact]] _(Được trích dẫn bởi)_
- [[US9558233B1 - Xác định chỉ số chất lượng cho tài liệu]] _(Được trích dẫn bởi)_
- [[US7213198B1 - Gom cụm tài liệu dựa trên liên kết]] _(Được trích dẫn bởi)_
- [[US6754873B1 - Tìm tài liệu liên quan bằng phân tích liên kết]] _(Được trích dẫn bởi)_
- [[US8001118B2 - Dùng thống kê sử dụng trong truy xuất tài liệu]] _(Được trích dẫn bởi)_
- [[US7451130B2 - Ưu tiên quốc gia trong kết quả tìm kiếm]] _(Được trích dẫn bởi)_
- [[US7725452B1 - Bộ lập lịch cho crawler của search engine]] _(Được trích dẫn bởi)_
- [[US8548995B1 - Xếp hạng tài liệu dựa trên phân tích tài liệu liên quan]] _(Được trích dẫn bởi)_
- [[US7454417B2 - Cải thiện xếp hạng bằng thông tin nhóm người dùng (population)]] _(Được trích dẫn bởi)_
- [[US7505964B2 - Cải thiện xếp hạng bằng các query liên quan]] _(Được trích dẫn bởi)_
- [[US7797316B2 - Xác định độ tươi (freshness) của tài liệu]] _(Được trích dẫn bởi)_
- [[US7346839B2 - Truy xuất thông tin dựa trên dữ liệu lịch sử]] _(Được trích dẫn bởi)_
- [[US8719276B1 - Xếp hạng node dựa trên tính độc lập giữa các node]] _(Được trích dẫn bởi)_
- [[US7302645B1 - Xác định bài viết bị thao túng]] _(Được trích dẫn bởi)_
- [[US7774782B1 - Giới hạn số request của crawler tới một host]] _(Được trích dẫn bởi)_
- [[US7925657B1 - Điều chỉnh điểm dựa trên độ rộng của query]] _(Được trích dẫn bởi)_
- [[US7260573B1 - Cá nhân hóa điểm anchor text trong search engine]] _(Được trích dẫn bởi)_
- [[US7673253B1 - Suy ra khái niệm gắn với nội dung]] _(Được trích dẫn bởi)_
- [[US8078607B2 - Tạo hồ sơ website dựa trên query và hành vi người dùng trên kết quả]] _(Được trích dẫn bởi)_
- [[US8874570B1 - Vector tăng hạng dựa trên dữ liệu cùng truy cập (co-visitation)]] _(Được trích dẫn bởi)_
- [[US7756887B1 - Điều chỉnh độ liên quan bằng theo dõi hoạt động con trỏ chuột]] _(Được trích dẫn bởi)_
- [[US8090736B1 - Cải thiện kết quả bằng quan hệ khái niệm giữa tài liệu]] _(Được trích dẫn bởi)_
- [[US7565345B2 - Tích hợp nhiều mô hình sửa query]] _(Được trích dẫn bởi)_
- [[US8423541B1 - Dùng kết quả được người dùng lưu lại làm phản hồi chất lượng]] _(Được trích dẫn bởi)_
- [[US7636714B1 - Xác định từ đồng nghĩa trong ngữ cảnh query]] _(Được trích dẫn bởi)_
- [[US8386459B1 - Lập lịch crawl lại]] _(Được trích dẫn bởi)_
- [[US8666964B1 - Quản lý các mục trong lịch crawl]] _(Được trích dẫn bởi)_
- [[US7509315B1 - Quản lý URL khi crawl]] _(Được trích dẫn bởi)_
- [[US7565358B2 - Agent Rank (xếp hạng tác giả)]] _(Được trích dẫn bởi)_
- [[US8438469B1 - Nhúng thông tin review và đánh giá vào tài liệu]] _(Được trích dẫn bởi)_
- [[US7971137B2 - Phát hiện và loại bỏ tài liệu gây khó chịu]] _(Được trích dẫn bởi)_
- [[US7603350B1 - Xếp hạng kết quả tìm kiếm dựa trên độ tin cậy (trust)]] _(Được trích dẫn bởi)_
- [[US8533226B1 - Xác minh và thu hồi quyền sở hữu website trong hệ thống index]] _(Được trích dẫn bởi)_
- [[US7930400B1 - Quản lý nhiều tên miền cho một website trong hệ thống index]] _(Được trích dẫn bởi)_
- [[US8661029B1 - Điều chỉnh xếp hạng dựa trên phản hồi ngầm của người dùng (Navboost)]] _(Được trích dẫn bởi)_
- [[US8983970B1 - Xếp hạng nội dung theo nội dung và tác giả]] _(Được trích dẫn bởi)_
- [[US8938463B1 - Điều chỉnh xếp hạng bằng phản hồi ngầm và mô hình thiên lệch vị trí]] _(Được trích dẫn bởi)_
- [[US8694374B1 - Phát hiện click spam]] _(Được trích dẫn bởi)_
- [[US8732187B1 - Xếp hạng theo link cho đối tượng không có link rõ ràng]] _(Được trích dẫn bởi)_
- [[US9092510B1 - Điều chỉnh xếp hạng dựa trên yếu tố thời gian của phản hồi người dùng]] _(Được trích dẫn bởi)_
- [[US9323827B2 - Xác định từ khóa chính cho các đoạn văn tương tự]] _(Được trích dẫn bởi)_
- [[US8200694B1 - Nhận diện query có ý định địa phương ngầm]] _(Được trích dẫn bởi)_
- [[US9178848B1 - Xác định các domain có liên kết với nhau (affiliated)]] _(Được trích dẫn bởi)_
- [[US8694511B1 - Điều chỉnh xếp hạng dựa trên nhóm người dùng (population)]] _(Được trích dẫn bởi)_
- [[US8166046B1 - Bộ lọc link]] _(Được trích dẫn bởi)_
- [[US8019700B2 - Phát hiện landing page gây phiền toái (intrusive)]] _(Được trích dẫn bởi)_
- [[US8909655B1 - Xếp hạng theo thời gian]] _(Được trích dẫn bởi)_
- [[US8150842B2 - Uy tín của tác giả nội dung trực tuyến]] _(Được trích dẫn bởi)_
- [[US8788490B1 - Xác định quốc giangôn ngữ của domain dựa trên link]] _(Được trích dẫn bởi)_
- [[US8396865B1 - Chia sẻ dữ liệu độ liên quan giữa các kho dữ liệu]] _(Được trích dẫn bởi)_
- [[US9009146B1 - Xếp hạng kết quả dựa trên các query tương tự]] _(Được trích dẫn bởi)_
- [[US9098582B1 - Xác định ngôn ngữ liên quan của tài liệu qua ngữ cảnh link]] _(Được trích dẫn bởi)_
- [[US8447760B1 - Tạo tập tài liệu liên quan cho một tập tài liệu ban đầu]] _(Được trích dẫn bởi)_
- [[US8972391B1 - Chấm điểm liên quan dựa trên mối quan tâm gần đây]] _(Được trích dẫn bởi)_
- [[US8874555B1 - Điều chỉnh dữ liệu chấm điểm dựa trên thay đổi lịch sử]] _(Được trích dẫn bởi)_
- [[US8903812B1 - Tín hiệu chất lượng độc lập với query]] _(Được trích dẫn bởi)_
- [[US8615514B1 - Đánh giá thuộc tính website bằng cách phân nhóm phản hồi người dùng]] _(Được trích dẫn bởi)_
- [[US8924379B1 - Điều chỉnh điểm theo thời gian]] _(Được trích dẫn bởi)_
- [[US8959093B1 - Xếp hạng kết quả dựa trên anchor]] _(Được trích dẫn bởi)_
- [[US8386495B1 - Đồ thị tài liệu mở rộng để chấm điểm tài liệu]] _(Được trích dẫn bởi)_
- [[US8832083B1 - Kết hợp các nguồn phản hồi người dùng]] _(Được trích dẫn bởi)_
- [[US9002867B1 - Điều chỉnh dữ liệu xếp hạng dựa trên thay đổi của tài liệu]] _(Được trích dẫn bởi)_
- [[US8819000B1 - Sửa đổi query]] _(Được trích dẫn bởi)_
- [[US8965882B1 - Đánh giá quy tắc đồng nghĩa bằng clickskip]] _(Được trích dẫn bởi)_
- [[US9152698B1 - Xác định từ thay thế dựa trên các từ xuất hiện nhiều bất thường]] _(Được trích dẫn bởi)_
- [[US8775924B1 - Xử lý trang web dựa trên chất lượng nội dung]] _(Được trích dẫn bởi)_
- [[US8959103B1 - Đánh giá quy tắc đảo thứ tự từ bằng clickskip]] _(Được trích dẫn bởi)_
- [[US9020927B1 - Xác định chất lượng tài liệu dựa trên cạnh tranh giữa các kết quả]] _(Được trích dẫn bởi)_
- [[US9767157B2 - Dự đoán chất lượng site]] _(Được trích dẫn bởi)_
- [[US9183499B1 - Đánh giá chất lượng dựa trên đặc điểm của các trang lân cận]] _(Được trích dẫn bởi)_

**Patent Google liên quan khác (chưa có trong vault):**
- [US7222127B1](https://patents.google.com/patent/US7222127B1/en) Large scale machine learning systems and methods _(Được trích dẫn bởi)_
- [WO2007044975A3](https://patents.google.com/patent/WO2007044975A3/en) Entity display priority in a distributed geographic information system _(Được trích dẫn bởi)_
- [US20080162260A1](https://patents.google.com/patent/US20080162260A1/en) Network node ad targeting _(Được trích dẫn bởi)_
- [US7565630B1](https://patents.google.com/patent/US7565630B1/en) Customization of search results for search queries received from third party sites _(Được trích dẫn bởi)_
- [US7587391B1](https://patents.google.com/patent/US7587391B1/en) Method and apparatus for generating a preference ranking _(Được trích dẫn bởi)_
- [US7716223B2](https://patents.google.com/patent/US7716223B2/en) Variable personalization of search results in a search engine _(Được trích dẫn bởi)_
- [US7783639B1](https://patents.google.com/patent/US7783639B1/en) Determining quality of linked documents _(Được trích dẫn bởi)_
- [US20110010384A1](https://patents.google.com/patent/US20110010384A1/en) Multi-community content sharing in online social networks _(Được trích dẫn bởi)_
- [US20110022621A1](https://patents.google.com/patent/US20110022621A1/en) Dynamically naming communities within online social networks _(Được trích dẫn bởi)_
- [US20110022602A1](https://patents.google.com/patent/US20110022602A1/en) Ranking Social Network Objects _(Được trích dẫn bởi)_
- [US7991797B2](https://patents.google.com/patent/US7991797B2/en) ID persistence through normalization _(Được trích dẫn bởi)_
- [US8015019B1](https://patents.google.com/patent/US8015019B1/en) Methods and systems for providing a document _(Được trích dẫn bởi)_
- [US8019875B1](https://patents.google.com/patent/US8019875B1/en) Systems and methods for indicating a user state in a social network _(Được trích dẫn bởi)_
- [US8060405B1](https://patents.google.com/patent/US8060405B1/en) Methods and systems for correlating connections between users and links between articles _(Được trích dẫn bởi)_
- [US8122026B1](https://patents.google.com/patent/US8122026B1/en) Finding and disambiguating references to entities on web pages _(Được trích dẫn bởi)_

## Toàn văn mô tả
> [!note]- Bấm để mở toàn văn (bản gốc tiếng Anh)
> 
> ## CROSS-REFERENCES TO RELATED APPLICATIONS
> 
> 
> This application is a continuation of application Ser. No. 09/004,827, filed Jan. 9, 1998, now U.S. Pat. No. 6,285,999. This application claims priority from U.S. provisional patent application No. 60/035,205 filed Jan. 10, 1997, which is incorporated herein by reference.
> 
> 
> ## STATEMENT REGARDING GOVERNMENT SUPPORT
> 
> 
> This invention was supported in part by the National Science Foundation grant number IRI-9411306-4. The Government has certain rights in the invention:
> 
> 
> ## FIELD OF THE INVENTION
> 
> 
> This invention relates generally to techniques for analyzing linked databases. More particularly, it relates to methods for assigning ranks to nodes in a linked database, such as any database of documents containing citations, the world wide web or any other hypermedia database.
> 
> 
> ## BACKGROUND OF THE INVENTION
> 
> 
> Due to the developments in computer technology and its increase in popularity, large numbers of people have recently started to frequently search huge databases. For example, internet search engines are frequently used to search the entire world wide web. Currently, a popular search engine might execute over 30 million searches per day of the indexable part of the web, which has a size in excess of 500 Gigabytes. Information retrieval systems are traditionally judged by their precision and recall. What is often neglected, however, is the quality of the results produced by these search engines. Large databases of documents such as the web contain many low quality documents. As a result, searches typically return hundreds of irrelevant or unwanted documents which camouflage the few relevant ones. In order to improve the selectivity of the results, common techniques allow the user to constrain the scope of the search to a specified subset of the database, or to provide additional search terms. These techniques are most effective in cases where the database is homogeneous and already classified into subsets, or in cases where the user is searching for well known and specific information. In other cases, however, these techniques are often not effective because each constraint introduced by the user increases the chances that the desired information will be inadvertently eliminated from the search results.
> 
> Search engines presently use various techniques that attempt to present more relevant documents. Typically, documents are ranked according to variations of a standard vector space model. These variations could include (a) how recently the document was updated, and/or (b) how close the search terms are to the beginning of the document. Although this strategy provides search results that are better than with no ranking at all, the results still have relatively low quality. Moreover, when searching the highly competitive web, this measure of relevancy is vulnerable to “spamming” techniques that authors can use to artificially inflate their document's relevance in order to draw attention to it or its advertisements. For this reason search results often contain commercial appeals that should not be considered a match to the query. Although search engines are designed to avoid such ruses, poorly conceived mechanisms can result in disappointing failures to retrieve desired information.
> 
> Hyperlink Search Engine, developed by IDD Information Services, (http://rankdex.gari.com/) uses backlink information (i.e., information from pages that contain links to the current page) to assist in identifying relevant web documents. Rather than using the content of a document to determine relevance, the technique uses the anchor text of links to the document to characterize the relevance of a document. The idea of associating anchor text with the page the text points to was first implemented in the World Wide Web Worm (Oliver A. McBryan, GENVL and WWWW: Tools for Taming the Web, First International Conference on the World Wide Web, CERN, Geneva, May 25-27, 1994). The Hyperlink Search Engine has applied this idea to assist in determining document relevance in a search. In particular, search query terms are compared to a collection of anchor text descriptions that point to the page, rather than to a keyword index of the page content. A rank is then assigned to a document based on the degree to which the search terms match the anchor descriptions in its backlink documents.
> 
> The well known idea of citation counting is a simple method for determining the importance of a document by counting its number of citations, or backlinks. The citation rank r(A) of a document which has n backlink pages is simply
> 
> r(A)=n.
> 
> In the case of databases whose content is of relatively uniform quality and importance it is valid to assume that a highly cited document should be of greater interest than a document with only one or two citations. Many databases, however, have extreme variations in the quality and importance of documents. In these cases, citation ranking is overly simplistic. For example, citation ranking will give the same rank to a document that is cited once on an obscure page as to a similar document that is cited once on a well-known and highly respected page.
> 
> 
> ## SUMMARY OF THE INVENTION
> 
> 
> Various aspects of the present invention provide systems and methods for ranking documents in a linked database. One aspect provides an objective ranking based on the relationship between documents. Another aspect of the invention is directed to a technique for ranking documents within a database whose content has a large variation in quality and importance. Another aspect of the present invention is to provide a document ranking method that is scalable and can be applied to extremely large databases such as the world wide web. Additional aspects of the invention will become apparent in view of the following description and associated figures.
> 
> One aspect of the present invention is directed to taking advantage of the linked structure of a database to assign a rank to each document in the database, where the document rank is a measure of the importance of a document. Rather than determining relevance only from the intrinsic content of a document, or from the anchor text of backlinks to the document, a method consistent with the invention determines importance from the extrinsic relationships between documents. Intuitively, a document should be important (regardless of its content) if it is highly cited by other documents. Not all citations, however, are necessarily of equal significance. A citation from an important document is more important than a citation from a relatively unimportant document. Thus, the importance of a page, and hence the rank assigned to it, should depend not just on the number of citations it has, but on the importance of the citing documents as well. This implies a recursive definition of rank: the rank of a document is a function of the ranks of the documents which cite it. The ranks of documents may be calculated by an iterative procedure on a linked database.
> 
> Because citations, or links, are ways of directing attention, the important documents correspond to those documents to which the most attention is directed. Thus, a high rank indicates that a document is considered valuable by many people or by important people. Most likely, these are the pages to which someone performing a search would like to direct his or her attention. Looked at another way, the importance of a page is directly related to the steady-state probability that a random web surfer ends up at the page after following a large number of links. Because there is a larger probability that a surfer will end up at an important page than at an unimportant page, this method of ranking pages assigns higher ranks to the more important pages.
> 
> In one aspect of the invention, a computer implemented method is provided for scoring linked documents. The method includes identifying links from linking documents to linked documents in the network and determining an importance of the identified links. The method further includes weighting the identified links based on the determined importance and scoring the linked documents based on the weighted links.
> 
> In accordance with another implementation consistent with the present invention, a method for scoring documents, where at least some of the documents contain links to other ones of the documents, includes determining a probability that a searcher will access each of the documents after following a number of the links; and scoring each of the documents based on the determined probability.
> 
> In accordance with yet another implementation consistent with the present invention, a method scoring documents stored in a network includes traversing the network to identify links between the documents; identifying a location at which each of the documents is stored; weighting the links between documents based on the identified locations; and scoring the documents based on the weighted links.
> 
> In accordance with a further implementation consistent with the present invention, a method for scoring documents stored in a network includes identifying links from linking documents to linked documents in the network; determining an importance of the identified links; weighting the identified links based on the determined importance; and scoring the linked documents based on the weighted links.
> 
> In accordance with another implementation consistent with the present invention, a method for searching linked documents includes receiving a search query from a user; identifying a plurality of documents using the search query; identifying links to the identified documents from corresponding linking documents; assigning a score to each of the links based on a relationship between the link and user information; and presenting the identified documents to the user based on the scores assigned to the links.
> 
> In accordance with yet another implementation consistent with the present invention, a method for searching a network includes crawling the network to locate documents; creating a directed graph of the documents, the directed graph identifying links between the documents; and scoring each of the documents in the directed graph based on scores of the documents containing links to the document.
> 
> In a further implementation consistent with the present invention, a method for searching a network includes receiving one or more search terms; searching the network to identify first documents based on the one or more search terms; determining whether text of links in the first documents match the one or more search terms, each of the links identifying a second document; and generating search results that include the first documents and one or more of the second documents identified by the text of the links that match the one or more search terms.
> 
> In yet another implementation consistent with the present invention, a method of organizing linked documents includes: (a) identifying a first linked document; (b) identifying links between linking documents and the first linked document; (c) assigning a weight to each of the identified links; (d) determining a score for the first linked document based on (i) the identified links between the linking documents and the first linked document, and (ii) the weights assigned to each of the identified links; (e) repeating steps (a)-(d) for a second linked document; and (f) organizing the first and second linked documents based on the determined scores.
> 
> Additional aspects, applications and advantages will become apparent in view of the following description and associated figures.
> 
> 
> ## BRIEF DESCRIPTION OF THE DRAWINGS
> 
> 
> FIG. 1 is a diagram of the relationship between three linked hypertext documents according to the invention.
> 
> FIG. 2 is a diagram of a three-document web illustrating the rank associated with each document in accordance with the present invention.
> 
> FIG. 3 is a flowchart of one implementation of the invention.
> 
> 
> ## DETAILED DESCRIPTION
> 
> 
> Although the following detailed description contains many specifics for the purposes of illustration, anyone of ordinary skill in the art will appreciate that many variations and alterations to the following details are within the scope of the invention. Accordingly, the following embodiments of the invention are set forth without any loss of generality to, and without imposing limitations upon, the claimed invention. For support in reducing the present invention to practice, the inventor acknowledges Sergey Brin, Scott Hassan, Rajeev Motwani, Alan Steremberg, and Terry Winograd.
> 
> A linked database (i.e. any database of documents containing mutual citations, such as the world wide web or other hypermedia archive, a dictionary or thesaurus, and a database of academic articles, patents, or court cases) can be represented as a directed graph of N nodes, where each node corresponds to a web page document and where the directed connections between nodes correspond to links from one document to another. A given node has a set of forward links that connect it to children nodes, and a set of backward links that connect it to parent nodes. FIG. 1 shows a typical relationship between three hypertext documents A, B, and C. As shown in this particular figure, the first links in documents B and C are pointers to document A. In this case we say that B and C are backlinks of A, and that A is a forward link of B and of C. Documents B and C also have other forward links to documents that are not shown.
> 
> Although the ranking method of the present invention is superficially similar to the well known idea of citation counting, the present method is more subtle and complex than citation counting and gives far superior results. In a simple citation ranking, the rank of a document A which has n backlink pages is simply
> 
> r(A)=n.
> 
> According to one embodiment of the present method of ranking, the backlinks from different pages are weighted differently and the number of links on each page is normalized. More precisely, the rank of a page A is defined according to the present invention as r  ( A ) = α N + ( 1 - α )  ( r  ( B 1 )  B 1  + … + r  ( B n )  B n  ) ,
> 
> where B1, . . . , Bn are the backlink pages of A, r(B1), . . . , r(Bn) are their ranks, |B1|, . . . , |Bn| are their numbers of forward links, and α is a constant in the interval [0,1], and N is the total number of pages in the web. This definition is clearly more complicated and subtle than the simple citation rank. Like the citation rank, this definition yields a page rank that increases as the number of backlinks increases. But the present method considers a citation from a highly ranked backlink as more important than a citation from a lowly ranked backlink (provided both citations come from backlink documents that have an equal number of forward links). In the present invention, it is possible, therefore, for a document with only one backlink (from a very highly ranked page) to have a higher rank than another document with many backlinks (from very low ranked pages). This is not the case with simple citation ranking.
> 
> The ranks form a probability distribution over web pages, so that the sum of ranks over all web pages is unity. The rank of a page can be interpreted as the probability that a surfer will be at the page after following a large number of forward links. The constant α in the formula is interpreted as the probability that the web surfer will jump randomly to any web page instead of following a forward link. The page ranks for all the pages can be calculated using a simple iterative algorithm, and corresponds to the principal eigenvector of the normalized link matrix of the web, as will be discussed in more detail below.
> 
> In order to illustrate the present method of ranking, consider the simple web of three documents shown in FIG. 2. For simplicity of illustration, we assume in this example that r=0. Document A has a single backlink to document C, and this is the only forward link of document C, so
> 
> r(A)=r(C).
> 
> Document B has a single backlink to document A, but this is one of two forward links of document A, so
> 
> r(B)=r(A)/2.
> 
> Document C has two backlinks. One backlink is to document B, and this is the only forward link of document B. The other backlink is to document A via the other of the two forward links from A. Thus
> 
> r(C)=r(B)+r(A)/2.
> 
> In this simple illustrative case we can see by inspection that r(A)=0.4, r(B)=0.2, and r(C)=0.4. Although a typical value for α is ˜0.1, if for simplicity we set α=0.5 (which corresponds to a 50% chance that a surfer will randomly jump to one of the three pages rather than following a forward link), then the mathematical relationships between the ranks become more complicated. In particular, we then have
> 
> r(A)=1/6+r(C)/2,
> 
> r(B)=1/6+r(A)/4, and
> 
> r(C)=1/6+r(A)/4+r(B)/2.
> 
> The solution in this case is r(A)=14/39, r(B)=10/39, and r(C)=15/39.
> 
> In practice, there are millions of documents and it is not possible to find the solution to a million equations by inspection. Accordingly, in the preferred embodiment a simple iterative procedure is used. As the initial state we may simply set all the ranks equal to 1/N. The formulas are then used to calculate a new set of ranks based on the existing ranks. In the case of millions of documents, sufficient convergence typically takes on the order of 100 iterations. It is not always necessary or even desirable, however, to calculate the rank of every page with high precision. Even approximate rank values, using two or more iterations, can provide very valuable, or even superior, information.
> 
> The iteration process can be understood as a steady-state probability distribution calculated from a model of a random surfer. This model is mathematically equivalent to the explanation described above, but provides a more direct and concise characterization of the procedure. The model includes (a) an initial N-dimensional probability distribution vector p0 where each component p0[i] gives the initial probability that a random surfer will start at a node i, and (b) an N×N transition probability matrix A where each component A[i][j] gives the probability that the surfer will move from node i to node j. The probability distribution of the graph after the surfer follows one link is p1=Ap0, and after two links the probability distribution is p2=Ap1=A2p0. Assuming this iteration converges, it will converge to a steady-state probability p ∞ = lim n -> ∞  A n  p 0
> 
> which is a dominant eigenvector of A. The iteration circulates the probability through the linked nodes like energy flows through a circuit and accumulates in important places. Because pages with no links occur in significant numbers and bleed off energy, they cause some complication with computing the ranking. This complication is caused by the fact they can add huge amounts to the “random jump” factor. This, in turn, causes loops in the graph to be highly emphasized which is not generally a desirable property of the model. In order to address this problem, these childless pages can simply be removed from the model during the iterative stages, and added back in after the iteration is complete. After the childless pages are added back in, however, the same number of iterations that was required to remove them should be done to make sure they all receive a value. (Note that in order to ensure convergence, the norm of pi must be made equal to 1 after each iteration.) An alternate method to control the contribution of the childless nodes is to only estimate the steady state by iterating a small number of times.
> 
> The rank r[i] of a node i can then be defined as a function of this steady-state probability distribution. For example, the rank can be defined simply by r[i]=p∞[i]. This method of calculating rank is mathematically equivalent to the iterative method described first. Those skilled in the art will appreciate that this same method can be characterized in various different ways that are mathematically equivalent. Such characterizations are obviously within the scope of the present invention. Because the rank of various different documents can vary by orders of magnitude, it is convenient to define a logarithmic rank r  [ i ] = log   p ∞  [ i ] min k ∈ [ l , N ]  { p ∞  [ k ] }
> 
> which assigns a rank of 0 to the lowest ranked node and increases by 1 for each order of magnitude in importance higher than the lowest ranked node.
> 
> FIG. 3 shows one embodiment of a computer implemented method for calculating an importance rank for N linked nodes of a linked database. At a step 101, an initial N-dimensional vector p0 is selected. An approximation pn to a steady-state probability p∞ in accordance with the equation pn=Anp0 is computed at a step 103. Matrix A can be an N×N transition probability matrix having elements A[i][j] representing a probability of moving from node i to node j. At a step 105, a rank r[k] for node k from a kth component of pn is determined.
> 
> In one particular embodiment, a finite number of iterations are performed to approximate p∞. The initial distribution can be selected to be uniform or non-uniform. A uniform distribution would set each component of p0 equal to 1/N. A non-uniform distribution, for example, can divide the initial probability among a few nodes which are known a priori to have relatively large importance. This non-uniform distribution decreases the number of iterations required to obtain a close approximation to p∞ and also is one way to reduce the effect of artificially inflating relevance by adding unrelated terms.
> 
> In another particular embodiment, the transition matrix A is given by
> 
> A=α/N11+(1−α)B,
> 
> where 11 is an N×N matrix consisting of all 1s, α is the probability that a surfer will jump randomly to any one of the N nodes, and B is a matrix whose elements B[i][J] are given by B  [ i ]  [ j ] = { 1 / n i if   node   i   points   to   node   j 0 otherwise ,
> 
> where ni is the total number of forward links from node i. The (1−α) factor acts as a damping factor that limits the extent to which a document's rank can be inherited by children documents. This models the fact that users typically jump to a different place in the web after following a few links. The value of α is typically around 15%. Including this damping is important when many iterations are used to calculate the rank so that there is no artificial concentration of rank importance within loops of the web. Alternatively, one may set α=0 and only iterate a few times in the calculation.
> 
> Consistent with the present invention, there are several ways that this method can be adapted or altered for various purposes. As already mentioned above, rather than including the random linking probability α equally among all nodes, it can be divided in various ways among all the sites by changing the 11 matrix to another matrix. For example, it could be distributed so that a random jump takes the surfer to one of a few nodes that have a high importance, and will not take the surfer to any of the other nodes. This can be very effective in preventing deceptively tagged documents from receiving artificially inflated relevance. Alternatively, the random linking probability could be distributed so that random jumps do not happen from high importance nodes, and only happen from other nodes. This distribution would model a surfer who is more likely to make random jumps from unimportant sites and follow forward links from important sites. A modification to avoid drawing unwarranted attention to pages with artificially inflated relevance is to ignore local links between documents and only consider links between separate domains. Because the links from other sites to the document are not directly under the control of a typical web site designer, it is then difficult for the designer to artificially inflate the ranking. A simpler approach is to weight links from pages contained on the same web server less than links from other servers. Also, in addition to servers, internet domains and any general measure of the distance between links could be used to determine such a weighting.
> 
> Additional modifications can further improve the performance of this method. Rank can be increased for documents whose backlinks are maintained by different institutions and authors in various geographic locations. Or it can be increased if links come from unusually important web locations such as the root page of a domain.
> 
> Links can also be weighted by their relative importance within a document. For example, highly visible links that are near the top of a document can be given more weight. Also, links that are in large fonts or emphasized in other ways can be given more weight. In this way, the model better approximates human usage and authors' intentions. In many cases it is appropriate to assign higher value to links coming from pages that have been modified recently since such information is less likely to be obsolete.
> 
> Various implementations of the invention have the advantage that the convergence is very fast (a few hours using current processors) and it is much less expensive than building a full-text index. This speed allows the ranking to be customized or personalized for specific users. For example, a user's home page and/or bookmarks can be given a large initial importance, and/or a high probability of a random jump returning to it. This high rating essentially indicates to the system that the person's homepage and/or bookmarks does indeed contain subjects of importance that should be highly ranked. This procedure essentially trains the system to recognize pages related to the person's interests.
> 
> The present method of determining the rank of a document can also be used to enhance the display of documents. In particular, each link in a document can be annotated with an icon, text, or other indicator of the rank of the document that each link points to. Anyone viewing the document can then easily see the relative importance of various links in the document.
> 
> The present method of ranking documents in a database can also be useful for estimating the amount of attention any document receives on the web since it models human behavior when surfing the web. Estimating the importance of each backlink to a page can be useful for many purposes including site design, business arrangements with the backlinkers, and marketing. The effect of potential changes to the hypertext structure can be evaluated by adding them to the link structure and recomputing the ranking.
> 
> Real usage data, when available, can be used as a starting point for the model and as the distribution for the alpha factor. This can allow this ranking model to fill holes in the usage data, and provide a more accurate or comprehensive picture. Thus, although this method of ranking does not necessarily match the actual traffic, it nevertheless measures the degree of exposure a document has throughout the web.
> 
> Another important application and embodiment of the present invention is directed to enhancing the quality of results from web search engines. In this application of the present invention, a ranking method according to the invention is integrated into a web search engine to produce results far superior to existing methods in quality and performance. A search engine employing a ranking method of the present invention provides automation while producing results comparable to a human maintained categorized system. In this approach, a web crawler explores the web and creates an index of the web content, as well as a directed graph of nodes corresponding to the structure of hyperlinks. The nodes of the graph (i.e., pages of the web) are then ranked according to importance as described above in connection with various exemplary embodiments of the present invention.
> 
> The search engine is used to locate documents that match the specified search criteria, either by searching full text, or by searching titles only. In addition, the search can include the anchor text associated with backlinks to the page. This approach has several advantages in this context. First, anchors often provide more accurate descriptions of web pages than the pages themselves. Second, anchors may exist for images, programs, and other objects that cannot be indexed by a text-based search engine. This also makes it possible to return web pages which have not actually been crawled. In addition, the engine can compare the search terms with a list of its backlink document titles. Thus, even though the text of the document itself may not match the search terms, if the document is cited by documents whose titles or backlink anchor text match the search terms, the document will be considered a match. In addition to or instead of the anchor text, the text in the immediate vicinity of the backlink anchor text can also be compared to the search terms in order to improve the search.
> 
> Once a set of documents is identified that match the search terms, the list of documents is then sorted with high ranking documents first and low ranking documents last. The ranking in this case is a function which combines all of the above factors such as the objective ranking and textual matching. If desired, the results can be grouped by category or site as well.
> 
> It will be clear to one skilled in the art that the above embodiments may be altered in many ways without departing from the scope of the invention. Accordingly, the scope of the invention should be determined by the following claims and their legal equivalents.
