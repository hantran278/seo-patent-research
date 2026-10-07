---
patent_id: US8433704B2
title: "Trích xuất thông tin doanh nghiệp địa phương"
title_en: "Local item extraction"
assignee: "Google LLC"
assignee_original: "Google LLC"
priority_date: 2004-12-30
filing_date: 2010-09-23
grant_date: 2013-04-30
legal_status: "Expired - Fee Related"
expiration: 
cpc: ["G06F16/00", "G06F16/30", "G06F16/31", "G06F16/90", "G06F16/95", "G06F16/953", "G06F16/9537"]
inventors: ["Michael Dennis Riley"]
layer: core
factors: ["local"]
family: []
status: todo
source_url: https://patents.google.com/patent/US8433704B2/en
tags: ["patent/core", "status/todo", "factor/local"]
---

# Trích xuất thông tin doanh nghiệp địa phương
*Tên gốc: Local item extraction*

> [!info] US8433704B2 · Google LLC · ưu tiên 2004-12-30 · cấp 2013-04-30
> **Tác giả:** Michael Dennis Riley
> **Nhóm yếu tố:** [[Local SEO]]
> **Trạng thái pháp lý:** Expired - Fee Related · [Google Patents](https://patents.google.com/patent/US8433704B2/en)

## Tóm tắt
Hệ thống tìm tài liệu có địa chỉ, xác định thông tin doanh nghiệp trong tài liệu, gán điểm tin cậy cho khả năng thông tin đó thuộc về địa chỉ này, rồi quyết định có gắn doanh nghiệp với địa chỉ hay không (cơ sở của citation/NAP).

> [!quote]- Tóm tắt gốc (tiếng Anh)
> A system identifies a document that includes an address and locates business information in the document. The system assigns a confidence score to the business information, where the confidence score relates to a probability that the business information is associated with the address. The system determines whether to associate the business information with the address based on the assigned confidence score.

## Cơ chế hoạt động
_Chưa phân tích._

## Claims chính
2 claim độc lập / 22 claim.

> [!quote]- Claims độc lập (bản gốc tiếng Anh)
> 1. A method comprising: identifying, via a processor in a server device, a geographic address in an electronic document; generating a set of candidates for business information that is associated with the geographic address, the set of candidates for the business information being generated from a plurality of terms within a particular distance from the identified geographic address in the electronic document; determining, for each candidate of the set of candidates for the business information, a probability that the candidate for the business information is associated with the geographic address, the determining the probability including calculating a confidence score for each candidate of the set of candidates, the confidence score being based on characteristics of terms of each candidate of the set of candidates and characteristics of words surrounding each candidate of the set of candidates; and associating, in a data repository, the candidate for the business information having a highest probability of the determined probabilities, with the geographic address.
> 
> 12. A system comprising: one or more memories storing instructions; and one or more processors, configured to execute the instructions stored in the one or more memories, to: identify a geographic address in an electronic document; generate a set of candidates for the business information from a plurality of terms within a certain number of terms from the identified geographic address; determine, for each candidate, in the set of candidates for the business information, a probability that the candidate for the business information is associated with the geographic address, where, to determine the probability, the one or more processors are to calculate a confidence score for each candidate, the confidence score being based on characteristics of terms of each candidate and characteristics of words surrounding each candidate; and store, in a data repository, the candidate for the business information having a highest probability, with the geographic address.

## Liên hệ với leak
- **Google leak 2024:** _chưa đối chiếu_
- **Yandex 2023:** _chưa đối chiếu_

## Ý nghĩa SEO
_Chưa phân tích._

## Hành động audit
- [ ] _Chưa có_

## Patent liên quan
- [[US7676745B2 - Phân đoạn tài liệu dựa trên khoảng trống thị giác]] _(Tương tự)_

**Patent Google liên quan khác (chưa có trong vault):**
- [US7831438B2](https://patents.google.com/patent/US7831438B2/en) Local item extraction _(Được trích dẫn bởi)_
- [US9317873B2](https://patents.google.com/patent/US9317873B2/en) Automatic verification of advertiser identifier in advertisements _(Được trích dẫn bởi)_
- [US11115529B2](https://patents.google.com/patent/US11115529B2/en) System and method for providing and managing third party content with call functionality _(Được trích dẫn bởi)_
- [US20150287099A1](https://patents.google.com/patent/US20150287099A1/en) Method to compute the prominence score to phone numbers on web pages and automatically annotate/attach it to ads _(Được trích dẫn bởi)_
- [US10469424B2](https://patents.google.com/patent/US10469424B2/en) Network based data traffic latency reduction _(Được trích dẫn bởi)_

## Toàn văn mô tả
> [!note]- Bấm để mở toàn văn (bản gốc tiếng Anh)
> 
> ## RELATED APPLICATION
> 
> 
> This application is a continuation of application Ser. No. 11/024,765, filed Dec. 30, 2004, now U.S. Pat. No. 7,831,438, the disclosure of which is incorporated herein by reference.
> 
> 
> ## BACKGROUND
> 
> 
> 1. Field of the Invention
> 
> Implementations described herein relate generally to local information retrieval and, more particularly, to the identification of business information associated with an address.
> 
> 2. Description of Related Art
> 
> The World Wide Web (“web”) contains a vast amount of information. Locating a desired portion of the information, however, can be challenging. This problem is compounded because the amount of information on the web and the number of new users inexperienced at web searching are growing rapidly.
> 
> Search systems attempt to return hyperlinks to web pages in which a user is interested. Generally, search systems base their determination of the user's interest on search terms (called a search query) entered by the user. The goal of the search system is to provide links to high quality, relevant results (e.g., web pages) to the user based on the search query. Typically, the search system accomplishes this by matching the terms in the search query to a corpus of pre-stored web pages. Web pages that contain the user's search terms are “hits” and are returned to the user as links.
> 
> Local search systems attempt to return relevant web pages and/or business listings within a specific geographic area. When a business is mentioned on a web page, existing local search systems may match the business with yellow pages data to identify the corresponding business listing. This technique is not practicable, however, when no yellow pages data exists or the yellow pages data is incorrect for a business.
> 
> 
> ## SUMMARY
> 
> 
> According to one aspect, a method may include identifying a document that includes an address, locating business information in the document, and assigning a confidence score to the business information, where the confidence score may relate to a probability that the business information is associated with the address. The method may also include determining whether to associate the business information with the address based on the assigned confidence score.
> 
> According to another aspect, a method may include identifying a document that includes an address, identifying a set of terms that precede the address in the document, and determining a probability that each of the terms is part of a title associated with the address. The method may also include identifying a candidate title based on one or more of the terms that have a high probability of being part of a title associated with the address, assigning a confidence score to the candidate title, and determining whether to associate the candidate title with the address based on the assigned confidence score.
> 
> According to yet another aspect, a method may include identifying a document that includes an address, identifying a set of candidate telephone numbers in the document, determining a probability that each candidate telephone number in the set of candidate telephone numbers is associated with the address, and determining whether to associate one of the candidate telephone numbers with the address based on the determined probability.
> 
> According to a further aspect, a method may include identifying a web page that includes a landmark, identifying an attribute in the web page, and assigning a confidence score to the attribute, where the confidence score may relate to a probability that the attribute is associated with the landmark. The method may also include determining whether to associate the attribute with the landmark based on the assigned confidence score.
> 
> 
> ## BRIEF DESCRIPTION OF THE DRAWINGS
> 
> 
> The accompanying drawings, which are incorporated in and constitute a part of this specification, illustrate an embodiment of the invention and, together with the description, explain the invention. In the drawings,
> 
> FIG. 1 is a diagram of an example document that includes an address;
> 
> FIG. 2 is an exemplary diagram of a network in which systems and methods consistent with the principles of the invention may be implemented;
> 
> FIG. 3 is an exemplary diagram of a client or server of FIG. 2 according to an implementation consistent with the principles of the invention;
> 
> FIG. 4 is an exemplary diagram of a training system according to an implementation consistent with the principles of the invention;
> 
> FIG. 5 is a flowchart of exemplary processing for training a statistical model according to an implementation consistent with the principles of the invention;
> 
> FIG. 6 is an exemplary diagram of a local item extractor according to an implementation consistent with the principles of the invention;
> 
> FIG. 7 is a flowchart of exemplary processing for identifying a business name (title) associated with an address according to an implementation consistent with the principles of the invention;
> 
> FIG. 8 is a flowchart of exemplary processing for identifying a telephone number associated with an address according to an implementation consistent with the principles of the invention; and
> 
> FIGS. 9-15 are diagrams that illustrate processing that may be performed on an exemplary document according to an implementation consistent with the principles of the invention.
> 
> 
> ## DETAILED DESCRIPTION
> 
> 
> The following detailed description of the invention refers to the accompanying drawings. The same reference numbers in different drawings may identify the same or similar elements. Also, the following detailed description does not limit the invention.
> 
> 
> ## Overview
> 
> 
> Local searching involves identifying business listings associated with a particular geographic area. The web includes billions of documents, some of which may mention a business. It is beneficial to local search systems to identify business information associated with as many different businesses as possible. Often, yellow pages data is associated with the business. Sometimes, however, a business is mentioned in a document for which there is no yellow pages data or the yellow pages data is possibly incorrect.
> 
> Systems and methods consistent with the principles of the invention may identify business information associated with an address mentioned in a web document. In one implementation, the business information includes the name of a business associated with the address. In another implementation, the business information includes a telephone number associated with the address. In yet another implementation, the business information may include another type of information, such as business hours or a link to a web site or map for a business associated with the address.
> 
> FIG. 1 is a diagram of an example document that includes an address. As shown, the document is associated with a review of Veltri's Pizza—a restaurant located in Oakmont, Pa. The document may be analyzed to determine that the document includes a postal address (i.e., 123 Allegheny Avenue, Oakmont, Pa.). Assume that Veltri's does not have any associated yellow pages data or has possibly incorrect yellow pages data.
> 
> Using techniques described herein, the document may be further analyzed to determine business information associated with the address. The business information may include a business name (also referred to herein as a “title”) and/or a telephone number associated with the address. The business information may be used to create or correct a business listing associated with the address.
> 
> A “document,” as the term is used herein, is to be broadly interpreted to include any machine-readable and machine-storable work product. A document may include, for example, an e-mail, a web site, a business listing, a file, a combination of files, one or more files with embedded links to other files, a news group posting, a blog, a web advertisement, etc. In the context of the Internet, a common document is a web page. Web pages often include textual information and may include embedded information (such as meta information, images, hyperlinks, etc.) and/or embedded instructions (such as Javascript, etc.). A “link,” as the term is used herein, is to be broadly interpreted to include any reference to/from a document from/to another document or another part of the same document.
> 
> 
> ## Exemplary Network Configuration
> 
> 
> FIG. 2 is an exemplary diagram of a network 200 in which systems and methods consistent with the principles of the invention may be implemented. Network 200 may include multiple clients 210 connected to multiple servers 220-240 via a network 250. Two clients 210 and three servers 220-240 have been illustrated as connected to network 250 for simplicity. In practice, there may be more or fewer clients and servers. Also, in some instances, a client may perform the functions of a server and a server may perform the functions of a client.
> 
> Clients 210 may include client entities. An entity may be defined as a device, such as a wireless telephone, a personal computer, a personal digital assistant (PDA), a lap top, or another type of computation or communication device, a thread or process running on one of these devices, and/or an object executable by one of these devices. Servers 220-240 may include server entities that gather, process, search, and/or maintain documents in a manner consistent with the principles of the invention.
> 
> In an implementation consistent with the principles of the invention, server 220 may include a search engine 225 usable by clients 210. Server 220 may crawl a corpus of documents (e.g., web documents), index the documents, and store information associated with the documents in a repository of documents. Servers 230 and 240 may store or maintain documents that may be crawled or analyzed by server 220.
> 
> While servers 220-240 are shown as separate entities, it may be possible for one or more of servers 220-240 to perform one or more of the functions of another one or more of servers 220-240. For example, it may be possible that two or more of servers 220-240 are implemented as a single server. It may also be possible for a single one of servers 220-240 to be implemented as two or more separate (and possibly distributed) devices.
> 
> Network 250 may include a local area network (LAN), a wide area network (WAN), a telephone network, such as the Public Switched Telephone Network (PSTN), an intranet, the Internet, a memory device, or a combination of networks. Clients 210 and servers 220-240 may connect to network 250 via wired, wireless, and/or optical connections.
> 
> 
> ## Exemplary Client/Server Architecture
> 
> 
> FIG. 3 is an exemplary diagram of a client or server entity (hereinafter called “client/server entity”), which may correspond to one or more of clients 210 and/or servers 220-240, according to an implementation consistent with the principles of the invention. The client/server entity may include a bus 310, a processor 320, a main memory 330, a read only memory (ROM) 340, a storage device 350, an input device 360, an output device 370, and a communication interface 380. Bus 310 may include a path that permits communication among the elements of the client/server entity.
> 
> Processor 320 may include a conventional processor, microprocessor, or processing logic that interprets and executes instructions. Main memory 330 may include a random access memory (RAM) or another type of dynamic storage device that may store information and instructions for execution by processor 320. ROM 340 may include a conventional ROM device or another type of static storage device that may store static information and instructions for use by processor 320. Storage device 350 may include a magnetic and/or optical recording medium and its corresponding drive.
> 
> Input device 360 may include a conventional mechanism that permits an operator to input information to the client/server entity, such as a keyboard, a mouse, a pen, voice recognition and/or biometric mechanisms, etc. Output device 370 may include a conventional mechanism that outputs information to the operator, including a display, a printer, a speaker, etc. Communication interface 380 may include any transceiver-like mechanism that enables the client/server entity to communicate with other devices and/or systems. For example, communication interface 380 may include mechanisms for communicating with another device or system via a network, such as network 250.
> 
> The client/server entity, consistent with the principles of the invention, may perform certain operations, as will be described in detail below. The client/server entity may perform these operations in response to processor 320 executing software instructions contained in a computer-readable medium, such as memory 330. A computer-readable medium may be defined as a physical or logical memory device and/or carrier wave.
> 
> The software instructions may be read into memory 330 from another computer-readable medium, such as data storage device 350, or from another device via communication interface 380. The software instructions contained in memory 330 may cause processor 320 to perform processes that will be described later. Alternatively, hardwired circuitry may be used in place of or in combination with software instructions to implement processes consistent with the principles of the invention. Thus, implementations consistent with the principles of the invention are not limited to any specific combination of hardware circuitry and software.
> 
> 
> ## Exemplary Training System
> 
> 
> FIG. 4 is an exemplary diagram of a training system 400 according to an implementation consistent with the principles of the invention. In one implementation, training system 400 may be implemented by software and/or hardware within server 220 (FIG. 2), another device, or a group of devices separate from or including server 220.
> 
> As shown in FIG. 4, training system 400 may include a trainer 410 that generates a statistical model 420 based on a training set. In one implementation, a set of documents that include addresses for which there is yellow pages (yp) data may be identified. Generally, trainer 410 may identify features commonly associated with business information in the set of documents for which there is yellow pages data to generate statistical model 420. Statistical model 420 may be used to predict where business information may be located within documents that include addresses for which there is no yellow pages data or possibly incorrect yellow pages data.
> 
> FIG. 5 is a flowchart of exemplary processing for training statistical model 420 according to an implementation consistent with the principles of the invention. Processing may begin with analyzing a corpus of documents to identify documents that include addresses for which there is yellow pages data (block 510). For example, documents in the document corpus may be analyzed to determine whether the documents include addresses. Any well known address recognition technique may be used to recognize an address in a document.
> 
> When a document is identified as including an address, the address may be analyzed against yellow pages data to determine whether the yellow pages data includes a business listing that matches the address. From the yellow pages' business listing, business information, such as the business's name (“title”) and/or telephone number may be identified. This business information may then be identified within the document (block 520). For example, the text of the document may be analyzed to determine whether any of the text matches the business information.
> 
> When none of the text matches the business information, the document may be removed from the training set. When text of the document matches the business information, the address and business information may be marked within the document (block 530) and the document may be included in the training set. Any well known marking technique may be used to mark the address and business information in the document. In one implementation, only documents for which the business information occurs around the address (e.g., within a predetermined number of terms, such as 20 or 60 terms to the left and/or right of the address) may be included in the training set. In another implementation, documents for which the business information occurs anywhere in the document may be included in the training set.
> 
> Once the training set has been established, which may include millions of documents, a statistical model may be generated based on the training set (block 540). For example, the documents in the training set may be analyzed to collect features regarding how to recognize business information in a document when the document includes an address. The features may be associated with the distance that a candidate term is from a reference point (e.g., the address in the document), characteristics of the candidate term, boundary information associated with the candidate term, and/or punctuation information associated with the candidate term. The particular features that are useful to determine a title may differ from those features that are useful to determine a telephone number. The features may differ still for determining other types of business information.
> 
> Examples of features relating to characteristics of a candidate title term might include what the term is, whether it is a number, whether it is capitalized, uppercase, bolded, italicized, underlined, or centered, whether it is part of anchor text, and what its length is in characters. Examples of features relating to boundary information for a candidate title term might be based on the presence of boundary markings (e.g., HTML tags) and might include whether there is a paragraph, break, or list item marker and whether there is a marker relating to the beginning or end of a table or list between the candidate title term and a preceding or following term. Examples of features relating to punctuation information for a candidate title term might include whether there is a comma, period, exclamation point, question mark, colon, semicolon, dash, single or double quote, a bracket, or a space between the candidate title term and a preceding or following term. Other features would be apparent to one skilled in the art.
> 
> Examples of features relating to characteristics of a candidate telephone number term might include what the term is, what its length is in characters, and if the telephone includes an area code, whether the area code appears appropriate for the geographic area in which the address is located. Examples of features relating to boundary information for a candidate telephone number term might be based on the presence of boundary markings (e.g., HTML tags) and might include whether there is a paragraph, break, or list item marker and whether there is a marker relating to the beginning or end of a table or list between the candidate telephone number term and the address. Some other features that are relevant to candidate telephone number terms might include whether common telephone number terms (e.g., call, calling, telephone, telephoning, phone, phoning, tel, tele, (T), etc.) appear within a predetermined number of terms before the candidate telephone number term, whether common facsimile number terms (e.g., fax, faxing, (F), etc.) appear within a predetermined number of terms before the candidate telephone number term, whether there is another telephone number between the candidate telephone number term and the address. Other features would be apparent to one skilled in the art.
> 
> The statistical model may be used, based on the features associated with a term in a document, to predict whether the term is part of the business information associated with an address in the document. In other words, the statistical model may identify a number of different clues from the training set and use these clues to determine where a title is likely to begin and end within a document and/or which telephone number likely corresponds to an address in the document.
> 
> 
> ## Exemplary Local Item Extractor
> 
> 
> FIG. 6 is an exemplary diagram of a local item extractor 600 according to an implementation consistent with the principles of the invention. In one implementation, local item extractor 600 may be implemented by software and/or hardware within server 220 (FIG. 2), another device, or a group of devices separate from or including server 220.
> 
> As shown in FIG. 6, local item extractor 600 may include a classifier 610 that may analyze documents with addresses to determine business information associated with the addresses based on statistical model 420. The documents analyzed by classifier 610 may include documents with addresses for which there is no corresponding yellow pages data and/or documents with addresses for which there is possibly incorrect yellow pages data. The functions performed by classifier 610 may differ based on whether the business information corresponds to business name (title) information or telephone number information. Yet other functions may be performed when the business information includes information other than business name or telephone number information.
> 
> FIG. 7 is a flowchart of exemplary processing for identifying a business name (title) associated with an address according to an implementation consistent with the principles of the invention. Processing may begin with the identification of a document that contains an address (block 710). Any well known address recognition technique may be used to recognize an address in a document.
> 
> Terms near the address may be analyzed and the probability that each term is part of the title may be determined (blocks 720 and 730). In one implementation, analysis may begin with the term that immediately precedes the address in the document. In other words, the search for the title may begin at the address and look backward in the text of the document. The theory is that when a title occurs in a document in association with an address, it almost always occurs before the address in the document.
> 
> When analyzing a candidate term, it may be determined, based on the statistical model, the probability that the candidate term is part of the title given the prediction regarding the preceding term and given a window of terms (e.g., looking at a predetermined number of terms to the left and right) around the candidate term. The probability determination may be based on the features of the candidate term and other terms in the window. The features associated with the candidate term might include, for example, the distance of the candidate term from the address, characteristics of the candidate term, boundary information between the candidate term and a preceding or following term, and/or punctuation information between the candidate term and a preceding or following term.
> 
> Let t(i), which is either 0 or 1, be the prediction of whether the ith term preceding the beginning of the address is (=1) or is not (=0) a term in the title. Let x(i) be the ith term itself, s(i) be attributes of x(i) (e.g., distance and characteristics), h(i) be the boundary information between x(i) and a following (or preceding) term, and q(i) be the punctuation information between x(i) and a following (or preceding) term. Then the probability that x(i) is part of the title conditioned on its context may be represented by: F(i)=Prob[t(i) given x(i+2)x(i+1)x(i)x(i−1)x(i−2),s(i+2)s(i+1)s(i)s(i−1)s(i−2),h(i+1)h(i)h(i−1)h(i−2),q(i+1)q(i)q(i−1)q(i−2),t(i−1)], where x(i+2)x(i+1)x(i)x(i−1)x(i−2) may refer to the window of terms around x(i) (while the window of terms is shown as two to the left and two to the right of x(i), the window may be bigger or smaller in other implementations consistent with the principles of the invention), s(i+2)s(i+1)s(i)s(i−1)s(i−2) may refer to the attributes of the terms in the window, h(i+1)h(i)h(i−1)h(i−2) may refer to boundary information between the terms in the window, q(i+1)q(i)q(i−1)q(i−2) may refer to punctuation information between the terms in the window, and t(i−1) may refer to the prediction concerning the term preceding x(i) (i.e., x(i−1).
> 
> Let X=x(n)x(n−1) . . . x(2)x(1), where n refers to the size of the text string that is considered (e.g., 20 terms), S=s(n)s(n−1) . . . s(2)s(1), H=h(n−1) . . . h(2)h(1), Q=q(n−1) . . . q(2)q(1), and T=t(n)t(n−1) . . . t(2)t(1). The probability of the whole string may then be determined from Prob(T given X, S, H, Q). Based on the definition of conditional probability and a Markov-like assumption (i.e., only local context matters), the probability of the string may be represented by: Prob(T given X,S,H,Q)=kF(n)F(n−1) . . . F(2)F(1), where k is a constant for this context and where the t(i) and t(i−1) in F(i) on the right hand side of the equation matches what is in T on the left hand side of the equation.
> 
> T may then be chosen to maximize Prob(T given X, S, H, Q) subject to the constraint that all the 1's in T are contiguous. To do this, an exhaustive search may be performed over all 2n T's and Prob(T given X, S, H, Q) may be evaluated for each T. To obtain just the best title, a well known single-source shortest path algorithm may be used. To obtain the j best titles, a well known j-best algorithm may be used.
> 
> A confidence score may be assigned to each candidate title that is identified (block 740). The confidence score may be related to the probability associated with the title (e.g., Prob(T given X, S, H, Q)). Optionally, the best title for the address may be determined from the set of candidate titles (block 750). In one implementation, the best title for the address may be identified as the candidate title with the highest confidence score. In another implementation, when the address appears in a group of documents, the best title for the address may be identified as the candidate title with the highest confidence score across the group of documents or the candidate title with the highest confidence score that appears in the most documents in the group of documents.
> 
> The title may then be associated with the address to form or supplement a business listing. The address with its associated title may be stored together in a memory.
> 
> FIG. 8 is a flowchart of exemplary processing for identifying a telephone number associated with an address according to an implementation consistent with the principles of the invention. Processing may begin with the identification of a document that contains an address (block 810). Any well known address recognition technique may be used to recognize an address in a document.
> 
> A set of candidate telephone numbers in the document may be identified (block 820). In one implementation, all telephone numbers in the document may be identified as candidate telephone numbers. In another implementation, telephone numbers within a certain distance of the address may be identified. Any well known pattern matching technique may be used to identify the set of candidate telephone numbers.
> 
> It may be determined, based on the statistical model, the probability that each of the candidate telephone numbers is associated with the address given the prediction regarding the preceding candidate telephone number and given a window of terms (e.g., looking at a predetermined number of terms to the left and right) around the candidate telephone number (block 830). The probability determination may be further based on the features associated with the candidate telephone number. The features might include, as explained above, the distance of candidate telephone number from the address, characteristics of the candidate telephone number, boundary information between the candidate telephone number and the address, and/or punctuation information between the candidate telephone number and the address. The probability may be determined in a manner similar to that described above with regard to titles, where x(i), in this case, refers to a candidate telephone number.
> 
> Confidence scores may be assigned to the candidate telephone numbers based on their determined probabilities (block 840). Optionally, a best telephone number for the address may be determined (block 850). In one implementation, the best telephone number for the address may be identified as the candidate telephone number with the highest confidence score. In another implementation, when the address appears in a group of documents, the best telephone number for the address may be identified as the candidate telephone number with the highest confidence score across the group of documents or the candidate telephone number with the highest confidence score that appears in the most documents in the group of documents.
> 
> The telephone number may then be associated with the address to form or supplement a business listing. The address with its associated telephone number may be stored together in a memory.
> 
> 
> ## Example
> 
> 
> FIGS. 9-15 are diagrams that illustrate processing that may be performed on an exemplary document according to an implementation consistent with the principles of the invention. As shown in FIG. 9, the document is a web page associated with a review of Morton's restaurant located in Washington, D.C. The web page may be analyzed using a well known address recognition technique to determine that the web page includes a postal address. As shown in FIG. 10, the address corresponds to 123 Connecticut Avenue, Washington, D.C. 20200. Assume that Morton's does not have any associated yellow pages data or has possibly incorrect yellow pages data.
> 
> When attempting to identify a business name (title) associated with the address, the search may begin at the term immediately preceding the address and go backwards. In this case, the search may begin with the term “at,” as shown in FIG. 11. It may be determined what the probability is that candidate term “at” is part of the title given a window of terms around the candidate term, features associated with the terms in the window, and the prediction associated with the previous term.
> 
> The probability may be expressed as F(at)=Prob[t(at) given “visited Morton's at 123 Connecticut,” s(visited)s(Morton's)s(at)s(123)s(Connecticut), h(Morton's)h(at)h(123)h(Connecticut), q(Morton's)q(at)q(123)q(Connecticut), 0], where, for example, s(at) may refer to attributes of the term “at,” h(at) may refer to boundary information between the term “at” and the following term “Morton's,” q(at) may refer to punctuation information between the term “at” and the following term “Morton's,” and “0” refers to the prediction regarding the prior term, which in this case, corresponds to part of the address. While this simple example assumes a two term window to the left and right of the candidate term, the window may be larger or smaller in practice.
> 
> The attributes associated with the candidate term “at” might include the distance of the term “at” from the address. In this case, the term “at” immediately precedes the address. The attributes might also include characteristics of the term “at.” In this case, the term is “at;” it is not a number; it is not capitalized, uppercase, bolded, italicized, underlined, or centered; it is not part of anchor text; and it is two characters in length. For the boundary information, assume that there are no boundary markers to the left (or right) of the term “at.” Also, there is no punctuation to the left (or right) of the term “at.” Assume that the probability determination results in a prediction that the term “at” is not part of the title (e.g., t(at)=0).
> 
> The search may continue with the term “Morton's,” as shown in FIG. 12. It may be determined what the probability is that the candidate term “Morton's” is part of the title given a window of terms around the candidate term, features associated with the terms in the window, and the prediction associated with the previous term.
> 
> The probability may be expressed as P(Morton's)=Prob[t(Morton's) given “recently visited Morton's at 123,” s(recently)s(visited)s(Morton's)s(at)s(123), h(visited)h(Morton's)h(at)h(123), q(visited)q(Morton's)q(at)q(123), 0]. The attributes associated with the term “Morton's” might include the distance of the term “Morton's” from the address. In this case, the term “Morton's” is one term away from the address. The attributes might also include characteristics of the term “Morton's.” In this case, the term is “Morton's;” it is not a number; it's first character is capitalized; it is not uppercase, bolded, italicized, underlined, or centered; it is not part of anchor text; and it is eight characters in length. For the boundary information, assume that there are no boundary markers to the left (or right) of the term “Morton's.” Also, there is no punctuation to the left (or right) of the term “Morton's.” Assume that the probability determination results in a prediction that the term “Morton's” is part of the title (e.g., t(Morton's)=1).
> 
> The search may continue with the term “visited,” as shown in FIG. 13. It may be determined what the probability is that the candidate term “visited” is part of the title given a window of terms around the candidate term, features associated with the terms in the window, and the prediction associated with the previous term.
> 
> The probability may be expressed as P(visited)=Prob[t(visited) given “I recently visited Morton's at,” s(I)s(recently)s(visited)s(Morton's)s(at), h(recently)h(visited)h(Morton's)h(at), q(recently)q(visited)q(Morton's)q(at), 1]. The attributes associated with the term “visited” might include the distance of the term “visited” from the address. In this case, the term “visited” is two terms away from the address. The attributes might also include characteristics of the term “visited.” In this case, the term is “visited;” it is not a number; it is not capitalized, uppercase, bolded, italicized, underlined, or centered; it is not part of anchor text; and it is seven characters in length. For the boundary information, assume that there are no boundary markers to the left (or right) of the term “visited.” Also, there is no punctuation to the left (or right) of the term “visited.” Assume that the probability determination results in a prediction that the term “visited” is not part of the title (e.g., t(visited)=0).
> 
> Once a prediction is made whether each of the candidate terms is part of the title (for some set of terms in the web page or all of the terms in the web page), a sliding string of terms may be considered to identify a string that maximizes the probability that the terms of the string include the title. Assume that this processing identifies the term “Morton's” as a candidate title for the address. A confidence score may be assigned to the candidate title, as described above.
> 
> When attempting to identify a telephone number associated with the address, the search may begin by identifying all of the telephone numbers in the web page using a well known pattern matching technique, as shown in FIG. 14. In this case, there were two candidate telephone numbers identified: 202-987-6543 and 202-987-6542.
> 
> It may be determined what the probability is that each of the candidate telephone numbers is the telephone number for the address given a window of terms around the candidate telephone number, features associated with the candidate telephone number, and the prediction associated with the previous telephone number. The features associated with the candidate telephone numbers might include the distance of the telephone numbers from the address. In this case, both candidate telephone numbers are separated from the address by approximately 150 terms. The features might also include whether any boundary information exists between the telephone number and the address. In this case, two paragraph boundaries exist between the candidate telephone numbers and the address.
> 
> Some other features that are relevant to telephone numbers include whether common telephone number terms (e.g., call, calling, telephone, telephoning, phone, phoning, tel, tele, (T), T, etc.) appear within a predetermined number of terms before the telephone number, whether common facsimile number terms (e.g., fax, faxing, (F), F, etc.) appear within a predetermined number of terms before the telephone number, whether there is another telephone number between it and the address. In this case, the probability determination may result in a prediction that the 202-987-6543 telephone number candidate is more likely the telephone number that goes with the address than the 202-987-6542 telephone number candidate.
> 
> The candidate telephone numbers may be assigned confidence scores based on their probability of being associated with the address.
> 
> A business listing associated with the address may be formed or supplemented with information from the title and/or telephone number with the highest confidence score(s), as shown in FIG. 15. The business listing may include a link to a document associated with the business, address information for the business, a telephone number for the business, a snippet from a document that mentions the business, and/or one or more links to documents that refer to the business.
> 
> 
> ## CONCLUSION
> 
> 
> Systems and methods consistent with the principles of the invention may, given some landmark in a document (e.g., a postal address), attempt to find an attribute of the landmark (e.g., business information, such as a business name, telephone number, business hours, or a link to a web site or a map) in the document. While the preceding description focussed on finding business information associated with an address in a document, this need not be the case. In other implementations, the above processing may apply to other landmarks and attributes, such as finding the price (attribute) or a product identification number (attribute) associated with a product (landmark). Other types of landmarks and attributes that may appear in documents would be apparent to one skilled in the art.
> 
> The foregoing description of preferred embodiments of the present invention provides illustration and description, but is not intended to be exhaustive or to limit the invention to the precise form disclosed. Modifications and variations are possible in light of the above teachings or may be acquired from practice of the invention.
> 
> For example, while series of acts have been described with regard to FIGS. 5, 7, and 8, the order of the acts may be modified in other implementations consistent with the principles of the invention. Further, non-dependent acts may be performed in parallel.
> 
> Also, it has been described that the probability that a candidate term is part of business information associated with an address is based on features, such as a window of terms around the term, a prediction regarding a previous term, and attributes, boundary information, and punctuation associated with one or more terms in the window. In another implementation, more, fewer, or different features may be used to predict whether a candidate term is part of business information associated with an address.
> 
> It will be apparent to one of ordinary skill in the art that aspects of the invention, as described above, may be implemented in many different forms of software, firmware, and hardware in the implementations illustrated in the figures. The actual software code or specialized control hardware used to implement aspects consistent with the principles of the invention is not limiting of the invention. Thus, the operation and behavior of the aspects were described without reference to the specific software code—it being understood that one of ordinary skill in the art would be able to design software and control hardware to implement the aspects based on the description herein.
> 
> No element, act, or instruction used in the present application should be construed as critical or essential to the invention unless explicitly described as such. Also, as used herein, the article “a” is intended to include one or more items. Where only one item is intended, the term “one” or similar language is used. Further, the phrase “based on” is intended to mean “based, at least in part, on” unless explicitly stated otherwise.
