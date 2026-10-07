---
patent_id: US9165040B1
title: "Xếp hạng trang bằng khoảng cách trong đồ thị link (Seed-set PageRank)"
title_en: "Producing a ranking for pages using distances in a web-link graph"
assignee: "Google LLC"
assignee_original: "Google LLC"
priority_date: 2006-10-12
filing_date: 2006-10-12
grant_date: 2015-10-20
legal_status: "Active"
expiration: 2027-07-07
cpc: ["G06F16/00", "G06F16/20", "G06F16/23", "G06F16/90", "G06F16/95", "G06F16/955", "G06F16/9558", "G06F17/3053", "G06F16/24", "G06F16/245", "G06F16/2457", "G06F16/24578"]
inventors: ["Nissan Hajaj"]
layer: core
factors: ["links"]
family: ["US9953049B1"]
status: analyzed
seo_relevance: cao
auto: true
source_url: https://patents.google.com/patent/US9165040B1/en
tags: ["patent/core", "status/analyzed", "seo/cao", "factor/links"]
---

# Xếp hạng trang bằng khoảng cách trong đồ thị link (Seed-set PageRank)
*Tên gốc: Producing a ranking for pages using distances in a web-link graph*

> [!info] US9165040B1 · Google LLC · ưu tiên 2006-10-12 · cấp 2015-10-20
> **Tác giả:** Nissan Hajaj
> **Nhóm yếu tố:** [[Liên kết & PageRank]]
> **Trạng thái pháp lý:** Active (hết hạn 2027-07-07) · [Google Patents](https://patents.google.com/patent/US9165040B1/en)
> **Cùng họ:** US9953049B1
> **Mức liên quan SEO:** cao

## Tóm tắt
Nhận tập trang cần xếp hạng và tập 'seed page' (trang hạt giống đáng tin cậy) có link ra tới các trang đó. Mỗi link được gán độ dài dựa trên đặc điểm của link và của trang. Hệ thống tính khoảng cách ngắn nhất từ các seed page tới từng trang; trang càng gần seed page càng được điểm cao.

> [!quote]- Tóm tắt gốc (tiếng Anh)
> Methods, systems, and apparatus, including computer programs encoded on a computer storage medium, for producing a ranking for pages on the web. In one aspect, a system receives a set of pages to be ranked, wherein the set of pages are interconnected with links. The system also receives a set of seed pages which include outgoing links to the set of pages. The system then assigns lengths to the links based on properties of the links and properties of the pages attached to the links. The system next computes shortest distances from the set of seed pages to each page in the set of pages based on the lengths of the links between the pages. Next, the system determines a ranking score for each page in the set of pages based on the computed shortest distances. The system then produces a ranking for the set of pages based on the ranking scores for the set of pages.

## Cơ chế hoạt động
- Chọn tập **seed page** — trang tin cậy, được chọn thủ công hoặc theo tiêu chí, có nhiều link ra tốt (ví dụ trang lớn, danh bạ uy tín).
- Mỗi link được gán **'độ dài'**: link từ trang có càng nhiều link ra thì càng dài (tức giá trị thấp hơn).
- Tính **khoảng cách ngắn nhất** từ các seed tới mỗi trang (theo seed gần thứ k, để tránh phụ thuộc 1 seed).
- Điểm xếp hạng dựa trên khoảng cách: **càng gần các trang tin cậy càng tốt**.

## Claims chính
3 claim độc lập / 34 claim.

> [!quote]- Claims độc lập (bản gốc tiếng Anh)
> 1. A method for producing a ranking for pages on the web, comprising: receiving a plurality of web pages, wherein the plurality of web pages are inter-linked with page links; receiving n seed pages, each seed page including at least one outgoing link to a respective web page in the plurality of web pages, wherein n is an integer greater than one; assigning, by one or more computers, a respective length to each page link and each outgoing link; identifying, by the one or more computers and from among the n seed pages, a kth-closest seed page to a first web page in the plurality of web pages according to the lengths of the links, wherein k is greater than one and less than n; determining a ranking score for the first web page from a shortest distance from the kth-closest seed page to the first web page; and producing a ranking for the first web page from the ranking score.
> 
> 12. A non-transitory computer-readable storage medium storing instructions that when executed by a computer cause the computer to perform operations comprising: receiving a plurality of web pages, wherein the plurality of web pages are inter-linked with page links; receiving n seed pages, each seed page including at least one outgoing link to a respective web page in the plurality of web pages, wherein n is an integer greater than one; assigning a respective length to each page link and each outgoing link; identifying, from among the n seed pages, a kth-closest seed page to a first web page in the plurality of web pages according to the lengths of the links, wherein k is greater than one less than n; determining a ranking score for the first web page from a shortest distance from the kth-closest seed page to the first web page; and producing a ranking for the first web page from the ranking score.
> 
> 23. A system, comprising: one or more computers coupled to one or more storage devices storing instructions that when executed by the one or more computers cause the one or more computers to perform operations comprising: receiving a plurality of web pages to be ranked, wherein the plurality of web pages are inter-linked with page links; receiving n seed pages, each seed page including at least one outgoing link to a respective web page in the plurality of web pages, wherein n is an integer greater than one; assigning a respective length to each page link; identifying, from among the n seed pages, a kth-closest seed page to a first web page in the plurality of web pages according to the lengths of the links, wherein k is an integer greater than one and less than n; determining a ranking score for the first web page from a shortest distance from the kth-closest seed page to the first web page; and producing a ranking for the first web page from the ranking score.

## Liên hệ với leak
- **Google leak 2024:** Leak có `PageRank_NS` (Nearest Seed) — xác nhận Google dùng PageRank tính theo khoảng cách tới tập seed, đúng như patent này.
- **Yandex 2023:** _chưa đối chiếu_

## Ý nghĩa SEO
- Đây được cho là PageRank hiện đại (PageRank_NS — nearest seed). Không phải số link, mà là **bạn cách các trang uy tín bao nhiêu bước**.
- Một link từ site uy tín trong ngành (báo lớn, .gov, .edu, hiệp hội) giá trị hơn nhiều link từ site vô danh.
- Link từ site nằm ngoài 'vùng tin cậy' (mạng PBN khép kín) gần như không có giá trị.

## Hành động audit
- [ ] Liệt kê các nguồn uy tín nhất trong ngành (báo lớn, cơ quan nhà nước, hiệp hội, trường đại học, Wikipedia) và kiểm tra site đã có link từ nhóm này hoặc từ site được nhóm này link tới chưa
- [ ] Đánh giá 'khoảng cách' gián tiếp: backlink đến từ site có được chính các nguồn uy tín link tới không
- [ ] Ưu tiên chiến dịch PR/link từ nguồn gần seed thay vì số lượng lớn link từ site nhỏ

## Patent liên quan
_Chưa có trong vault_

**Patent Google liên quan khác (chưa có trong vault):**
- [US9720896B1](https://patents.google.com/patent/US9720896B1/en) Synthesizing union tables from the web _(Được trích dẫn bởi)_

## Toàn văn mô tả
> [!note]- Bấm để mở toàn văn (bản gốc tiếng Anh)
> 
> ## BACKGROUND
> 
> 
> 1. Field of the Invention
> 
> The present invention generally relates to techniques for ranking pages on the web. More specifically, the present invention relates to a method for producing a ranking for pages on the web by computing shortest distances from a set of seed pages to each of the pages to be ranked, wherein the seed pages and the pages to be ranked are interconnected with links.
> 
> 2. Related Art
> 
> The relentless growth of the Internet has been largely fueled by the development of sophisticated search engines, which enable users to comb through billions of web pages looking for specific pages of interest. Because a given query can return millions of search results it is important to be able to rank these search results to present high-quality results to the user.
> 
> A popular search engine developed by Google Inc. of Mountain View, Calif. uses PageRank® as a page-quality metric for efficiently guiding the processes of web crawling, index selection, and web page ranking. Generally, the PageRank technique computes and assigns a PageRank score to each web page it encounters on the web, wherein the PageRank score serves as a measure of the relative quality of a given web page with respect to other web pages. PageRank generally ensures that important and high-quality web pages receive high PageRank scores, which enables a search engine to efficiently rank the search results based on their associated PageRank scores.
> 
> PageRank scores are computed based on the web link-graph structure, wherein the web pages are the nodes of the link-graph which are interconnected with hyperlinks. In this model, PageRank R for a given web page p can be computed as:
> 
> ∀ p ∈ P , R ⁡ ( p ) = ( 1 - d ) + d ⁢ ∑ q → p ⁢ R ⁡ ( q )  q  out , ( 1 ) wherein P is the set of all the web pages, |q|out is the out-degree of a specific page q in the set P, and 0≦d≦1 is a damping factor.
> 
> However, the simple formulation of Equation (1) for computing the PageRank is vulnerable to manipulations. Some web pages (called “spam pages”) can be designed to use various techniques to obtain artificially inflated PageRanks, for example, by forming “link farms” or creating “loops.”
> 
> One possible variation of PageRank that would reduce the effect of these techniques is to select a few “trusted” pages (also referred to as the seed pages) and discovers other pages which are likely to be good by following the links from the trusted pages. For example, the technique can use a set of high quality seed pages (s1, s2, sn), and for each seed page i=1, 2, . . . , n, the system can iteratively compute the PageRank scores for the set of the web pages P using the formulae:
> 
> ∀ s i ≠ p ∈ P , R i ⁡ ( p ) = d ⁢ ∑ q → p ⁢ R i ⁡ ( q )  q  out ⁢ w ⁡ ( q → p ) , ( 2 ) where Ri(si)=1, and w(q→p) is an optional weight given to the link q→p based on its properties (with the default weight of 1).
> 
> Generally, it is desirable to use large number of seed pages to accommodate the different languages and a wide range of fields which are contained in the fast growing web contents. Unfortunately, this variation of PageRank requires solving the entire system for each seed separately. Hence, as the number of seed pages increases, the complexity of computation increases linearly, thereby limiting the number of seeds that can be practically used.
> 
> Hence, what is needed is a method and an apparatus for producing a ranking for pages on the web using a large number of diversified seed pages without the problems of the above-described techniques.
> 
> 
> ## SUMMARY
> 
> 
> One embodiment of the present invention provides a system that produces a ranking for pages on the web. During operation, the system receives a set of pages to be ranked, wherein the set of pages are interconnected with links. The system also receives a set of seed pages which include outgoing links to the set of pages. The system then assigns lengths to the links based on properties of the links and properties of the pages attached to the links. The system next computes shortest distances from the set of seed pages to each page in the set of pages based on the lengths of the links between the pages. Next, the system determines a ranking score for each page in the set of pages based on the computed shortest distances. The system then produces a ranking for the set of pages based on the ranking scores for the set of pages.
> 
> In a variation on this embodiment, the system assigns a length to a link by computing a function of the number of outgoing links from the source page of the link.
> 
> In a further variation on this embodiment, the function is a monotonic non-decreasing function of the number of outgoing links from the source page, so that the length of the link increases as the number of outgoing links from the source page increases.
> 
> In a variation on this embodiment, the system computes a shortest distance from a seed page to a given page by summing lengths of individual links along a shortest path from the seed page to the given page.
> 
> In a further variation on this embodiment, the system computes the length of a link q→p by adding a term (α+log(|q|out)) to the length of the link, wherein α is a non-negative value, and wherein |q|out is the number of outgoing links from the source page q.
> 
> In a further variation on this embodiment, α=−log(d), wherein d is a damping factor.
> 
> In a variation on this embodiment, a seed page si in the set of seed pages is associated with a predetermined weight wherein 0<wi≦1. Furthermore, the seed page si is associated with an initial distance di wherein di=−log(wi).
> 
> In a further variation on this embodiment, the computed shortest distance from the seed page si to a given page includes the initial distance di.
> 
> In a variation on this embodiment, the system determines the ranking score for a given page based on the computed shortest distances by using k shortest distances from the k nearest seed pages to each page, wherein k is a predetermined positive integer.
> 
> In a further variation on this embodiment, the system determines the ranking score for a given page based on the computed shortest distances by using the kth shortest distance among the computed shortest distances.
> 
> In a further variation on this embodiment, the ranking score for the given page can be proportional to e−D(p), wherein D(p) is the kth shortest distance.
> 
> In a further variation on this embodiment, the function for the length of the link includes a weight of the link.
> 
> In a variation on this embodiment, the links associated with the computed shortest distances constitute a reduced link-graph.
> 
> 
> ## BRIEF DESCRIPTION OF THE FIGURES
> 
> 
> FIG. 1 graphically illustrates a link-graph structure of a set of pages on the web in accordance with an embodiment of the present invention.
> 
> FIG. 2 presents a flowchart illustrating the process of ranking pages on the web based on shortest distances in accordance with an embodiment of the present invention.
> 
> FIG. 3 illustrates the crawling, ranking and searching processes in accordance with an embodiment of the present invention.
> 
> 
> ## DETAILED DESCRIPTION
> 
> 
> The following description is presented to enable any person skilled in the art to make and use the invention, and is provided in the context of a particular application and its requirements. Various modifications to the disclosed embodiments will be readily apparent to those skilled in the art, and the general principles defined herein may be applied to other embodiments and applications without departing from the spirit and scope of the present invention. Thus, the present invention is not limited to the embodiments shown, but is to be accorded the widest scope consistent with the claims.
> 
> The data structures and code described in this detailed description are typically stored on a computer-readable storage medium, which may be any device or medium that can store code and/or data for use by a computer system. This includes, but is not limited to, magnetic and optical storage devices such as disk drives, magnetic tape, CDs (compact discs), DVDs (digital versatile discs or digital video discs), or any device capable of storing data usable by a computer system.
> 
> Overview
> 
> One embodiment of the present invention provides a system that ranks pages on the web based on distances between the pages, wherein the pages are interconnected with links to form a link-graph. More specifically, a set of high-quality seed pages are chosen as references for ranking the pages in the link-graph, and shortest distances from the set of seed pages to each given page in the link-graph are computed. Each of the shortest distances is obtained by summing lengths of a set of links which follows the shortest path from a seed page to a given page, wherein the length of a given link is assigned to the link based on properties of the link and properties of the page attached to the link. The computed shortest distances are then used to determine the ranking scores of the associated pages.
> 
> a Link-Graph and Seed Pages
> 
> FIG. 1 graphically illustrates a link-graph structure 100 of a set of pages on the web in accordance with an embodiment of the present invention. Link-graph 100 comprises a collection of pages which correspond to the nodes of the link-graph, and a collection of directed links between the pages, wherein these directed links correspond to the arcs of the link-graph. Note that each link is a directed connection from a “source” page to a “destination” page.
> 
> As illustrated in FIG. 1, the collection of pages is classified into two subsets of pages: a set of seed pages 102, and a set of non-seed pages 104. Seed pages (hereinafter referred to as “seeds”) 102 form the “root” nodes of link-graph 100, which comprise: seed 106, seed 108, and seed 110. Although for simplicity FIG. 1 is described in the context of three seeds, generally the present invention can use much more than three seeds. Note that seeds 102 are interconnected with link 107 and link 109.
> 
> Non-seed pages 104 include pages 112-130, wherein each page is either directly or indirectly connected to one or more seeds through the links in the link-graph. In one embodiment of the present invention, seeds 102 are specially selected high-quality pages which provide good web connectivity to other non-seed pages.
> 
> More specifically, to ensure that other high-quality pages are easily reachable from seeds 102, seeds in seeds 102 need to be reliable, diverse to cover a wide range of fields of public interests, as well as well-connected with other pages (i.e., having a large number of outgoing links). For example, Google Directory and The New York Times are both good seeds which possess such properties. It is typically assumed that these seeds are also “closer” to other high-quality pages on the web. In addition, seeds with large number of useful outgoing links facilitate identifying other useful and high-quality pages, thereby acting as “hubs” on the web.
> 
> One approach for choosing seeds involves selecting a diverse set of trusted seeds. Choosing a more diverse set of seeds can shorten the paths from the seeds to a given page. Hence, it would be desirable to have a largest possible set of seeds that include as many different types of seeds as possible. However, because selecting the seeds involves a human manually identifying these high-quality pages, the total number of the seeds is typically limited. Moreover, having too many seeds can make the selected seeds vulnerable to manipulation. Consequently, the actual number of the selected set of seeds is limited.
> 
> As illustrated in FIG. 1, a link from a seed to a page is represented by an arrow pointing from the seed to the page. For example, seed 106 links to page 112 and page 114 through links 132 and 134, respectively. Such links assert a “support” from the seed to the linked pages.
> 
> The set of non-seed pages 104 are also interconnected with links. For example, page 112 has three outgoing links 136, 137, and 138, which target at pages 118, 116 and 122, respectively. Furthermore, page 114 has two outgoing links 140 and 142, which connect to pages 118 and 120, respectively. Additionally, page 120 links to page 118 through link 144 as shown.
> 
> Note that pages 118, 120 and 128 form a loop, wherein these pages point to each other in a circular manner though links 144, 146, and 148. Furthermore, page 126 and page 128 also form a loop in which they point to each other through links 150 and 152.
> 
> Note that even though there is no direct link from seed 106 to page 118, page 118 is reachable from seed 106 via three distinct paths which are highlighted: (1) seed 106 page 112 page 118; (2) seed 106 page 114 page 118; and (3) seed 106 page 114 page 120 page 118. We are interested in determining a “shortest” path from seed 102 to page 118 among all of these possible paths, wherein the shortest path will be subsequently used to determine a ranking score for page 118. Note however that, the illustrated lengths of the links in FIG. 1 are not related to the metric which is used to determine the “lengths” of the links in computing the shortest path. We will discuss how to compute the lengths of the links below.
> 
> Using a Large Number of Seeds
> 
> In one embodiment of the present invention, a large number of reliable international seed pages s1, s2, . . . , sn are used to compute the PageRank scores. For each i=1, 2, . . . , n, we would like to calculate PageRank Ri based on Equation (2), and set the final PageRank for a page p in the set of pages P to be: R(p)=k_maxi=1, . . . n R i(p), (3) where k is a positive integer between 1 and n, and k_max represents the kth largest value.
> 
> With a large set of seeds, one may want to promote some seeds and demote others. This can be done by assigning each seed s1 an optional positive weight wi (which has a default value of 1), and modifying (3) by: R(p)=k_maxi=1, . . . n w i R i(p) (4)
> 
> Note that using the kth largest ranking score facilitates suppressing unfairly high scores due to lack of proportionality at the vicinity of the seeds. In practice, it is sufficient to choose k to be a small integer, for example, 3, 4, 5, or 6.
> 
> So far, we have ignored the complexity issues from using the large set of seeds. Next, we will discuss how to reduce the complexity of Equation (3), or (4).
> 
> Converting Weight to Length and Distance
> 
> To compute distances between pages in link-graph 100, we need to assign a “length” to every link. The length of a link can be a function of any set of properties of the link and the source of the link. These properties can include, but are not limited to, the link's position, the link's font, and the source page's out-degree.
> 
> Referring to Equation (2), for each link q→p, the contribution of page q to page p with respect to seed si can be expressed as:
> 
> C i ⁡ ( q , p ) = d ⁢ R i ⁡ ( q )  q  out ⁢ w ⁡ ( q → p ) . ( 5 ) In practice, it is found that the incoming contributions for a page have a significantly skewed distribution such that the sum of the all the incoming contributions is dominated by one or very few terms. Hence, one can make an approximation of the PageRank score for page p with respect to seed si by replacing Equation (2) with the dominant term in (2), that is:
> 
> ∀ s i ≠ p ∈ P , R i ⁡ ( p ) = max q → p ⁢ C i ⁡ ( q , p ) = d ⁢ ⁢ max q → p ⁢ R i ⁡ ( q )  q  out ⁢ w ⁡ ( q → p ) . ( 6 )
> 
> Note that Equation (6) provides a reasonable approximation of the PageRank for p.
> 
> Let s1, s2, . . . , sn be a set of seed pages, and for every 1≦i≦n, let wi be an optional positive weight (with default value of 1), we can approximate the PageRank of page p in the set of pages P with respect to the set of seeds s as: ∀1≦i≦n, R i(s i)=w i; (7)
> 
> ∀ ⁢ 1 ≤ i ≤ n , s i ≠ p ∈ P , R i ⁡ ( p ) = d ⁢ ⁢ max q → p ⁢ R i ⁡ ( q )  q  out ⁢ w ⁡ ( q → p ) ; ( 8 ) ∀pεP, R(p)=k_maxi=1, . . . n R i(p). (9)
> 
> Next, for each link q→p, we define the length of the link to be:
> 
> L ⁡ ( q → p ) = - log ⁡ ( d ) + log ⁡ (  q  out w ⁡ ( q → p ) ) . ( 10 )
> 
> Note that the length equation (10) includes a term log(|q|out), so that the length of the link increases as the number of outgoing links from the source page q increases. More generally, the length is a monotonic non-decreasing function of the number of outgoing links from the source. This definition is related to the PageRank computation in a sense that a higher ranking score is corresponding to a smaller out-degree |q|out, wherein the smaller out-degree results in a shorter length of the link. We will provide other length models for computing the length of a given link below.
> 
> For any given pair of pages u and v, let D(u, v) be the distance of the shortest path from u to v (if no such path exists, D(u, v)=∞). We define a distance system including the “shortest distances” Di(p) from the set of seeds s to page p according to: ∀1≦i≦n, D i(s i)=d i 0; (11)
> 
> ∀ ⁢ 1 ≤ i ≤ n , s i ≠ p ∈ P , D i ⁡ ( p ) = min q → p ⁢ ( D i ⁡ ( q ) + L ⁡ ( q → p ) ) ; ( 12 ) ∀pεP, D(p)=k_mini=1, . . . n D i(p), (13)
> 
> wherein di 0=−log(wi), with the default value of di 0=0 when wi=1.
> 
> Note that similar to assigning the kth largest value of Ri(p) as the final PageRank R(p), we have set the final “shortest distance” for page p as the kth shortest distance among the set of shortest distances Di(p), for the same reason as mentioned above.
> 
> The relation R•(p)=e−D • (p) defines a transformation from Equations (7), (8), and (9) to Equations (11), (12), and (13) such that:
> 
> ∀ 1 ≤ i ≤ n , p ∈ P , D i ⁡ ( p ) = d i 0 + D ⁡ ( s i , p ) ; ( 14 ) ∀1≦i≦n, pεP, R i(p)=e −D i (p); (15) ∀pεP, R(p)=e −D(p). (16)
> 
> From observing Equation (15), one would appreciate that a larger PageRank score for page p is corresponding to a shorter distance from seed si to page p. The meaning of Equation (16) is that instead of calculating the PageRank score R(p), one can alternatively calculate D(p), which is the distance from the kth nearest seed top (where the distance from seed si can include an optional initial distance di 0). Hence, the goal of the ranking computation is translated into findings the shortest distances to any given page from the nearest k seeds. This computation can be preformed together for all the pages and seeds.
> 
> Other Length Models
> 
> Referring back to Equation (10), if we ignore the weights that can be assigned to a link, we can rewrite the length of the link to be:
> 
> L ⁡ ( q → p ) = α + log ⁡ (  q  out ) , ( 17 ) wherein 0≦α=−log(d).
> 
> We then examine the conditions where a monotonic non-decreasing function 0≦ƒ: N→R can be used for defining the lengths of the links given the out-degrees of the source pages: L(q→p)=ƒ(|q|out).
> 
> We then consider the two following scenarios:
> 
> As expected, ƒ(d)=α+log(d) satisfies this condition, and so does ƒ≡1. More generally, every function ƒ(x)=g(log(x)), where g is a concave non-negative real function on [0, ∞), will satisfy condition (19), because for every 0≦n1, n2, g(log(n 1 n 2))−g(log(n 2))=g(log(n 1)+log(n 2))−g(log(n 2))≦g(log(n 1))−g(0)≦g(log(n i)). (20) General Process of Ranking Based on a Shortest Distance
> 
> FIG. 2 presents a flowchart illustrating the process of ranking pages on the web based on shortest distances in accordance with an embodiment of the present invention. During this process, the system first receives a set of pages to be ranked, wherein the set of pages are interconnected with links (step 202). Next, the system receives a set of n seed pages or “seeds”, wherein the seeds include outgoing links reaching out to the set of pages to be ranked (step 204). Hence, the set of pages, the seeds, and the links form a directed link-graph similar to the one illustrated in FIG. 1 (wherein n=3). The system then assigns length values to the links based on properties of the links and properties of the pages attached to the links (step 206). In one embodiment of the present invention, the length of a given link is computed using Equation (10), wherein the length is a function of the number of outgoing links from the source page of the link.
> 
> Next, the system computes shortest distances from the set of seeds to each page in the set of pages based on the lengths of the links between the pages (step 208). More specifically, for each given page in the set of pages, the system identifies k “nearest” seeds among the set of seeds, wherein k<n. In other words, these k nearest seeds produce the k shortest distances to the given page among the set of n seeds. For example in FIG. 1, we can choose k to be 1.
> 
> Note that it is possible for a selected seed to comprise more than one page. In such cases, the shortest path from the seed to any target page will be defined as the shortest path from any of the seed's pages to the target page.
> 
> The system next determines a ranking score for each page in the set of pages based on the computed shortest distances (step 210). In one embodiment of the present invention, for each given page, the system first identifies the kth nearest seed in the computed shorted distances for the give page, and subsequently computes a ranking score for the given page based on Equation (16). Finally, the system produces a ranking for the set of pages based on the ranking scores for the set of pages (step 212). Note that however, not all the pages in the set of pages receive ranking scores through this process. For example, a page that cannot be reached by any of the seed pages will not be ranked.
> 
> Note that the results from above ranking process can be used for seed tuning. Specifically, the ranking process produces lists of the nearest seeds and the lengths of the shortest paths for all the ranked pages. The system can process these results to extract information for each of the seeds with respect to the ranked pages. Next, the system can use this information to evaluate the quality and the contribution of the seeds, and then modify the list of seeds and/or the weights of the seeds based on this information.
> 
> A Reduced Link-Graph
> 
> Note that the links participating in the k shortest paths from the seeds to the pages constitute a sub-graph that includes all the links that are “flow” ranked from the seeds. Although this sub-graph includes much less links than the original link-graph, the k shortest paths from the seeds to each page in this sub-graph have the same lengths as the paths in the original graph. For each page p, the maximum number of links to page p in this sub-graph is at most k. Furthermore, the rank flow to each page can be backtracked to the nearest k seeds through the paths in this sub-graph.
> 
> Crawling Ranking and Searching Processes
> 
> FIG. 3 illustrates the crawling, ranking and searching processes in accordance with an embodiment of the present invention. During the crawling process, web crawler 304 crawls or otherwise searches through websites on web 302 to select web pages to be stored in indexed form in data center 308. In particular, web crawler 304 can prioritize the crawling process by using the page rank scores. The selected web pages are then compressed, indexed and ranked in 305 (using the ranking process described above) before being stored in data center 308.
> 
> During a subsequent search process, a search engine 312 receives a query 313 from a user 311 through a web browser 314. This query 313 specifies a number of terms to be searched for in the set of documents. In response to query 313, search engine 312 uses the ranking information to identify highly-ranked documents that satisfy the query. Search engine 312 then returns a response 315 through web browser 314, wherein the response 315 contains matching pages along with ranking information and references to the identified documents.
> 
> Note that the application of the present invention is not limited to the web and web pages. The general technique of producing ranking scores can be expanded to any hyperlinked database, which can include, but is not limited to, hyperlinked documents of an enterprise.
> 
> The foregoing descriptions of embodiments of the present invention have been presented only for purposes of illustration and description.
> 
> They are not intended to be exhaustive or to limit the present invention to the forms disclosed. Accordingly, many modifications and variations will be apparent to practitioners skilled in the art. Additionally, the above disclosure is not intended to limit the present invention. The scope of the present invention is defined by the appended claims.
