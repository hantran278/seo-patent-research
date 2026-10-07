---
patent_id: US8161041B1
title: "Tạo từ đồng nghĩa dựa trên tài liệu"
title_en: "Document-based synonym generation"
assignee: "Google LLC"
assignee_original: "Google LLC"
priority_date: 2007-02-07
filing_date: 2011-02-10
grant_date: 2012-04-17
legal_status: "Active"
expiration: 
cpc: ["G06F16/00", "G06F16/90", "G06F16/95", "G06F16/953", "G06F16/9532", "G06F16/9535"]
inventors: ["Oleksandr Grushetskyy", "Steven D. Baker"]
layer: core
factors: ["query-understanding"]
family: []
status: analyzed
seo_relevance: trung bình
auto: true
source_url: https://patents.google.com/patent/US8161041B1/en
tags: ["patent/core", "status/analyzed", "seo/trung-bình", "factor/query-understanding"]
---

# Tạo từ đồng nghĩa dựa trên tài liệu
*Tên gốc: Document-based synonym generation*

> [!info] US8161041B1 · Google LLC · ưu tiên 2007-02-07 · cấp 2012-04-17
> **Tác giả:** Oleksandr Grushetskyy, Steven D. Baker
> **Nhóm yếu tố:** [[Hiểu truy vấn (rewrite, synonym, intent)]]
> **Trạng thái pháp lý:** Active · [Google Patents](https://patents.google.com/patent/US8161041B1/en)
> **Mức liên quan SEO:** trung bình

## Tóm tắt
Tự động tạo từ đồng nghĩa từ tài liệu: tính tần suất đồng xuất hiện của các cặp từ, tính điểm gần nhau (hai từ có nằm gần nhau đến mức cùng câu/cụm hay không), rồi kết luận cặp từ có đồng nghĩa không. Hệ thống còn xét tương quan giữa từ trong title hoặc anchor text với từ trong nội dung, và độ giống về hình thái từ.

> [!quote]- Tóm tắt gốc (tiếng Anh)
> One embodiment of the present invention provides a system that automatically generates synonyms for words from documents. During operation, this system determines co-occurrence frequencies for pairs of words in the documents. The system also determines closeness scores for pairs of words in the documents, wherein a closeness score indicates whether a pair of words are located so close to each other that the words are likely to occur in the same sentence or phrase. Finally, the system determines whether pairs of words are synonyms based on the determined co-occurrence frequencies and the determined closeness scores. While making this determination, the system can additionally consider correlations between words in a title or an anchor of a document and words in the document as well as word-form scores for pairs of words in the documents.

## Cơ chế hoạt động
- Tự động tìm từ đồng nghĩa **từ nội dung tài liệu**: tính tần suất đồng xuất hiện, **điểm gần nhau** (xác suất rất gần / xác suất gần), độ giống hình thái từ, và tương quan giữa từ trong **title/anchor** với từ trong nội dung.

## Claims chính
9 claim độc lập / 33 claim.

> [!quote]- Claims độc lập (bản gốc tiếng Anh)
> 1. A computer-implemented method comprising: receiving a pair of words comprising a first word and a second word, where each word appears in a collection of documents; generating a word-form score for the pair of words based on a consistency of the pair of words with word-form rules, wherein a word-form rule indicates how words with a common portion can vary; computing a probability that the first word occurs within a first number of words of the second word in the one or more documents in the collection; computing a probability that the first word occurs within a second number of words of the second word in the one or more documents in the collection, wherein the second number is greater than the first number; generating a closeness score for the pair of words by dividing the first number by the second number; computing a relative frequency of occurrence for the first word and the second word in the collection of documents; generating a correlation between occurrences of a first word in the title or the anchor of the documents and occurrences of a second word in a same document; and determining that the first word and the second word are synonyms based at least on the correlation, the relative frequency of the first word and the second word, the closeness score, and the word-form score.
> 
> 4. A computer-implemented method comprising: receiving a pair of words; generating a word-form score for the pair of words based on a consistency of the pair of words with word-form rules, wherein a word-form rule indicates how words with a common portion can vary; determining that the pair of words is a synonym pair based at least on the generated word-form score; and generating an alternative search query for a search query that includes one of the words of the pair of words using another word of the pair of words.
> 
> 9. A computer-implemented method comprising: receiving a pair of words that includes first word and a second word; computing a probability that the first word occurs within a first number of words of the second word in a collection of documents; computing a probability that the first word occurs within a second number of words of the second word in the one or more documents, wherein the second number is greater than the first number; generating a closeness score for the pair of words by dividing the first number by the second number; determining a co-occurrence frequency for the pair of words in a collection of documents; and determining that the pair of words are not synonyms based at least on the generated closeness score and the co-occurrence frequency.

## Liên hệ với leak
- **Google leak 2024:** _chưa đối chiếu_
- **Yandex 2023:** _chưa đối chiếu_

## Ý nghĩa SEO
- Google học đồng nghĩa từ chính cách các trang viết → dùng **từ vựng tự nhiên, đa dạng** của ngành (biến thể, từ đồng nghĩa) giúp trang khớp nhiều cách diễn đạt query.
- Không cần lặp đúng một cụm từ khoá.

## Hành động audit
- [ ] Kiểm tra nội dung có dùng các biến thể/đồng nghĩa tự nhiên của từ khoá chính (không chỉ lặp một cụm)

## Patent liên quan
- [[US9767169B1 - Cải thiện khả năng đọc của kết quả tìm kiếm]] _(Được trích dẫn bởi)_
- [[US7636714B1 - Xác định từ đồng nghĩa trong ngữ cảnh query]] _(Tương tự)_
- [[US8321201B1 - Xác định từ đồng nghĩa theo N-gram cho cụm từ trong query]] _(Tương tự)_
- [[US8661012B1 - Đảm bảo từ đồng nghĩa không làm mất thông tin của cụm từ trong query]] _(Tương tự)_
- [[US9183297B1 - Tạo từ đồng nghĩa từ vựng cho các từ trong query]] _(Tương tự)_

**Patent Google liên quan khác (chưa có trong vault):**
- [US7925498B1](https://patents.google.com/patent/US7925498B1/en) Identifying a synonym with N-gram agreement for a query phrase _(Trích dẫn)_
- [US7890521B1](https://patents.google.com/patent/US7890521B1/en) Document-based synonym generation _(Trích dẫn)_
- [US8762370B1](https://patents.google.com/patent/US8762370B1/en) Document-based synonym generation _(Được trích dẫn bởi)_
- [US8375042B1](https://patents.google.com/patent/US8375042B1/en) Index-side synonym generation _(Được trích dẫn bởi)_
- [US11423029B1](https://patents.google.com/patent/US11423029B1/en) Index-side stem-based variant generation _(Được trích dẫn bởi)_
- [US9037591B1](https://patents.google.com/patent/US9037591B1/en) Storing term substitution information in an index _(Được trích dẫn bởi)_

## Toàn văn mô tả
> [!note]- Bấm để mở toàn văn (bản gốc tiếng Anh)
> 
> ## CROSS-REFERENCE TO RELATED APPLICATIONS
> 
> 
> This application is a continuation of U.S. patent application Ser. No. 12/027,559, filed on Feb. 7, 2008, now U.S. Pat. No. 7,890,521, entitled “Document-Based Synonym Generation,” and U.S. Provisional Application No. 60/900,271, filed on Feb. 7, 2007 entitled “Document-Based Synonym Generation.” The disclosure of the foregoing applications is incorporated herein by reference in its entirety.
> 
> 
> ## BACKGROUND
> 
> 
> The present invention generally relates to the field of information retrieval, and more specifically to the task of identifying synonyms for words to facilitate retrieving documents in response to queries which contain the words.
> 
> The World Wide Web (web) contains a vast amount of freely available information. However, locating a relevant item of information on the web can be a challenging task. Note that this problem continues to increase as the amount of information available on the web continues to grow.
> 
> Search engines can often help users to locate and retrieve a document of interest on the web. However, users often fail to select effective query terms during the searching process. For example, a user may enter the query [web hosting+fort wayne] when the city of Fort Wayne is usually referred to as Ft. Wayne. Or, a user may enter [free loops for flash movie] when most relevant pages use the term “music,” rather than “loops” and the term “animation” rather than “movie.” Thus, documents that satisfy a user's informational needs may use different terms than the specific query terms chosen by the user to express a concept of interest. Note that this problem becomes more of an issue as the number of terms in a query increases. For queries longer than three or four words, there is a strong likelihood that at least one of the terms is not the best term to describe the user's informational need.
> 
> Hence, there is a need to modify and/or expand user queries to include synonyms for query terms, so that retrieved documents will better meet the user's informational needs.
> 
> Unfortunately, solving this problem has proven to be a difficult task. A simple approach is to use pre-constructed synonym information, for example from a thesaurus or a structured lexical database. However, thesaurus-based systems have various problems. For example, they are often expensive to construct, and are generally restricted to one language.
> 
> Some systems consider how often terms are substituted for each other during query sessions to determine whether the terms are synonyms. However, there does not exist enough query data for rare words and rare languages to identify synonyms in this way.
> 
> Other systems consider stemming relationships to identify synonyms. However, stemming is not always accurate. For example, the words “university” and “universal” share the same stem, but have very different meanings Furthermore, many good synonyms are not covered by stemming, such as “wolfs” and “wolves,” or “wales” and “welsh.”
> 
> Accordingly, what is needed is a method and an apparatus that identifies potential synonyms to facilitate searching operations without the above-described problems.
> 
> 
> ## SUMMARY
> 
> 
> One embodiment of the present invention provides a system that automatically generates synonyms for words from documents. During operation, this system determines co-occurrence frequencies for pairs of words in the documents. The system also determines closeness scores for pairs of words in the documents, wherein a closeness score indicates whether a pair of words are located so close to each other (for example, in sequential distance or logical distance) that the words are likely to occur in the same sentence or phrase. Finally, the system determines whether pairs of words are synonyms based on the determined co-occurrence frequencies and the determined closeness scores.
> 
> In some embodiments, determining a closeness score for a pair of words includes dividing the probability that the words are very close to each other by the probability that the words are near each other.
> 
> In some embodiments, words are determined to be “very close” to each other if they are less than a small number of words apart, such as 4 words, and words are determined to be “near” each other if they are within a pre-specified number words of each other, such as 100 words.
> 
> In some embodiments, while determining whether words are synonyms, the system considers a high closeness score between two words to indicate that the two words are unlikely to be synonyms because synonyms rarely occur in the same sentence or phrase.
> 
> In some embodiments, the system additionally generates correlations between words in a title or an anchor of a document and words in the document. In this variation, determining whether pairs of words are synonyms additionally involves considering the generated correlations.
> 
> In some embodiments, the system additionally determines word-form scores for pairs of words in the documents, wherein a high word-form score indicates that words share common portions, but have differing portions that are consistent with word form rules. Note that word-form rules specify a set of edits that that are allowed to a base word to produce gender-specific, plurality-related or other variations of the base word. For example, a high word-form score can indicate that: a pair of words share a common prefix but have different suffixes, wherein the different suffixes are consistent with word-form rules; a pair of words share a common suffix but have different prefixes, wherein the different prefixes are consistent with word-form rules; or a pair of words share a common prefix and a common suffix, but have different middle sections, wherein the different middle sections are consistent with word-form rules. In this variation, determining whether pairs of words are synonyms additionally involves considering the word-form scores.
> 
> In some embodiments, the system automatically generates the word-form rules from synonymous words that share common prefixes and/or suffixes.
> 
> In some embodiments, while determining whether a candidate word is a synonym for a target word, the system considers whether the candidate word is much more common than the target word. If so, the candidate word is not a synonym because search results produced by the candidate word will overwhelm search results produced by the target word. The system also considers whether the candidate word is much less common than the target word. If so, the candidate word is not a synonym because using the candidate word will produce very few additional search results.
> 
> In some embodiments, the system additionally processes a query. This involves first receiving the query which contains a set of words. Next, the system uses the synonyms which were automatically generated from the documents to identify one or more synonyms for the one or more words in the query. The system then generates an altered query using the one or more synonyms, and uses the altered query to produce search results. In one embodiment of the present invention, alternative synonyms are presented to a user through a user interface to enable the user to select the synonyms that are used to produce the altered query. Also note that when search results are returned the system can highlight or bold synonymous terms in search results.
> 
> Another embodiment of the present invention provides another system that automatically generates synonyms for words from documents. During operation, this system determines co-occurrence frequencies for pairs of words in the documents. The system also determines word-form scores for pairs of words in the documents, wherein a high word-form score indicates that a pair of words share a common prefix but have different endings, wherein the different endings are consistent with word-form rules. Finally, the system determines whether pairs of words are synonyms based on the determined co-occurrence frequencies and the determined word-form scores.
> 
> 
> ## BRIEF DESCRIPTION OF THE FIGURES
> 
> 
> FIG. 1 illustrates the crawling, ranking and searching processes in accordance with an embodiment of the present invention.
> 
> FIG. 2 presents a flowchart illustrating a method for generating altered queries according to one embodiment of the present invention.
> 
> FIG. 3 presents a flow chart illustrating the process of automatically generating synonyms from words in a document in accordance with an embodiment of the present invention.
> 
> FIG. 4 presents a flow chart illustrating the process of automatically generating word-form rules in accordance with an embodiment of the present invention.
> 
> 
> ## DETAILED DESCRIPTION
> 
> 
> The following description is presented to enable one of ordinary skill in the art to make and use the invention, and is provided in the context of a particular application and its requirements. Various modifications to the disclosed embodiments will be readily apparent to those skilled in the art, and the general principles defined herein may be applied to other embodiments and applications without departing from the spirit and scope of the present invention. Thus, the present invention is not limited to the embodiments shown, but is to be accorded the widest scope consistent with the claims.
> 
> The data structures and code described in this detailed description are typically stored on a computer-readable storage medium, which may be any device or medium that can store code and/or data for use by a computer system. This includes, but is not limited to, volatile memory, non-volatile memory, magnetic and optical storage devices such as disk drives, magnetic tape, CDs (compact discs), DVDs (digital versatile discs or digital video discs), or other media capable of storing computer readable media now known or later developed.
> 
> Crawling, Ranking and Searching Processes
> 
> FIG. 1 illustrates the crawling, ranking and searching processes in accordance with an embodiment of the present invention. During the crawling process, a web crawler 104 crawls or otherwise searches through websites on web 102 to select web pages to be stored in indexed form in data center 108. The selected web pages are then compressed, indexed and ranked in module 105 (using the ranking process described above) before being stored in data center 108.
> 
> During a subsequent search process, a search engine 112 receives a query 113 from a user 111 through a web browser 114. This query 113 specifies a number of terms to be searched for in the set of documents. In response to query 113, search engine 112 uses search terms specified in the query as well as synonyms for search terms to identify highly-ranked documents that satisfy the query. Search engine 112 then returns a response 115 through web browser 114, wherein the response 115 contains matching pages along with ranking information and references to the identified documents.
> 
> Generating Altered Queries
> 
> FIG. 2 presents a flowchart illustrating a method for generating altered queries according to one embodiment of the present invention. Initially, a search query is received from a client 110. In one embodiment, a front-end server is responsible for receiving the search query from the client (step 210). This front-end server provides the query to the search engine, which evaluates the query. In addition, the front-end server and/or search engine maintains various log files or lookup tables that storing each received query, as well as other information. More particularly, each query can be stored with a user identifier that identifies the particular browser and/or computer from which the query was received, a timestamp for the query, and a list of some number of the search results (e.g., a list of the top ten document IDs from the search). Other information related to user context or the search itself may also be stored.
> 
> Next, a list of search results for the search query is identified (step 220). In this example, the search engine evaluates the query to retrieve a set of search results in accordance with the search query and returns the results to the front-end server. The search engine communicates with one or more content servers to select documents that are relevant to the user's search query. Note that a content server stores a large number of indexed documents, indexed (and/or retrieved) from different websites. Alternatively, or in addition, the content server can store an index of documents stored on various websites. “Documents” are understood here to be any form of indexable content, including textual documents, images, video, audio, multimedia, presentations, and so forth.
> 
> In one embodiment, each indexed document is assigned a page rank according to the document's link structure. This page rank serves as a query-independent measure of the document's importance. The search engine assigns a score to each document based on the document's page rank (and/or other query-independent measure of the document's importance), as well as one or more query-dependent signals of the document's importance (e.g., the location and frequency of search terms in the document).
> 
> Then, one or more synonymous terms are identified (step 230) from a predetermined list. Formation of the predetermined list may be accomplished using various processes. More specifically, FIG. 3 presents a flowchart illustrating a process for determining automatically identifying synonyms from documents according to one embodiment of the present invention.
> 
> Next, referring back to FIG. 2, one or more altered queries are derived using the synonymous terms (step 240). Various methods exist for deriving alternative queries from the synonymous terms. In one embodiment, alternative queries are suggested that include the synonym, either as a substitution in or an addition to the query.
> 
> In another embodiment, the synonym is treated as equivalent to the original phrase automatically for purposes of document retrieval. For example, the original query can be modified by replacing the phrase with a synonym or a disjunction of the original phrase and a synonym when producing search results for the query.
> 
> From the above steps, a list of altered search results for the altered query is identified (step 250). In one embodiment, this list may include a maximum number of results.
> 
> Generating Synonyms from Documents
> 
> FIG. 3 presents a flow chart illustrating the process of automatically generating synonyms from words in a document in accordance with an embodiment of the present invention. First, the system determines co-occurrence frequencies for pairs of words in the documents (step 302). This can be easily accomplished using well-known statistical techniques.
> 
> The system also determines closeness scores for pairs of words in the documents (step 304), wherein a closeness score indicates whether a pair of words are located so close to each other that the words are likely to occur in the same sentence or phrase. For example, in one embodiment of the present invention, determining the closeness score for a pair of words involves dividing the probability that the words are very close to each other (e.g., within 4 words) by the probability that the words are near each other (e.g., within 100 words). Note that the system considers a high closeness score between two words to indicate that the two words are unlikely to be synonyms because synonyms rarely occur in the same sentence or phrase.
> 
> The system additionally generates correlations between words in a titles or URL anchors for documents and words in the documents (step 306). This helps to identify synonyms because a document tends to contain synonyms for words in the title or the anchor of the document.
> 
> The system also determines word-form scores for pairs of words in the documents (step 308). A high word-form score between a pair of words generally indicates that the words share a common portion and have differing portions, wherein the differing portions are consistent with word-form rules. A word-form rule indicates how words with a common stem can vary. For example a high word-form score can indicate that the pair of words: (1) share a common prefix but have different suffixes, wherein the different suffixes are consistent with word-form rules; (2) share a common suffix but have different prefixes, wherein the different prefixes are consistent with word-form rules; or (3) share a common prefix and a common suffix, but have different middle sections, wherein the different middle sections are consistent with word-form rules. The process of determining word-form rules is discussed in more detail below with reference to the flow chart which appears in FIG. 4.
> 
> Finally, the system determines whether pairs of words are synonyms based on the determined co-occurrence frequencies, closeness scores, title/anchor correlations, and word-form scores (step 310). Note that the closeness score is a negative indicator of a synonym, whereas the other factors are positive indicators.
> 
> While determining whether words are synonyms, the system can also consider relative frequencies of pairs of words. For example, if the candidate word is much more common than the target word, the candidate word will generally not be a good synonym because search results produced by the candidate word will overwhelm search results produced by the target word. Also, if the candidate word is much less common than the target word, the candidate word will generally not be a good synonym because using the candidate word will produce very few additional search results.
> 
> Generating Word-Form Rules
> 
> FIG. 4 presents a flow chart illustrating the process of automatically generating word-form rules in accordance with an embodiment of the present invention. The system first obtains pairs of words that are likely to be synonyms (step 402). This can involve considering a number of factors, such as the co-occurrence frequencies, closeness scores and title/anchor correlations described above. It can also involve obtaining pair of synonymous words using other techniques, such as examining word substitutions during query sessions. Next, the system can generate word-form rules which indicate how related words which share a common stem can vary. For example, the system can generate word-form rules for pairs of words that share common parts, which can include prefixes, suffixes and/or middle sections, and wherein remaining parts of the pair of words are consistent with word-form rules (step 404).
> 
> The foregoing descriptions of embodiments of the present invention have been presented only for purposes of illustration and description. They are not intended to be exhaustive or to limit the present invention to the forms disclosed. Accordingly, many modifications and variations will be apparent to practitioners skilled in the art. Additionally, the above disclosure is not intended to limit the present invention. The scope of the present invention is defined by the appended claims.
