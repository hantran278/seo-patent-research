---
patent_id: US20120265757A1
title: "Xếp hạng bài viết blog"
title_en: "Ranking blog documents"
assignee: "Google LLC"
assignee_original: "Google LLC"
priority_date: 2005-09-13
filing_date: 2012-06-26
grant_date: 2012-10-18
legal_status: "Abandoned"
expiration: 
cpc: ["G06F16/00", "G06F16/90", "G06F16/95", "G06F16/951", "G06F16/953", "G06F16/9538"]
inventors: ["Andriy Bihun", "Jason Goldman", "Alex Khesin", "Vinod Marur", "Eduardo Morales", "Jeff Reynar"]
layer: core
factors: ["site-quality"]
family: []
status: analyzed
seo_relevance: trung bình
auto: true
source_url: https://patents.google.com/patent/US20120265757A1/en
tags: ["patent/core", "status/analyzed", "seo/trung-bình", "factor/site-quality"]
---

# Xếp hạng bài viết blog
*Tên gốc: Ranking blog documents*

> [!info] US20120265757A1 · Google LLC · ưu tiên 2005-09-13 · cấp 2012-10-18
> **Tác giả:** Andriy Bihun, Jason Goldman, Alex Khesin, Vinod Marur, Eduardo Morales, Jeff Reynar
> **Nhóm yếu tố:** [[Chất lượng site (Panda, site quality)]]
> **Trạng thái pháp lý:** Abandoned · [Google Patents](https://patents.google.com/patent/US20120265757A1/en)
> **Mức liên quan SEO:** trung bình

## Tóm tắt
Blog search engine nhận query, tính điểm cho các bài blog dựa trên mức độ liên quan với query VÀ chất lượng của bài blog, rồi trả kết quả theo điểm đó.

> [!quote]- Tóm tắt gốc (tiếng Anh)
> A blog search engine may receive a search query. The blog search engine may determine scores for a group of blog documents in response to the search query, where the scores are based on a relevance of the group of blog documents to the search query and a quality of the group of blog documents. The blog search engine may also provide information regarding the group of blog documents based on the determined scores.

## Cơ chế hoạt động
- Blog search engine tính điểm = **mức liên quan** × điều chỉnh theo **chất lượng blog**.
- Chỉ báo **tích cực**: blog có nhiều người đăng ký theo dõi (feed), được nhắc tới/link từ blog khác, có trong danh sách blogroll uy tín…
- Chỉ báo **tiêu cực**: tần suất đăng bất thường, nội dung trùng lặp, nhiều link tới cùng một trang, bài toàn quảng cáo, kích thước bài bất thường…

## Claims chính
4 claim độc lập / 21 claim.

> [!quote]- Claims độc lập (bản gốc tiếng Anh)
> 1.-27. (canceled)
> 
> 28. A method performed by one or more server devices, the method comprising: receiving, by the one or more server devices, a search query; identifying, by the one or more server devices, a blog document that is responsive to the search query; generating, by the one or more server devices, a relevance score for the blog document, the relevance score being based on a measure of relevance of the blog document to the search query; generating, by the one or more server devices, a quality score for the blog document, the quality score being based on a measure of quality of the blog document independent of the search query, the measure of quality being based on a plurality of indicators, the plurality of indicators including: a particular quantity of subscribers to the blog document; generating, by the one or more server devices, a ranking score based on the relevance score and the quality score; and providing, by the one or more server devices, information regarding the blog document based on the ranking score.
> 
> 35. A system, comprising: one or more devices to: receive a search query; identify a blog document that is responsive to the search query; generate a relevance score for the blog document, the relevance score being based on a measure of relevance of the blog document to the search query; generate a quality score for the blog document, the quality score being based on a measure of quality of the blog document independent of the search query, the measure of quality being based on a plurality of indicators, the plurality of indicators including: a particular quantity of subscribers to the blog document; generate a ranking score based on the relevance score and the quality score; and provide information regarding the blog document based on the ranking score.

## Liên hệ với leak
- **Google leak 2024:** _chưa đối chiếu_
- **Yandex 2023:** _chưa đối chiếu_

## Ý nghĩa SEO
- Là bản 'checklist' sớm của Google về dấu hiệu blog spam: đăng quá nhiều/đều đặn máy móc, nội dung trùng, link ra tập trung vào 1 trang, nhiều quảng cáo.
- Vẫn đúng với các site nội dung hàng loạt hiện nay.

## Hành động audit
- [ ] Kiểm tra tần suất đăng bài có đột biến bất thường (ví dụ vài trăm bài/ngày từ AI)
- [ ] Rà bài có nhiều link ra cùng một trang đích (dấu hiệu bài vệ tinh)
- [ ] Rà tỷ lệ quảng cáo/nội dung trên bài; nội dung trùng lặp giữa các bài

## Patent liên quan
- [[US7743045B2 - Phát hiện ngữ cảnh spam và thiên lệch trong search engine lập trình được]] _(Trích dẫn)_
- [[US7346839B2 - Truy xuất thông tin dựa trên dữ liệu lịch sử]] _(Trích dẫn)_
- [[US8150842B2 - Uy tín của tác giả nội dung trực tuyến]] _(Trích dẫn)_

**Patent Google liên quan khác (chưa có trong vault):**
- [US7693830B2](https://patents.google.com/patent/US7693830B2/en) Programmable search engine _(Trích dẫn)_
- [US7716199B2](https://patents.google.com/patent/US7716199B2/en) Aggregating context data for programmable search engines _(Trích dẫn)_
- [US8244720B2](https://patents.google.com/patent/US8244720B2/en) Ranking blog documents _(Trích dẫn)_
- [US7765209B1](https://patents.google.com/patent/US7765209B1/en) Indexing and retrieval of blogs _(Trích dẫn)_
- [US7734610B2](https://patents.google.com/patent/US7734610B2/en) Decentralised web annotation _(Trích dẫn)_
- [US7685144B1](https://patents.google.com/patent/US7685144B1/en) Dynamically autocompleting a data entry _(Trích dẫn)_
- [US7634463B1](https://patents.google.com/patent/US7634463B1/en) Automatically generating and maintaining an address book _(Trích dẫn)_
- [US8117195B1](https://patents.google.com/patent/US8117195B1/en) Providing blog posts relevant to search results _(Trích dẫn)_
- [CA2770868C](https://patents.google.com/patent/CA2770868C/en) Objective and subjective ranking of comments _(Trích dẫn)_
- [US8745067B2](https://patents.google.com/patent/US8745067B2/en) Presenting comments from various sources _(Trích dẫn)_
- [US8572109B1](https://patents.google.com/patent/US8572109B1/en) Query translation quality confidence _(Được trích dẫn bởi)_
- [US8577910B1](https://patents.google.com/patent/US8577910B1/en) Selecting relevant languages for query translation _(Được trích dẫn bởi)_
- [US8577909B1](https://patents.google.com/patent/US8577909B1/en) Query translation using bilingual search refinements _(Được trích dẫn bởi)_
- [US8538957B1](https://patents.google.com/patent/US8538957B1/en) Validating translations using visual similarity between visual media search results _(Được trích dẫn bởi)_
- [US8606792B1](https://patents.google.com/patent/US8606792B1/en) Scoring authors of posts _(Được trích dẫn bởi)_

## Toàn văn mô tả
> [!note]- Bấm để mở toàn văn (bản gốc tiếng Anh)
> 
> ## FIELD OF THE INVENTION
> 
> 
> Implementations consistent with the principles of the invention relate generally to information retrieval and, more particularly, to providing a ranked set of blog documents in response to search queries.
> 
> 
> ## BACKGROUND OF THE INVENTION
> 
> 
> The World Wide Web (“web”) contains a vast amount of information. Locating a desired portion of the information, however, can be challenging. This problem is compounded because the amount of information on the web and the number of new users inexperienced at web searching are growing rapidly.
> 
> Search engines attempt to return hyperlinks to web pages in which a user is interested. Generally, search engines base their determination of the user's interest on search terms (called a search query) entered by the user. The goal of the search engine is to provide links to high quality, relevant results (e.g., web pages) to the user based on the search query. Typically, the search engine accomplishes this by matching the terms in the search query to a corpus of pre-stored web pages. Web pages that contain the user's search terms are identified as search results and are returned to the user as links.
> 
> Over the past few years, a new medium, called a blog, has appeared on the web. Blogs (short for web logs) are publications of personal thoughts that are typically updated frequently with new journal entries, called posts. The content and quality of blogs and their posts can vary greatly depending on the purpose of the authors of the blogs. As blogging becomes more popular, the ability to provide quality blog search results becomes more important.
> 
> 
> ## SUMMARY OF THE INVENTION
> 
> 
> In accordance with one implementation consistent with the principles of the invention, a method may include receiving a search query at a blog search engine, retrieving a blog document in response to the search query, determining a first score for the blog document based on the relevance of the blog document to the search query, altering the first score based on a quality of the blog document, and providing information regarding the blog document based on the altered first score.
> 
> In another implementation consistent with the principles of the invention, a computer-implemented method includes obtaining a blog document, identifying at least one of the positive indicators of a quality of the blog document or negative indicators of the quality of the blog document, and determining a quality score for the blog document based on the identified at least one of positive indicators or negative indicators.
> 
> In yet another implementation consistent with the principles of the invention, a method may include receiving a search query at a blog search engine; determining scores for a group of blog documents in response to the search query, the scores being based on a relevance of the group of blog documents to the search query and a quality of the group of blog documents; and providing information regarding the group of blog documents based on the determined scores.
> 
> In still another implementation consistent with the principles of the invention, a method may include identifying at least one of the positive indicators of a quality of a blog document or negative indicators of the quality of the blog document, the identified at least one of positive indicators or negative indicators including an indicator specific to blog documents; determining a quality score for the blog document based on the identified at least one of positive indicators or negative indicators; receiving a search query; determining a score for the blog document based on a relevance of the blog document to the search query; adjusting the score of the blog document based on the quality score; and providing information relating to the blog document based on the adjusted score.
> 
> 
> ## BRIEF DESCRIPTION OF THE DRAWINGS
> 
> 
> The accompanying drawings, which are incorporated in and constitute a part of this specification, illustrate an implementation of the invention and, together with the description, explain the invention. In the drawings,
> 
> FIG. 1 is an exemplary diagram illustrating a concept consistent with the principles of the invention;
> 
> FIG. 2 is an exemplary diagram of a network in which systems and methods consistent with the principles of the invention may be implemented;
> 
> FIG. 3 is an exemplary diagram of a client or server entity in an implementation consistent with the principles of the invention;
> 
> FIG. 4 is a diagram of a portion of an exemplary computer-readable medium that may be used by the server of FIG. 2;
> 
> FIG. 5 is an exemplary database that may be associated with the server of FIG. 2 in an implementation consistent with the principles of the invention;
> 
> FIG. 6 is a flow chart of an exemplary process for determining a quality score for a blog document in an implementation consistent with the principles of the invention;
> 
> FIG. 7 is a flowchart of an exemplary process for presenting search results in an implementation consistent with the principles of the invention; and
> 
> FIG. 8 is a diagram of an exemplary set of documents that may be retrieved in an implementation consistent with the principles of the invention.
> 
> 
> ## DETAILED DESCRIPTION
> 
> 
> The following detailed description of implementations consistent with the principles of the invention refers to the accompanying drawings. The same reference numbers in different drawings may identify the same or similar elements. Also, the following detailed description does not limit the invention.
> 
> 
> ## Overview
> 
> 
> Systems and methods consistent with the principles of the invention improve the quality of blog results provided in response to a search query. To improve the quality of blog results, a number of quality factors may be used to alter (either positively or negatively) a score of the blog results.
> 
> FIG. 1 is an exemplary diagram illustrating a concept consistent with the principles of the invention. As illustrated in FIG. 1, two distinct sets of data are used to determine a score of a blog (or blog post) in response to a search query—the topical relevance of the blog (or blog post) to the terms in the search query and the quality of the blog (or blog post), which is independent of the query terms. The quality of the blog (or blog post) may positively or negatively affect the score of the blog (or blog post).
> 
> The phrase “blog document,” as used hereinafter, is to be broadly interpreted to include a blog, a blog post, or both a blog and a blog post. It will be appreciated that the techniques described herein are equally applicable to blogs and blog posts. A “document,” as the term is used herein, is to be broadly interpreted to include any machine-readable and machine-storable work product. A document may include, for example, an e-mail, a web site, a file, a combination of files, one or more files with embedded links to other files, a news group posting, a blog document, a web advertisement, etc. In the context of the Internet, a common document is a web page. Web pages often include textual information and may include embedded information (such as meta information, images, hyperlinks, etc.) and/or embedded instructions (such as Javascript, etc.). A “link,” as the term is used herein, is to be broadly interpreted to include any reference to/from a document from/to another document or another part of the same document.
> 
> 
> ## Exemplary Network Configuration
> 
> 
> FIG. 2 is an exemplary diagram of a network 200 in which systems and methods consistent with the principles of the invention may be implemented. Network 200 may include multiple clients 210 connected to multiple servers 220-240 via a network 250. Two clients 210 and three servers 220-240 have been illustrated as connected to network 250 for simplicity. In practice, there may be more or fewer clients and servers. Also, in some instances, a client may perform a function of a server and a server may perform a function of a client.
> 
> Clients 210 may include client entities. An entity may be defined as a device, such as a personal computer, a wireless telephone, a personal digital assistant (PDA), a lap top, or another type of computation or communication device, a thread or process running on one of these devices, and/or an object executable by one of these devices. Servers 220-240 may include server entities that gather, process, search, and/or maintain documents in a manner consistent with the principles of the invention.
> 
> In an implementation consistent with the principles of the invention, server 220 may include a search engine 225 usable by clients 210. In one implementation, search engine 225 may include a blog search engine that searches only blog documents. Server 220 may crawl a corpus of documents, index the documents, and store information associated with the documents in a repository of documents. Servers 230 and 240 may store or maintain documents that may be crawled or analyzed by server 220.
> 
> While servers 220-240 are shown as separate entities, it may be possible for one or more of servers 220-240 to perform one or more of the functions of another one or more of servers 220-240. For example, it may be possible that two or more of servers 220-240 are implemented as a single server. It may also be possible for a single one of servers 220-240 to be implemented as two or more separate (and possibly distributed) devices.
> 
> Network 250 may include a local area network (LAN), a wide area network (WAN), a telephone network, such as the Public Switched Telephone Network (PSTN), an intranet, the Internet, or a combination of networks. Clients 210 and servers 220-240 may connect to network 250 via wired, wireless, and/or optical connections.
> 
> 
> ## Exemplary Client/Server Architecture
> 
> 
> FIG. 3 is an exemplary diagram of a client or server entity (hereinafter called “client/server entity”), which may correspond to one or more of clients 210 and/or servers 220-240. The client/server entity may include a bus 310, a processor 320, a main memory 330, a read only memory (ROM) 340, a storage device 350, an input device 360, an output device 370, and a communication interface 380. Bus 310 may include a path that permits communication among the elements of the client/server entity.
> 
> Processor 320 may include a processor, microprocessor, or processing logic that may interpret and execute instructions. Main memory 330 may include a random access memory (RAM) or another type of dynamic storage device that may store information and instructions for execution by processor 320. ROM 340 may include a ROM device or another type of static storage device that may store static information and instructions for use by processor 320. Storage device 350 may include a magnetic and/or optical recording medium and its corresponding drive.
> 
> Input device 360 may include a mechanism that permits an operator to input information to the client/server entity, such as a keyboard, a mouse, a pen, voice recognition and/or biometric mechanisms, etc. Output device 370 may include a mechanism that outputs information to the operator, including a display, a printer, a speaker, etc. Communication interface 380 may include any transceiver-like mechanism that enables the client/server entity to communicate with other devices and/or systems. For example, communication interface 380 may include mechanisms for communicating with another device or system via a network, such as network 250.
> 
> As will be described in detail below, the client/server entity, consistent with the principles of the invention, may perform certain document processing-related operations. The client/server entity may perform these operations in response to processor 320 executing software instructions contained in a computer-readable medium, such as memory 330. A computer-readable medium may be defined as a physical or logical memory device and/or carrier wave.
> 
> The software instructions may be read into memory 330 from another computer-readable medium, such as data storage device 350, or from another device via communication interface 380. The software instructions contained in memory 330 may cause processor 320 to perform processes that will be described later. Alternatively, hardwired circuitry may be used in place of or in combination with software instructions to implement processes consistent with the principles of the invention. Thus, implementations consistent with the principles of the invention are not limited to any specific combination of hardware circuitry and software.
> 
> 
> ## Exemplary Computer-Readable Medium
> 
> 
> FIG. 4 is a diagram of a portion of an exemplary computer-readable medium 400 that may be used by a server 220. In one implementation, computer-readable medium 400 may correspond to memory 330 of server 220. The portion of computer-readable medium 400 illustrated in FIG. 4 may include an operating system 410 and blog quality software 420.
> 
> Operating system 410 may include operating system software, such as the Windows, Unix, or Linux operating systems. Blog quality software 420 may include software that receives data relating to a blog document and determines, based on this data, a quality score for the blog document. As will be described in additional detail below, the data may include signals that measure the probability of the content of the blog document being of poor quality, which would lead to the demotion or elimination of the blog document as a candidate result. The data may also include signals that measure the probability of the content of the blog document being of high quality/popularity, which would lead to the promotion of the blog document as a candidate result.
> 
> FIG. 5 is an exemplary database 500 that may be associated with server 220 in an implementation consistent with the principles of the invention. Database 500 may be stored locally at server 220, for example, in main memory 330 or storage device 350, or stored external to server 220 at, for example, a possibly remote location. As illustrated, database 500 may include the following exemplary fields: a document identification (ID) field 510 and a quality score field 520. It will be appreciated that database 500 may include other fields than those illustrated in FIG. 5.
> 
> Document ID field 510 may store information identifying blog documents, which, as described above, can be blogs or blog posts. The information may include a unique identifier. Quality score field 520 may store a quality score for each blog document identified in field 510. Database 500 may be accessed in response to a search query received by server 220. Server 220 may promote, demote, or even eliminate a blog document (i.e., blog and/or post) from a set of search results based on the quality score from field 520.
> 
> 
> ## Determining a Quality Score for a Blog Document
> 
> 
> FIG. 6 is a flow chart of an exemplary process for determining a quality score for a blog document in an implementation consistent with the principles of the invention. Processing may begin by obtaining information regarding a blog document to be scored (act 610). The information may include the blog itself, the post, metadata from the blog, and/or one or more feeds associated with the blog document.
> 
> Positive indicators as to the quality of the blog document may be identified (act 620). Such indicators may include a popularity of the blog document, an implied popularity of the blog document, the existence of the blog document in blogrolls, the existence of the blog document in a high quality blogroll, tagging of the blog document, references to the blog document by other sources, and a pagerank of the blog document. It will be appreciated that other indicators may also be used.
> 
> The popularity of the blog document may be a positive indication of the quality of that blog document. A number of news aggregator sites (commonly called “news readers” or “feed readers”) exist where individuals can subscribe to a blog document (through its feed). Such aggregators store information describing how many individuals have subscribed to given blog documents. A blog document having a high number of subscriptions implies a higher quality for the blog document. Also, subscriptions can be validated against “subscriptions spam” (where spammers subscribe to their own blog documents in an attempt to make them “more popular”) by validating unique users who subscribed, or by filtering unique Internet Protocol (IP) addresses of the subscribers.
> 
> An implied popularity may be identified for the blog document. This implied popularity may be identified by, for example, examining the click stream of search results. For example, if a certain blog document is clicked more than other blog documents when the blog document appears in result sets, this may be an indication that the blog document is popular and, thus, a positive indicator of the quality of the blog document.
> 
> The existence of the blog document in blogrolls may be a positive indication of the quality of the blog document. It will be appreciated that blog documents often contain not only recent entries (i.e., posts), but also “blogrolls,” which are a dense collection of links to external sites (usually other blogs) in which the author/blogger is interested. A blogroll link to a blog document is an indication of popularity of that blog document, so aggregated blogroll links to a blog document can be counted and used to infer magnitude of popularity for the blog document.
> 
> The existence of the blog document in a high quality blogroll may be a positive indication of the quality of the blog document. A high quality blogroll is a blogroll that links to well-known or trusted bloggers. Therefore, a high quality blogroll that also links to the blog document is a positive indicator of the quality of the blog document.
> 
> Similarly, the existence of the blog document in a blogroll of a well-known or trusted blogger may also be a positive indication of the quality of the blog document. In this situation, it is assumed that the well-known or trusted blogger would not link to a spamming blogger.
> 
> Tagging of the blog document may be a positive indication of the quality of the blog document. Some existing sites allow users to add “tags” to (i.e., to “categorize”) a blog document. These custom categorizations are an indicator that an individual has evaluated the content of the blog document and determined that one or more categories appropriately describe its content, and as such are a positive indicator of the quality of the blog document.
> 
> References to the blog document by other sources may be a positive indication of the quality of the blog document. For example, content of emails or chat transcripts can contain URLs of blog documents. Email or chat discussions that include references to the blog document is a positive indicator of the quality of the blog document.
> 
> The pagerank of the blog document may be a positive indicator of the quality of the blog document. A high pagerank (a signal usually calculated for regular web pages) is an indicator of high quality and, thus, can be applied to blog documents as a positive indication of the quality of the blog documents. In some implementations, a blog document (e.g., a post) may not be associated with a pagerank (e.g., when the post is new). In those situations, the new post may inherit the pagerank of the blog with which it is associated until such time that an independent pagerank is determined for the new post. This inherited pagerank may serve as a positive indication of the quality of the new post.
> 
> Negative indicators as to the quality of the blog document may be identified (act 630). Such indicators may include a frequency of new posts on the blog document, the content of the posts in the blog document, a size of the posts in the blog document, a link distribution of the blog document, and the presence of ads in the blog document. It will be appreciated that other indicators may also be used.
> 
> The frequency at which new posts are added to the blog document may be a negative indication of the quality of that blog document. Feeds typically include only the most recent posts from a blog document. Spammers often generate new posts in spurts (i.e., many new posts appear within a short time period) or at predictable intervals (one post every 10 minutes, or a post every 3 hours at 32 minutes past the hour). Both behaviors are correlated with malicious intent and can be used to identify possible spammers. Therefore, if the frequency at which new posts are added to the blog document matches a predictable pattern, this may be a negative indication of the quality of the blog document.
> 
> The content of the posts in the blog document may be a negative indication of the quality of that blog document. A feed typically contains some or all of the content of several posts from a given blog document. The blog document itself also includes the content of the posts. Spammers may put one version of content into a feed to improve their ranking in search results, while putting a different version on their blog document (e.g., links to irrelevant ads). This mismatch (between feed and blog document) can, therefore, be a negative indication of the quality of the blog document.
> 
> Also, in some instances, particular content may be duplicated in multiple posts in a blog document, resulting in multiple feeds containing the same content. Such duplication indicates the feed is low quality/spam and, thus, can be a negative indication of the quality of the blog document.
> 
> The words/phrases used in the posts of a blog document may also be a negative indication of the quality of that blog document. For example, from a collection of blog documents and feeds that evaluators rate as spam, a list of words and phrases (bigrams, trigrams, etc.) that appear frequently in spam may be extracted. If a blog document contains a high percentage of words or phrases from the list, this can be a negative indication of quality of the blog document.
> 
> The size of the posts in a blog document may be a negative indication of quality of the blog document. Many automated post generators create numerous posts of identical or very similar length. As a result, the distribution of post sizes can be used as a reliable measure of spamminess. When a blog document includes numerous posts of identical or very similar length, this may be a negative indication of quality of the blog document.
> 
> A link distribution of the blog document may be a negative indication of quality of the blog document. As disclosed above, some posts are created to increase the pagerank of a particular blog document. In some cases, a high percentage of all links from the posts or from the blog document all point to ether a single web page, or to a single external site. If the number of links to any single external site exceeds a threshold, this can be a negative indication of quality of the blog document.
> 
> The presence of ads in the blog document may be a negative indication of quality of the blog document. If a blog document contains a large number of ads, this may be a negative indication of the quality of the blog document.
> 
> Moreover, blog documents typically contain three types of content: the content of recent posts, a blogroll, and blog metadata (e.g., author profile information and/or other information pertinent to the blog document or its author). Ads, if present, typically appear within the blog metadata section or near the blogroll. The presence of ads in the recent posts part of a blog document may be a negative indication of the quality of the blog document.
> 
> A quality score for the blog document may be determined based on these indicators (act 640). For example, in one implementation, the quality score for a blog document may be determined by assigning a weight to the different indicators and combining the weights to obtain a quality score. The indicators may be combined and/or weighted in any manner. For example, in one implementation consistent with the principles of the invention, each indicator may be given a positive or negative value. These values may be added together to determine a quality score for the blog document. Alternatively, each indicator value may be multiplied by a corresponding factor (or weight) and the resulting values may be totaled to give the quality score for the blog document. Other techniques for determining the quality score may alternatively be used.
> 
> Once the quality score for the blog document has been determined, it may be associated with the blog document. For example, the quality score may be associated, in a database, such as database 500, with information identifying the blog document for which the score has been determined. In this manner, database 500 may be populated with quality scores for blog documents. The quality scores can be updated periodically.
> 
> 
> ## Presenting Search Results
> 
> 
> FIG. 7 is a flowchart of an exemplary process for presenting search results. In one implementation, the processing of FIG. 7 may be performed by one or more software and/or hardware components within server 220. In another implementation, the processing may be performed by one or more software and/or hardware components within another device or a group of devices separate from or including server 220.
> 
> Processing may begin with a search query being received (act 710). For example, the user may provide a search query into a search box associated with a search engine (e.g., entering a search term into a search engine interface or a search box of an add-on toolbar). The web browser (or the add-on toolbar) may send the search query to a search engine, such as search engine 225 associated with server 220.
> 
> A relevance score for a set of documents may be determined based on the search query (act 720). For example, server 220 may determine an information retrieval (IR) score for the documents. The IR score for a document may be determined based on a matching of the search terms of a search query to the content of the document. There are a number of known techniques that may be used to determine the IR score for a document. For example, the IR score may be determined based on the number of occurrences of the search terms in the document. Alternatively or additionally, the IR score may be determined based on where the search terms occur within the document (e.g., title, content, etc.) or characteristics of the search terms (e.g., font, size, color, etc.). Alternatively or additionally, a search term may be weighted differently from another search term when multiple search terms are present. Alternatively or additionally, the proximity of the search terms when multiple search terms are present may influence the IR score. Yet other techniques for determining the IR score for a document are known to those skilled in the art.
> 
> An overall score for the documents may be determined based on the quality of the documents (act 730). For example, the IR score for each document may be combined with the document's quality score to determine the overall score. Combining the scores may cause the IR scores for the documents to be adjusted based on the quality scores, thereby raising or lowering the scores or, in some cases, leaving the scores the same to obtain the overall scores. Alternatively, the documents may be scored based on the quality scores alone without generating IR scores. In any event, overall scores may be determined for the documents using the quality scores.
> 
> A ranked set of documents may be provided to the user based on the overall scores for the documents (act 740). In this way, the quality of documents may be used to improve the search results provided to users.
> 
> 
> ## Example
> 
> 
> The following example illustrates the above processing. Assume that a user is interested in blogs about fantasy football. The user may submit the search query “fantasy football” to a search engine, such as search engine 225. In response, assume that search engine 225 retrieves a group of blog documents based on their relevance to the search query (e.g., using an IR technique).
> 
> FIG. 8 is a diagram of an exemplary set of blog documents received in response to the search query. As illustrated, search engine 225 retrieved five blog documents (blog documents 1-5) with the following relevance (or IR) scores: blog document 1 has an IR score of 1.0, blog document 2 has an IR score of 0.9, blog document 3 has an IR score of 0.8, blog document 4 has an IR score of 0.7, and blog document 5 has an IR score of 0.6. Assume, for explanatory purposes, that these five blog documents have the following quality scores: blog document 1 has a positive quality score of 0.4, blog document 2 has a negative quality score of −0.4, blog document 3 has a positive quality score of 0.8, blog document 4 has a positive quality score of 0.3, and blog document 5 has a positive quality score of 0.3.
> 
> Search engine 225 may determine an overall score for the blog documents by adding the relevance score to the quality score. In this case, blog document 1 would have an overall score of 1.4, blog document 2 would have an overall score of 0.5, blog document 3 would have an overall score of 1.6, blog document 4 would have an overall score of 1.0, and blog document 5 would have an overall score of 0.9. Therefore, search engine 225 may provide blog documents 1-5 to the user in the following order: blog document 3, blog document 1, blog document 4, blog document 5, and blog document 2.
> 
> As evident from the example of FIG. 8, the quality of blog documents may cause the ranking of those documents to increase or decrease. In this way, higher quality results are provided to the user.
> 
> 
> ## CONCLUSION
> 
> 
> Implementations consistent with the principles of the invention improve blog searching by taking into consideration the quality of the blogs.
> 
> The foregoing description of exemplary embodiments of the invention provides illustration and description, but is not intended to be exhaustive or to limit the invention to the precise form disclosed. Modifications and variations are possible in light of the above teachings or may be acquired from practice of the invention.
> 
> For example, while series of acts have been described with regard to FIGS. 6 and 7, the order of the acts may be modified in other implementations consistent with the principles of the invention. Further, non-dependent acts may be performed in parallel.
> 
> The preceding description refers to a user. A “user” is intended to refer to a client, such as a client 210 (FIG. 2), or an operator of a client.
> 
> It will be apparent to one of ordinary skill in the art that aspects of the invention, as described above, may be implemented in many different forms of software, firmware, and hardware in the implementations illustrated in the figures. The actual software code or specialized control hardware used to implement aspects consistent with the principles of the invention is not limiting of the invention. Thus, the operation and behavior of the aspects were described without reference to the specific software code—it being understood that one of ordinary skill in the art would be able to design software and control hardware to implement the aspects based on the description herein.
> 
> No element, act, or instruction used in the present application should be construed as critical or essential to the invention unless explicitly described as such. Also, as used herein, the article “a” is intended to include one or more items. Where only one item is intended, the term “one” or similar language is used. Further, the phrase “based on” is intended to mean “based, at least in part, on” unless explicitly stated otherwise.
