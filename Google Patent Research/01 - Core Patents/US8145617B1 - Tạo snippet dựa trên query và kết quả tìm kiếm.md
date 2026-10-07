---
patent_id: US8145617B1
title: "Tạo snippet dựa trên query và kết quả tìm kiếm"
title_en: "Generation of document snippets based on queries and search results"
assignee: "Google LLC"
assignee_original: "Google LLC"
priority_date: 2005-11-18
filing_date: 2005-11-18
grant_date: 2012-03-27
legal_status: "Expired - Lifetime"
expiration: 
cpc: ["G06F16/00", "G06F16/30", "G06F16/33", "G06F16/338", "G06F16/34", "G06F16/345", "G06F16/90", "G06F16/95", "G06F16/951"]
inventors: ["Alexandre A. Verstak", "Anurag Acharya"]
layer: core
factors: ["serp-features"]
family: []
status: todo
source_url: https://patents.google.com/patent/US8145617B1/en
tags: ["patent/core", "status/todo", "factor/serp-features"]
---

# Tạo snippet dựa trên query và kết quả tìm kiếm
*Tên gốc: Generation of document snippets based on queries and search results*

> [!info] US8145617B1 · Google LLC · ưu tiên 2005-11-18 · cấp 2012-03-27
> **Tác giả:** Alexandre A. Verstak, Anurag Acharya
> **Nhóm yếu tố:** [[SERP features (sitelinks, snippet)]]
> **Trạng thái pháp lý:** Expired - Lifetime · [Google Patents](https://patents.google.com/patent/US8145617B1/en)

## Tóm tắt
Hệ thống tạo snippet hiển thị trên trang kết quả dựa trên loại query hoặc vị trí các từ của query trong tài liệu; mỗi loại query có thể dùng thuật toán tạo snippet khác nhau.

> [!quote]- Tóm tắt gốc (tiếng Anh)
> A document retrieval system generates snippets of documents for display as part of a user interface screen with search results. The snippet may be generated based on the type of query or the location of the query terms in the document. Different snippet generation algorithms may be used depending on the query type. Alternatively, snippets may be generated based on an analysis of the location of the query terms in the document.

## Cơ chế hoạt động
_Chưa phân tích._

## Claims chính
7 claim độc lập / 50 claim.

> [!quote]- Claims độc lập (bản gốc tiếng Anh)
> 1. A method for generating a snippet of a document, the method comprising: receiving a query comprising one or more query terms; selecting a document based on the query; identifying one or more paragraphs of the document, each identified paragraph including one or more of the query terms; for each of the identified paragraphs, calculating a distance from the paragraph to a beginning or an end of the document; and generating a snippet of the document based on the calculated distances of the identified paragraphs, wherein generating a snippet includes: for each of the identified paragraphs, scoring the paragraph based on a length of the paragraph and the distance of the paragraph; and selecting one of the identified paragraphs based on the scores of the identified paragraphs, wherein the snippet comprises one or more sentences of the selected paragraph.
> 
> 11. A computer program product for use in conjunction with a computer system, the computer program product comprising a computer readable storage medium and a computer program embedded therein, the computer program including instructions for: receiving a query comprising one or more query terms; selecting a document based on the query; identifying one or more paragraphs of the document, each identified paragraph including one or more of the query terms; for each of the identified paragraphs, calculating a distance from the paragraph to a beginning or an end of the document; and generating a snippet of the document based on the calculated distances of the identified paragraphs, wherein generating a snippet includes: for each of the identified paragraphs, scoring the paragraph based on a length of the paragraph and the distance of the paragraph; and selecting one of the identified paragraphs based on the scores of the identified paragraphs, wherein the snippet comprises one or more sentences of the selected paragraph.
> 
> 12. A system for generating snippets of documents in a plurality of documents, comprising: a processor for executing programs; and a document matching program executable by the processor, the program including: instructions for receiving a query comprising one or more query terms; instructions for selecting a document based on the query; instructions for identifying one or more paragraphs of the document, including one or more of the query terms; instructions for scoring an identified paragraph based on a length of the paragraph and a distance of the paragraph to a beginning or an end of the document; instructions for selecting one of the identified paragraphs based on the scores of the identified paragraphs; instructions for generating a snippet of the selected document from one or more sentences of the selected paragraph.

## Liên hệ với leak
- **Google leak 2024:** _chưa đối chiếu_
- **Yandex 2023:** _chưa đối chiếu_

## Ý nghĩa SEO
_Chưa phân tích._

## Hành động audit
- [ ] _Chưa có_

## Patent liên quan
- [[US8819000B1 - Sửa đổi query]] _(Được trích dẫn bởi)_
- [[US9940367B1 - Chấm điểm answer passage ứng viên]] _(Được trích dẫn bởi)_
- [[US10019513B1 - Trọng số từ trả lời để chấm điểm answer passage]] _(Được trích dẫn bởi)_
- [[US10180964B1 - Tạo các answer passage ứng viên]] _(Được trích dẫn bởi)_
- [[US10275434B1 - Xác định phiên bản chính của một tài liệu]] _(Tương tự)_
- [[US8423885B1 - Cập nhật index dựa trên tuổi của phần nội dung thay đổi]] _(Tương tự)_
- [[US8332408B1 - Gắn ngày tháng cho các phần của trang web]] _(Tương tự)_

**Patent Google liên quan khác (chưa có trong vault):**
- [US9916348B1](https://patents.google.com/patent/US9916348B1/en) Answer facts from structured content _(Được trích dẫn bởi)_

## Toàn văn mô tả
> [!note]- Bấm để mở toàn văn (bản gốc tiếng Anh)
> 
> ## FIELD OF THE INVENTION
> 
> 
> The present invention relates to an information retrieval system for generating snippets of documents in a large scale corpus, such as the World Wide Web.
> 
> 
> ## BACKGROUND OF THE INVENTION
> 
> 
> Information retrieval systems, generally called search engines, are now an essential tool for finding information in large scale, diverse, and growing corpuses such as the World Wide Web. Generally, search engines create an index that relates documents (or “pages”) to the individual words present in each document. A document is retrieved in response to a query containing a number of query terms, typically based on having some number of query terms present in the document. The retrieved documents are then ranked according to other statistical measures, such as frequency of occurrence of the query terms, host domain, link analysis, and the like. The retrieved documents are then presented to the user, typically in their ranked order, and without any further grouping or imposed hierarchy. In some cases, a selected portion or snippet of text of a document is presented to provide the user with a preview of the content of the document. Depending on the query terms and the document, the snippet may not provide useful information to the user to assess the relevance of the document to the query.
> 
> There is a need for an information retrieval system and methodology that can provide more meaningful snippets.
> 
> 
> ## SUMMARY OF THE INVENTION
> 
> 
> The present invention includes a system and methodology for generating snippets of documents retrieved during a search based on query terms. The snippet is generated based on the location of the query terms in the document. In one aspect, the paragraphs including the query terms are scored based on the length of the paragraph and the distance of the paragraph from a location of the document, such as the beginning of the document. A snippet is generated using a paragraph selected based on the score of the paragraph, such as the highest score.
> 
> In another aspect, a snippet generating algorithm is selected based on the type of a query. The selected snippet generation algorithm generates a snippet of the document. The query type may be based on the form of the query terms or the location of query terms in the document. Thus, depending on the type of query, different snippet generation algorithms will be selected, and different types of snippets generated.
> 
> The features and advantages described in the specification are not all inclusive and, in particular, many additional features and advantages will be apparent to one of ordinary skill in the art in view of the drawings, specification, and claims. Moreover, it should be noted that the language used in the specification has been principally selected for readability and instructional purposes, and may not have been selected to delineate or circumscribe the inventive subject matter.
> 
> 
> ## BRIEF DESCRIPTION OF THE DRAWINGS
> 
> 
> FIG. 1 is a block diagram illustrating the software architecture of a search system according to the present invention.
> 
> FIG. 2 is a flowchart illustrating an exemplary methodology for generating a snippet according to the present invention.
> 
> FIG. 3 illustrates a screenshot of the search system of FIG. 1.
> 
> FIG. 4 is a flowchart illustrating another exemplary methodology for generating a snippet according to the present invention.
> 
> 
> ## DETAILED DESCRIPTION OF THE INVENTION
> 
> 
> The present invention includes a system and methodology for generating snippets of documents that are retrieved during a search based on the query terms for the search. The snippets may be generated based on the type of the query or the location of the query terms in the document.
> 
> Referring now to FIG. 1, there is shown the software architecture of a search system 100 in accordance the present invention. The search system 100 includes an indexing system 110, a search system 120, a presentation system 130, and a front end server 140.
> 
> The indexing system 110 identifies words or terms in documents, and indexes documents according to the words or terms, by accessing various websites 190 and other document collections. The front end server 140 receives queries from a user of a client 170, and provides those queries to the search system 120. The search system 120 searches for documents relevant to the search query (search results), including identifying any query terms in the search query, and then ranking the documents in the search results using the presence of query terms to influence the ranking order. The search system 120 provides the search results to the presentation system 130. The presentation system 130 modifies the search results, generates snippets of documents, and provides the modified search results back to the front end server 140, which provides the results to the client 170. The system 100 further includes an index 150 that stores the indexing information pertaining to documents and a data repository 160 of the indexed documents.
> 
> In the context of this description, “documents” are understood to be any type of media that can be indexed and retrieved by a search engine, including web documents, images, multimedia files, text documents, PDFs or other image formatted files, and so forth. A document may have one or more pages, partitions, segments or other components, as appropriate to its content and type. Equivalently a document may be referred to as a “page,” as commonly used to refer to documents on the Internet. No limitation as to the scope of the invention is implied by the use of the generic term “documents.” The search system 100 operates over a large corpus of documents, such as the Internet and World Wide Web, but can likewise be used in more limited collections, such as for the document collections of a library or private enterprises. In either context, it will be appreciated that the documents are typically distributed across many different computer systems and sites. Without loss of generality then, the documents generally, regardless of format or location (e.g., which website or database) will be collectively referred to as a corpus or document collection. Each document has an associated identifier that uniquely identifies the document; the identifier is preferably a URL, but other types of identifiers (e.g., document numbers) may be used as well. In this disclosure, the use of URLs to identify documents is assumed.
> 
> The document collection may include scholarly literature, such as journal articles, conference articles, academic papers and citation records of journal articles, conference articles, and academic papers. Because works of scholarly literature are subject to rigorous format requirements, such documents have metadata information describing the content and source of the document. The document metadata includes names of authors, title, publisher, publication date, publication location, citation information, article identifiers such as Digital Object Identifier, PubMed Identifier, SICI, ISBN, and the like, network location (e.g., URL), number of references, number of citations, language, and the like.
> 
> As described above, the presentation system 130 generates a snippet of a document for display as part of the user interface screen with the search results. The presentation system 130 generates snippets based on the type of query or the location of the query terms in the document. In one embodiment, the presentation system 130 uses a plurality of different snippet generation algorithms to generate snippets responsive to different query types. Alternatively, the presentation system 130 may generate snippets based on an analysis of the location of the query terms in the document.
> 
> FIG. 2 is a flowchart illustrating an exemplary methodology for generating a snippet according to the present invention. The front end server 140 receives 202 queries from a client 170, and provides the query to the search system 120. The search system 120 conducts a search 204 and generates a list of documents relevant to the search query and provides the search results to the presentation system 130. The presentation system 130 determines 206 the location of query terms in each of the documents. For example, the query may include the words “theory”, “relativity”, “space”, and “travel.” The presentation system 130 generates 208 a snippet based on the location of the query terms in the document. The presentation system 130 selects a paragraph or a portion of the paragraph as a snippet based on the length and distance of the paragraph from the start of the document. For example, this may be used to find an abstract of the document. In one embodiment, each paragraph that includes the query terms is given a score based on the length of the paragraph and the distance of the paragraph from a predetermined location in the document, such as the beginning or the end of the document. The beginning of the document may be used for the types of documents that include abstracts, executive summaries or comprehensive introductions, at the beginning of the document. The end of the document may be used for other types of documents that include a conclusion or summarization at the end of the document. The scoring function may be non-linear. In addition to length and location, the scoring function also includes language dependent rules on the content of the paragraphs and formatting rules. The language dependent rules may be, for example, how much of the paragraph are punctuation characters, whether the paragraph ends with a punctuation or proposition, or whether any of the words in the paragraph is overly long. The formatting rules may be, for example, the number of bold or italicized words in the paragraph. The scoring may include the summation of one or more of the following scores:
> 
> wherein PositionFactor (a position factor or constant) may be, for example, 10, 15, or 25, and the MaxParagraphLen (maximum paragraph length) may be, for example, 50, 100 or 200 words. Each paragraph of the document is scored in this manner, and one of the paragraphs is selected on the basis of the score. The selection of a paragraph may be based on the paragraph having the highest score, or may be the first paragraph to score above a threshold amount. From the selected paragraph, the snippet is generated. The snippet may be, for example, a predetermined number of words of the selected paragraph, such as the first predetermined number of words of the paragraph (e.g., 25 words), the first one or more sentences of the paragraph (e.g., 3 sentences), a middle portion (e.g., 50 words) containing at least one of the query terms, or the entire paragraph.
> 
> FIG. 3 illustrates a user interface screen of an illustrative embodiment of search results. Continuing with the example of the search for “theory of relativity”, “space” and “travel”, the presentation system 130 generates a page illustrating a plurality of search result elements for documents retrieved by the search. Each search result element includes a link 301 to the document from the search result (e.g., “Clock paradox problem resolution in relativity theory, considering space travel effects on time” by M. Sachs and published in Physics Today in 1971). The search result element further includes a snippet 302 of portions of the document with the query terms, a link 304 to a page of documents citing the search result document, and a link element 305 for a web search for the document.
> 
> FIG. 4 is a flowchart illustrating another exemplary methodology for generating a snippet according to the present invention. The front end server 140 receives 402 a query. The presentation system 130 determines 404 the type of query. The type of query may be based on the form of the query. The form of the query may be determined from query terms, information that is the metadata, such as author, title, or journal name, a request for specific information, such as a patent, a movie, or location information, or a query including specific terms. The type of query may be based on the location of query terms in the document. The location and frequency of search terms and sequences of the search terms are determined, and a region of the document is selected as a snippet based on this determination. The system 100 may determine the type of the query by using the search system 120 to track the regions of the document or metadata matching the query terms. The presentation system 130 aggregates information from such matches from all results and uses the results to label the query. For example, if most of the results or more than a threshold number of results include the query terms in the author field, the query can be marked as an “author” query. A similar determination may be done for other metadata fields.
> 
> Based on the type of query, the presentation system 130 selects 406 the snippet algorithm. The snippet may be generated based on query terms in first or second predetermined portions of the document based on whether the query term is a first or second type, respectively. For example, the first predetermined portion may be an abstract and the second predetermined portion may be the body of the document. In one embodiment, the query type is a query for information that is in the metadata, and the snippet is generated from the body text, and not the metadata. The presentation system 130 generates 408 a snippet using the selected algorithm. For example, the selected algorithm for the generation of the snippet from the body text may include scoring each paragraph and selecting the paragraph according to score, such as described above. The snippet may be displayed in a user interface screen such as shown in FIG. 3.
> 
> Reference in the specification to “one embodiment” or to “an embodiment” means that a particular feature, structure, or characteristic described in connection with the embodiments is included in at least one embodiment of the invention. The appearances of the phrase “in one embodiment” in various places in the specification are not necessarily all referring to the same embodiment.
> 
> Some portions of the detailed description are presented in terms of algorithms and symbolic representations of operations on data bits within a computer memory. These algorithmic descriptions and representations are the means used by those skilled in the data processing arts to most effectively convey the substance of their work to others skilled in the art. An algorithm is here, and generally, conceived to be a self-consistent sequence of steps (instructions) leading to a desired result. The steps are those requiring physical manipulations of physical quantities. Usually, though not necessarily, these quantities take the form of electrical, magnetic or optical signals capable of being stored, transferred, combined, compared and otherwise manipulated. It is convenient at times, principally for reasons of common usage, to refer to these signals as bits, values, elements, symbols, characters, terms, numbers, or the like. Furthermore, it is also convenient at times, to refer to certain arrangements of steps requiring physical manipulations of physical quantities as modules or code devices, without loss of generality.
> 
> It should be borne in mind, however, that all of these and similar terms are to be associated with the appropriate physical quantities and are merely convenient labels applied to these quantities. Unless specifically stated otherwise as apparent from the following discussion, it is appreciated that throughout the description, discussions utilizing terms such as “processing” or “computing” or “calculating” or “determining” or “displaying” or “determining” or the like, refer to the action and processes of a computer system, or similar electronic computing device, that manipulates and transforms data represented as physical (electronic) quantities within the computer system memories or registers or other such information storage, transmission or display devices.
> 
> Certain aspects of the present invention include process steps and instructions described herein in the form of an algorithm. It should be noted that the process steps and instructions of the present invention could be embodied in software, firmware or hardware, and when embodied in software, could be downloaded to reside on and be operated from different platforms used by a variety of operating systems.
> 
> The present invention also relates to an apparatus for performing the operations herein. This apparatus may be specially constructed for the required purposes, or it may comprise a general-purpose computer selectively activated or reconfigured by a computer program stored in the computer. Such a computer program may be stored in a computer readable storage medium, such as, but is not limited to, any type of disk including floppy disks, optical disks, CD-ROMs, magnetic-optical disks, read-only memories (ROMs), random access memories (RAMs), EPROMs, EEPROMs, magnetic or optical cards, application specific integrated circuits (ASICs), or any type of media suitable for storing electronic instructions, and each coupled to a computer system bus. Furthermore, the computers referred to in the specification may include a single processor or may be architectures employing multiple processor designs for increased computing capability.
> 
> The algorithms and displays presented herein are not inherently related to any particular computer or other apparatus. Various general-purpose systems may also be used with programs in accordance with the teachings herein, or it may prove convenient to construct more specialized apparatus to perform the required method steps. The required structure for a variety of these systems will appear from the description below. In addition, the present invention is not described with reference to any particular programming language. It will be appreciated that a variety of programming languages may be used to implement the teachings of the present invention as described herein, and any references below to specific languages are provided for disclosure of enablement and best mode of the present invention.
> 
> In addition, the language used in the specification has been principally selected for readability and instructional purposes, and may not have been selected to delineate or circumscribe the inventive subject matter. Accordingly, the disclosure of the present invention is intended to be illustrative, but not limiting, of the scope of the invention, which is set forth in the following claims.
