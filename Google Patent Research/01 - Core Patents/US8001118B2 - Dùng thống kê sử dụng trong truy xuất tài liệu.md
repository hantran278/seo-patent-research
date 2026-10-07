---
patent_id: US8001118B2
title: "Dùng thống kê sử dụng trong truy xuất tài liệu"
title_en: "Methods and apparatus for employing usage statistics in document retrieval"
assignee: "Google LLC"
assignee_original: "Google LLC"
priority_date: 2001-03-02
filing_date: 2001-03-02
grant_date: 2011-08-16
legal_status: "Active"
expiration: 2027-08-03
cpc: ["G06F16/00", "G06F16/90", "G06F16/95", "G06F16/951"]
inventors: ["Jeffrey A. Dean", "Benedict Gomes", "Krishna Bharat", "Georges Harik", "Monika H. Henzinger"]
layer: core
factors: ["user-signals"]
family: []
status: analyzed
seo_relevance: trung bình
auto: true
source_url: https://patents.google.com/patent/US8001118B2/en
tags: ["patent/core", "status/analyzed", "seo/trung-bình", "factor/user-signals"]
---

# Dùng thống kê sử dụng trong truy xuất tài liệu
*Tên gốc: Methods and apparatus for employing usage statistics in document retrieval*

> [!info] US8001118B2 · Google LLC · ưu tiên 2001-03-02 · cấp 2011-08-16
> **Tác giả:** Jeffrey A. Dean, Benedict Gomes, Krishna Bharat, Georges Harik, Monika H. Henzinger
> **Nhóm yếu tố:** [[Tín hiệu người dùng (click, Navboost)]]
> **Trạng thái pháp lý:** Active (hết hạn 2027-08-03) · [Google Patents](https://patents.google.com/patent/US8001118B2/en)
> **Mức liên quan SEO:** trung bình

## Tóm tắt
Khi nhận query và danh sách tài liệu phù hợp, hệ thống sắp xếp các tài liệu dựa toàn bộ hoặc một phần vào thống kê sử dụng (số lượt truy cập, tần suất truy cập… của tài liệu).

> [!quote]- Tóm tắt gốc (tiếng Anh)
> Methods and apparatus consistent with the invention provide improved organization of documents responsive to a search query. In one embodiment, a search query is received and a list of responsive documents is identified. The responsive documents are organized based in whole or in part on usage statistics.

## Cơ chế hoạt động
- (Dean, Bharat, Henzinger…) Sắp xếp tài liệu theo **thống kê sử dụng**: tần suất truy cập trong một khoảng thời gian và **số người truy cập duy nhất**.
- Dữ liệu có thể lấy từ toolbar/trình duyệt, log proxy…

## Claims chính
4 claim độc lập / 27 claim.

> [!quote]- Claims độc lập (bản gốc tiếng Anh)
> 1. A computer-implemented method of organizing a collection of documents, the computer implemented method comprising: identifying at a server a plurality of documents responsive to a search query; accessing at the server usage information associated with the plurality of documents, the usage information including, for each document, a frequency of visit value based on a number of times the document was visited during a time period and a unique visit value based on a number of unique visitors to the document; determining at the server, for each document, a usage score from the frequency of visit value and the unique visit value associated with the document; and organizing at the server the plurality of documents based, in part, on the usage scores for the documents.
> 
> 2. An apparatus for organizing a collection of documents, comprising: memory hardware storing program instructions, and one or more processors in data communication with the memory hardware and configured to execute the program instructions, and upon execution the program instructions cause the one or more processors to perform operations comprising: identifying a plurality of documents responsive to a search query; accessing usage information associated with the plurality of documents, the usage information including, for each document, a frequency of visit value based on a number of times the document was visited and a unique visit value based on a number of unique visitors to the document; determining, for each document, a usage score from the frequency of visit value and the unique visit value associated with the document; and organizing the plurality of documents based, in part, on the usage scores for the documents.
> 
> 3. A computer-implemented method comprising: identifying at a server a plurality of documents responsive to a search query, wherein the plurality of documents include at least one document visited by multiple distinct counted visitors during a time period; accessing, at the server, usage information associated with the plurality of documents, the usage information including, for each document, (i) a frequency of visit value based on a total number of times the respective document was visited by all counted visitors visiting the document during a time period, and (ii) a unique visit value based on a number of unique visitors among all counted visitors visiting the respective document during the time period; determining at the server, for each document, a usage score from the frequency of visit value and the unique visit value associated with the respective document; and organizing at the server the plurality of documents based, in part, on the usage scores for the documents.

## Liên hệ với leak
- **Google leak 2024:** Khớp với `chromeInTotal` (lượt xem từ Chrome ở cấp site) trong leak.
- **Yandex 2023:** _chưa đối chiếu_

## Ý nghĩa SEO
- Lượng truy cập thật (từ mọi nguồn, không chỉ Google) có thể là tín hiệu xếp hạng.
- Traffic từ social, email, direct góp phần xây tín hiệu phổ biến.

## Hành động audit
- [ ] GA4: tỷ lệ traffic organic so với tổng — site phụ thuộc gần như hoàn toàn vào Google là rủi ro; phát triển kênh direct/social/email

## Patent liên quan
- [[US6285999B1 - Phương pháp xếp hạng node trong cơ sở dữ liệu liên kết (PageRank gốc)]] _(Trích dẫn)_
- [[US8959103B1 - Đánh giá quy tắc đảo thứ tự từ bằng clickskip]] _(Được trích dẫn bởi)_
- [[US8965882B1 - Đánh giá quy tắc đồng nghĩa bằng clickskip]] _(Được trích dẫn bởi)_
- [[US9020927B1 - Xác định chất lượng tài liệu dựa trên cạnh tranh giữa các kết quả]] _(Được trích dẫn bởi)_
- [[US9152698B1 - Xác định từ thay thế dựa trên các từ xuất hiện nhiều bất thường]] _(Được trích dẫn bởi)_
- [[US7454417B2 - Cải thiện xếp hạng bằng thông tin nhóm người dùng (population)]] _(Được trích dẫn bởi)_
- [[US7505964B2 - Cải thiện xếp hạng bằng các query liên quan]] _(Được trích dẫn bởi)_
- [[US7797316B2 - Xác định độ tươi (freshness) của tài liệu]] _(Được trích dẫn bởi)_
- [[US7346839B2 - Truy xuất thông tin dựa trên dữ liệu lịch sử]] _(Được trích dẫn bởi)_
- [[US7302645B1 - Xác định bài viết bị thao túng]] _(Được trích dẫn bởi)_
- [[US7925657B1 - Điều chỉnh điểm dựa trên độ rộng của query]] _(Được trích dẫn bởi)_
- [[US7716225B1 - Xếp hạng tài liệu dựa trên hành vi người dùng và đặc điểm link (Reasonable Surfer)]] _(Được trích dẫn bởi)_
- [[US8078607B2 - Tạo hồ sơ website dựa trên query và hành vi người dùng trên kết quả]] _(Được trích dẫn bởi)_
- [[US8595225B1 - Liên hệ chủ đề và độ phổ biến của tài liệu]] _(Được trích dẫn bởi)_
- [[US8874570B1 - Vector tăng hạng dựa trên dữ liệu cùng truy cập (co-visitation)]] _(Được trích dẫn bởi)_
- [[US7971137B2 - Phát hiện và loại bỏ tài liệu gây khó chịu]] _(Được trích dẫn bởi)_
- [[US8661029B1 - Điều chỉnh xếp hạng dựa trên phản hồi ngầm của người dùng (Navboost)]] _(Được trích dẫn bởi)_
- [[US8938463B1 - Điều chỉnh xếp hạng bằng phản hồi ngầm và mô hình thiên lệch vị trí]] _(Được trích dẫn bởi)_
- [[US8694374B1 - Phát hiện click spam]] _(Được trích dẫn bởi)_
- [[US9092510B1 - Điều chỉnh xếp hạng dựa trên yếu tố thời gian của phản hồi người dùng]] _(Được trích dẫn bởi)_
- [[US8694511B1 - Điều chỉnh xếp hạng dựa trên nhóm người dùng (population)]] _(Được trích dẫn bởi)_
- [[US8909655B1 - Xếp hạng theo thời gian]] _(Được trích dẫn bởi)_
- [[US8396865B1 - Chia sẻ dữ liệu độ liên quan giữa các kho dữ liệu]] _(Được trích dẫn bởi)_
- [[US9009146B1 - Xếp hạng kết quả dựa trên các query tương tự]] _(Được trích dẫn bởi)_
- [[US8447760B1 - Tạo tập tài liệu liên quan cho một tập tài liệu ban đầu]] _(Được trích dẫn bởi)_
- [[US8972391B1 - Chấm điểm liên quan dựa trên mối quan tâm gần đây]] _(Được trích dẫn bởi)_
- [[US8874555B1 - Điều chỉnh dữ liệu chấm điểm dựa trên thay đổi lịch sử]] _(Được trích dẫn bởi)_
- [[US8615514B1 - Đánh giá thuộc tính website bằng cách phân nhóm phản hồi người dùng]] _(Được trích dẫn bởi)_
- [[US8924379B1 - Điều chỉnh điểm theo thời gian]] _(Được trích dẫn bởi)_
- [[US8959093B1 - Xếp hạng kết quả dựa trên anchor]] _(Được trích dẫn bởi)_
- [[US8832083B1 - Kết hợp các nguồn phản hồi người dùng]] _(Được trích dẫn bởi)_
- [[US9002867B1 - Điều chỉnh dữ liệu xếp hạng dựa trên thay đổi của tài liệu]] _(Được trích dẫn bởi)_
- [[US9183499B1 - Đánh giá chất lượng dựa trên đặc điểm của các trang lân cận]] _(Được trích dẫn bởi)_

**Patent Google liên quan khác (chưa có trong vault):**
- [US8195654B1](https://patents.google.com/patent/US8195654B1/en) Prediction of human ratings or rankings of information retrieval quality _(Được trích dẫn bởi)_
- [US8548991B1](https://patents.google.com/patent/US8548991B1/en) Personalized browsing activity displays _(Được trích dẫn bởi)_
- [US8909627B1](https://patents.google.com/patent/US8909627B1/en) Fake skip evaluation of synonym rules _(Được trích dẫn bởi)_
- [US8965875B1](https://patents.google.com/patent/US8965875B1/en) Removing substitution rules based on user interactions _(Được trích dẫn bởi)_
- [US9053129B1](https://patents.google.com/patent/US9053129B1/en) Content item relevance based on presentation data _(Được trích dẫn bởi)_
- [US9141672B1](https://patents.google.com/patent/US9141672B1/en) Click or skip evaluation of query term optionalization rule _(Được trích dẫn bởi)_
- [US9146966B1](https://patents.google.com/patent/US9146966B1/en) Click or skip evaluation of proximity rules _(Được trích dẫn bởi)_
- [US7752072B2](https://patents.google.com/patent/US7752072B2/en) Method and system for providing advertising through content specific nodes over the internet _(Được trích dẫn bởi)_
- [US8050970B2](https://patents.google.com/patent/US8050970B2/en) Method and system for providing filtered and/or masked advertisements over the internet _(Được trích dẫn bởi)_
- [US7383258B2](https://patents.google.com/patent/US7383258B2/en) Method and apparatus for characterizing documents based on clusters of related words _(Được trích dẫn bởi)_
- [US8311890B2](https://patents.google.com/patent/US8311890B2/en) Method and system for dynamic textual ad distribution via email _(Được trích dẫn bởi)_
- [US8055669B1](https://patents.google.com/patent/US8055669B1/en) Search queries improved based on query semantic information _(Được trích dẫn bởi)_
- [US7693827B2](https://patents.google.com/patent/US7693827B2/en) Personalization of placed content ordering in search results _(Được trích dẫn bởi)_
- [AU2006252227B2](https://patents.google.com/patent/AU2006252227B2/en) Document scoring based on link-based criteria _(Được trích dẫn bởi)_
- [EP1777633A3](https://patents.google.com/patent/EP1777633A3/en) Document scoring based on query analysis _(Được trích dẫn bởi)_

## Toàn văn mô tả
> [!note]- Bấm để mở toàn văn (bản gốc tiếng Anh)
> 
> ## BACKGROUND OF THE INVENTION
> 
> 
> A. Field of the Invention
> 
> The present invention relates generally to information search and retrieval and, more particularly, to employing usage data to improve information search and retrieval.
> 
> B. Description of Related Art
> 
> The World Wide Web (“web”) contains a vast amount of information. Locating a desired portion of the information, however, can be challenging. This problem is compounded because the amount of information on the web and the number of new users inexperienced at web research are growing rapidly.
> 
> People generally surf the web based on its link graph structure, often starting with high quality human-maintained indices or search engines. Human-maintained lists cover popular topics effectively but are subjective, expensive to build and maintain, slow to improve, and do not cover all esoteric topics.
> 
> Automated search engines, in contrast, locate web sites by matching search terms entered by the user to an indexed corpus of web pages. Generally, the search engine returns a list of web sites sorted based on relevance to the user's search terms. Determining the correct relevance, or importance, of a web page to a user, however, can be a difficult task. For one thing, the importance of a web page to the user is inherently subjective and depends on the user's interests, knowledge, and attitudes. There is, however, much that can be determined objectively about the relative importance of a web page.
> 
> Conventional methods of determining relevance are based on matching a user's search terms to terms indexed from web pages. More advanced techniques determine the importance of a web page based on more than the content of the web page. For example, one known method, described in the article entitled “The Anatomy of a Large-Scale Hypertextual Search Engine,” by Sergey Brin and Lawrence Page, assigns a degree of importance to a web page based on the link structure of the web page.
> 
> Each of these conventional methods has shortcomings, however. Term-based methods are biased towards pages whose content or display is carefully chosen towards the given term-based method. Thus, they can be easily manipulated by the designers of the web page. Link-based methods have the problem that relatively new pages have usually fewer hyperlinks pointing to them than older pages, which tends to give a lower score to newer pages.
> 
> There exists, therefore, a need to develop other techniques for determining the importance of documents.
> 
> 
> ## SUMMARY OF THE INVENTION
> 
> 
> Systems and methods consistent with the present invention address this and other needs by identifying compounds based on the overall context of a user query. One aspect of the present invention is directed to a method of organizing a set of documents by receiving a search query and identifying a plurality of documents responsive to the search query. Each identified document is assigned a score based on usage information, and the documents are organized based on the assigned scores.
> 
> 
> ## BRIEF DESCRIPTION OF THE DRAWINGS
> 
> 
> The accompanying drawings, which are incorporated in and constitute a part of this specification, illustrate an embodiment of the invention and, together with the description, explain the invention. In the drawings,
> 
> FIG. 1 is a diagram illustrating an exemplary network in which concepts consistent with the present invention may be implemented;
> 
> FIG. 2 illustrates an exemplary client device;
> 
> FIG. 3 illustrates a flow diagram, consistent with the invention, for organizing documents based on usage information;
> 
> FIG. 4 illustrates a few techniques for computing the frequency of visits, consistent with the invention.
> 
> FIG. 5 illustrates a few techniques for computing the number of users, consistent with the invention; and
> 
> FIG. 6 depicts an exemplary method, consistent with the invention.
> 
> 
> ## DETAILED DESCRIPTION
> 
> 
> The following detailed description of the invention refers to the accompanying drawings. The detailed description does not limit the invention. Instead, the scope of the invention is defined by the appended claims and equivalents.
> 
> 
> ## A. OVERVIEW
> 
> 
> In one embodiment, a search query is received and a list of responsive documents is identified. The list of responsive documents may be based on a comparison between the search query and the contents of the documents, or by other conventional methods. Usage statistics are determined for each document, and the documents are organized based in whole or in part on the usage statistics. These usage statistics may include, for example, the number of visitors to the document (perhaps over a period of time), the frequency with which the document was visited (perhaps over a period of time), or other measures.
> 
> A. Architecture
> 
> FIG. 1 illustrates a system 100 in which methods and apparatus, consistent with the present invention, may be implemented. The system 100 may include multiple client devices 110 connected to multiple servers 120 and 130 via a network 140. The network 140 may include a local area network (LAN), a wide area network (WAN), a telephone network, such as the Public Switched Telephone Network (PSTN), an intranet, the Internet, or a combination of networks. Two client devices 110 and three servers 120 and 130 have been illustrated as connected to network 140 for simplicity. In practice, there may be more or less client devices and servers. Also, in some instances, a client device may perform the functions of a server and a server may perform the functions of a client device.
> 
> The client devices 110 may include devices, such mainframes, minicomputers, personal computers, laptops, personal digital assistants, or the like, capable of connecting to the network 140. The client devices 110 may transmit data over the network 140 or receive data from the network 140 via a wired, wireless, or optical connection.
> 
> FIG. 2 illustrates an exemplary client device 110 consistent with the present invention. The client device 110 may include a bus 210, a processor 220, a main memory 230, a read only memory (ROM) 240, a storage device 250, an input device 260, an output device 270, and a communication interface 280.
> 
> The bus 210 may include one or more conventional buses that permit communication among the components of the client device 110. The processor 220 may include any type of conventional processor or microprocessor that interprets and executes instructions. The main memory 230 may include a random access memory (RAM) or another type of dynamic storage device that stores information and instructions for execution by the processor 220. The ROM 240 may include a conventional ROM device or another type of static storage device that stores static information and instructions for use by the processor 220. The storage device 250 may include a magnetic and/or optical recording medium and its corresponding drive.
> 
> The input device 260 may include one or more conventional mechanisms that permit a user to input information to the client device 110, such as a keyboard, a mouse, a pen, voice recognition and/or biometric mechanisms, etc. The output device 270 may include one or more conventional mechanisms that output information to the user, including a display, a printer, a speaker, etc. The communication interface 280 may include any transceiver-like mechanism that enables the client device 110 to communicate with other devices and/or systems. For example, the communication interface 280 may include mechanisms for communicating with another device or system via a network, such as network 140.
> 
> As will be described in detail below, the client devices 110, consistent with the present invention, may perform certain document retrieval operations. The client devices 110 may perform these operations in response to processor 220 executing software instructions contained in a computer-readable medium, such as memory 230. A computer-readable medium may be defined as one or more memory devices and/or carrier waves. The software instructions may be read into memory 230 from another computer-readable medium, such as the data storage device 250, or from another device via the communication interface 280. The software instructions contained in memory 230 cause processor 220 to perform search-related activities described below. Alternatively, hardwired circuitry may be used in place of or in combination with software instructions to implement processes consistent with the present invention. Thus, the present invention is not limited to any specific combination of hardware circuitry and software.
> 
> The servers 120 and 130 may include one or more types of computer systems, such as a mainframe, minicomputer, or personal computer, capable of connecting to the network 140 to enable servers 120 and 130 to communicate with the client devices 110. In alternative implementations, the servers 120 and 130 may include mechanisms for directly connecting to one or more client devices 110. The servers 120 and 130 may transmit data over network 140 or receive data from the network 140 via a wired, wireless, or optical connection.
> 
> The servers may be configured in a manner similar to that described above in reference to FIG. 2 for client device 110. In an implementation consistent with the present invention, the server 120 may include a search engine 125 usable by the client devices 110. The servers 130 may store documents (or web pages) accessible by the client devices 110 and may perform document retrieval and organization operations, as described below.
> 
> 
> ## B. ARCHITECTURAL OPERATION
> 
> 
> FIG. 3 illustrates a flow diagram, consistent with the invention, for organizing documents based on usage information. At stage 310, a search query is received by search engine 125. The query may contain text, audio, video, or graphical information. At stage 320, search engine 125 identifies a list of documents that are responsive (or relevant) to the search query. This identification of responsive documents may be performed in a variety of ways, consistent with the invention, including conventional ways such as comparing the search query to the content of the document.
> 
> Once this set of responsive documents has been determined, it is necessary to organize the documents in some manner. Consistent with the invention, this may be achieved by employing usage statistics, in whole or in part.
> 
> As shown at stage 330, scores are assigned to each document based on the usage information. The scores may be absolute in value or relative to the scores for other documents. This process of assigning scores, which may occur before or after the set of responsive documents is identified, can be based on a variety of usage information. In a preferred implementation, the usage information comprises both unique visitor information and frequency of visit information, as described below in reference to FIGS. 4 and 5. The usage information may be maintained at client 110 and transmitted to search engine 125. The location of the usage information is not critical, however, and it could also be maintained in other ways. For example, the usage information may be maintained at servers 130, which forward the information to search engine 125; or the usage information may be maintained at server 120 if it provides access to the documents (e.g., as a web proxy).
> 
> At stage 340, the responsive documents are organized based on the assigned scores. The documents may be organized based entirely on the scores derived from usage statistics. Alternatively, they may be organized based on the assigned scores in combination with other factors. For example, the documents may be organized based on the assigned scores combined with link information and/or query information. Link information involves the relationships between linked documents, and an example of the use of such link information is described in the Brin & Page publication referenced above. Query information involves the information provided as part of the search query, which may be used in a variety of ways to determine the relevance of a document. Other information, such as the length of the path of a document, could also be used.
> 
> In one implementation, documents are organized based on a total score that represents the product of a usage score and a standard query-term-based score (“IR score”). In particular, the total score equals the square root of the IR score multiplied by the usage score. The usage score, in turn, equals a frequency of visit score multiplied by a unique user score multiplied by a path length score.
> 
> The frequency of visit score equals log 2(1+log(VF)/log(MAXVF). VF is the number of times that the document was visited (or accessed) in one month, and MAXVF is set to 2000. A small value is used when VF is unknown. If the unique user is less than 10, it equals 0.5*UU/10; otherwise, it equals 0.5*(1+UU/MAXUU). UU is the number of unique hosts/IPs that access the document in one month, and MAXUU is set to 400. A small value is used when UU is unknown. The path length score equals log(K−PL)/log(K). PL is the number of ‘/’ characters in the document's path, and K is set to 20.
> 
> FIG. 4 illustrates a few techniques for computing the frequency of visits, consistent with the invention. The computation begins with a raw count 410, which could be an absolute or relative number corresponding to the visit frequency for the document. For example, the raw count may represent the total number of times that a document has been visited. Alternatively, the raw count may represent the number of times that a document has been visited in a given period of time (e.g., 100 visits over the past week), the change in the number of times that a documents has been visited in a given period of time (e.g., 20% increase during this week compared to the last week), or any number of different ways to measure how frequently a document has been visited. In one implementation, this raw count is used as the refined visit frequency 440, as shown by the path from 410 to 440.
> 
> In other implementations, the raw count may be processed using any of a variety of techniques to develop a refined visit frequency, with a few such techniques being illustrated in FIG. 4. As shown by 420, the raw count may be filtered to remove certain visits. For example, one may wish to remove visits by automated agents or by those affiliated with the document at issue, since such visits may be deemed to not represent objective usage. This filtered count 420 may then be used to calculate the refined visit frequency 440.
> 
> Instead of, or in addition to, filtering the raw count, the raw count may be weighted based on the nature of the visit (430). For example, one may wish to assign a weighting factor to a visit based on the geographic source for the visit (e.g., counting a visit from Germany as twice as important as a visit from Antarctica). Any other type of information that can be derived about the nature of the visit (e.g., the browser being used, information concerning the user, etc.) could also be used to weight the visit. This weighted visit frequency 430 may then be used as the refined visit frequency 440.
> 
> Although only a few techniques for computing the visit frequency are illustrated in FIG. 4, those skilled in the art will recognize that there exist other ways for computing the visit frequency, consistent with the invention.
> 
> FIG. 5 illustrates a few techniques for computing the number of users, consistent with the invention. As with the techniques for computing visit frequency illustrated in FIG. 4, the computation begins with a raw count 510, which could be an absolute or relative number corresponding to the number of users who have visited the document. Alternatively, the raw count may represent the number of users that have visited a document in a given period of time (e.g., 30 users over the past week), the change in the number of users that have visited the document in a given period of time (e.g., 20% increase during this week compared to the last week), or any number of different ways to measure how many users have visited a document. The identification of the users may be achieved based on the user's Internet Protocol (IP) address, their hostname, cookie information, or other user or machine identification information. In one implementation, this raw count is used as the refined number of users 540, as shown by the path from 510 to 540.
> 
> In other implementations, the raw count may be processed using any of a variety of techniques to develop a refined user count, with a few such techniques being illustrated in FIG. 5. As shown by 520, the raw count may be filtered to remove certain users. For example, one may wish to remove users identified as automated agents or as users affiliated with the document at issue, since such users may be deemed to not provide objective information about the value of the document. This filtered count 520 may then be used to calculate the refined user count 540.
> 
> Instead of, or in addition to, filtering the raw count, the raw count may be weighted based on the nature of the user (530). For example, one may wish to assign a weighting factor to a visit based on the geographic source for the visit (e.g., counting a user from Germany as twice as important as a user from Antarctica). Any other type of information that can be derived about the nature of the user (e.g., browsing history, bookmarked items, etc.) could also be used to weight the user. This weighted user information 530 may then be used as the refined user count 540.
> 
> Although only a few techniques for computing the number of users are illustrated in FIG. 5, those skilled in the art will recognize that there exist other ways for computing the number of users, consistent with the invention. Similarly, although FIGS. 4 and 5 illustrate two types of usage information that may be used to organize documents, those skilled in the art will recognize that there exist other such type of information and techniques consistent with the invention.
> 
> Furthermore, although FIGS. 4 and 5 illustrate determining usage information on a document-by-document basis, other techniques consistent with the information may be used to associate usage information with a document. For example, rather than maintaining usage information for each document, one could maintain usage information on a site-by-site basis. This site usage information could then be associated with some or all of the documents within that site.
> 
> FIG. 6 depicts an exemplary method employing visit frequency information, consistent with the invention. FIG. 6 depicts three documents, 610, 620, and 630, which are responsive to a search query for the term “weather.” Document 610 is shown to have been visited 40 times over the past month, with 15 of those 40 visits being by automated agents. Document 620, which is linked to from document 610, is shown to have been visited 30 times over the past month, with 10 of those 30 visits coming from Germany. Document 630, which is linked to from documents 610 and 620, is shown to have been visited 4 times over the past month.
> 
> Under a conventional term frequency based search method, the documents may be organized based on the frequency with which the search query term (“weather”) appears in the document. Accordingly, the documents may be organized into the following order: 620 (three occurrences of “weather”), 630 (two occurrences of “weather’), and 610 (one occurrence of “weather’).
> 
> Under a conventional link-based search method, the documents may be organized based on the number of other documents that link to those documents. Accordingly, the documents may be organized into the following order: 630 (linked to by two other documents), 620 (linked to by one other document), and 610 (linked to by no other documents).
> 
> Methods and apparatus consistent with the invention employ usage information to aid in organizing documents. Based purely on raw visit frequency, the documents may be organized into the following order: 610 (40 visits), 620 (30 visits), and 630 (4 visits). If these raw visit frequency number are refined to filter automated agents and to assign double weight to visits from Germany, the documents may be organized in the following order: 620 (effectively 40 visits, since the 10 from Germany count double), 610 (effectively 25 visits after filtering the 15 visits from automated agents), and 630 (effectively 4 visits).
> 
> Instead of using the usage information alone, the usage information may be used in combination with the query information and/or the link information to develop the ultimate organization of the documents.
> 
> 
> ## C. CONCLUSION
> 
> 
> The foregoing description of preferred embodiments of the present invention provides illustration and description, but is not intended to be exhaustive or to limit the invention to the precise form disclosed. Modifications and variations are possible in light of the above teachings or may be acquired from practice of the invention. For example, although the preceding description generally discussed the operation of search engine 125 in the context of a search of documents on the world wide web, search engine 125 could be implemented on any corpus.
> 
> In accordance with 37 C.F.R. §1.121(b)(1)(iii) separate sheets with the replacement paragraphs, marked up to show all changes relative to the previous version of the paragraphs, is filed herewith.
