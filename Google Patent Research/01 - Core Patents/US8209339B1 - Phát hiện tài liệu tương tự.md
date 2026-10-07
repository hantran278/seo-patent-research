---
patent_id: US8209339B1
title: "Phát hiện tài liệu tương tự"
title_en: "Document similarity detection"
assignee: "Google LLC"
assignee_original: "Google LLC"
priority_date: 2003-06-17
filing_date: 2010-04-21
grant_date: 2012-06-26
legal_status: "Expired - Fee Related"
expiration: 
cpc: ["G06F16/00", "G06F16/30", "G06F16/31", "G06F16/316", "G06F16/319"]
inventors: ["Simon Tong"]
layer: core
factors: ["duplicates"]
family: []
status: analyzed
seo_relevance: trung bình
auto: true
source_url: https://patents.google.com/patent/US8209339B1/en
tags: ["patent/core", "status/analyzed", "seo/trung-bình", "factor/duplicates"]
---

# Phát hiện tài liệu tương tự
*Tên gốc: Document similarity detection*

> [!info] US8209339B1 · Google LLC · ưu tiên 2003-06-17 · cấp 2012-06-26
> **Tác giả:** Simon Tong
> **Nhóm yếu tố:** [[Trùng lặp & canonical]]
> **Trạng thái pháp lý:** Expired - Fee Related · [Google Patents](https://patents.google.com/patent/US8209339B1/en)
> **Mức liên quan SEO:** trung bình

## Tóm tắt
Bộ phát hiện tìm các bản tương tự hoặc gần trùng lặp (near-duplicate) của một tài liệu. Mỗi tài liệu được biểu diễn thành cụm các cặp từ (từ thứ nhất xuất hiện trước từ thứ hai trong tài liệu). Tài liệu khác có số cặp từ trùng với cụm vượt ngưỡng thì được coi là tương tự.

> [!quote]- Tóm tắt gốc (tiếng Anh)
> A similarity detector detects similar or near duplicate occurrences of a document. The similarity detector determines similarity of documents by characterizing the documents as clusters each made up of a set of term entries, such as pairs of terms. A pair of terms, for example, indicates that the first term of the pair occurs before the second term of the pair in the underlying document. Another document that has a threshold level of term entries in common with a cluster is considered similar to the document characterized by the cluster.

## Cơ chế hoạt động
- Biểu diễn tài liệu bằng **cặp từ theo thứ tự** (ưu tiên từ gần nhau); tài liệu có đủ cặp từ chung vượt ngưỡng được coi là tương tự.

## Claims chính
3 claim độc lập / 21 claim.

> [!quote]- Claims độc lập (bản gốc tiếng Anh)
> 1. A method performed by one or more server devices, the method comprising: receiving, using one or more processors associated with the one or more server devices, a document; selecting, using one or more processors associated with the one or more server devices, terms from the document to form a plurality of term pairs, where the selection is biased such that terms that appear closer to each other in the document have a greater probability of being included in the plurality of term pairs than terms that appear further from each other in the document; creating, using one or more processors associated with the one or more server devices, a cluster that includes the plurality of term pairs, where creating the cluster includes: sampling a quantity of the plurality of term pairs, where the quantity is determined based on a length of the document; and determining, using one or more processors associated with the one or more server devices, whether another document is similar to the document by comparing pairs of terms from the other document with the plurality of term pairs of the cluster.
> 
> 11. A server comprising: a memory to store instructions; and a processor to execute the instructions to: receive a document; select terms from the document to form a plurality of term pairs, where the selection of terms is weighted such that terms that appear closer to each other in the document have a higher probability of being included in the plurality of term pairs than terms that appear farther from each other in the document; create a cluster that includes the plurality of term pairs, where the cluster is created by sampling at least one of the plurality of term pairs, and a quantity of the plurality of term pairs that is sampled is determined based on a length of the document; and determine whether an input document is similar to the document by comparing pairs of terms from the input document with the plurality of term pairs in the cluster for the document.
> 
> 18. A computer-readable memory device including instructions executable by at least one processor, the computer-readable memory device comprising: one or more instructions to receive a document; one or more instructions to select terms from the document to form a plurality of term pairs, where the selection is weighted such that terms that appear closer to each other in the document have a higher probability of being included in the plurality of term pairs than terms that appear farther from each other in the document; one or more instructions to create a cluster that includes the plurality of term pairs, where the one or more instructions to create the cluster include: one or more instructions to sample at least one of the plurality of term pairs, where a quantity of the plurality of term pairs that is sampled is determined based on a length of the document; and one or more instructions to determine that another document is similar to the document by comparing pairs of terms from the other document with the pairs of terms of the cluster.

## Liên hệ với leak
- **Google leak 2024:** _chưa đối chiếu_
- **Yandex 2023:** _chưa đối chiếu_

## Ý nghĩa SEO
- Nội dung viết lại nhẹ (đảo vài từ) vẫn bị phát hiện tương tự.

## Hành động audit
_Không có hành động audit trực tiếp._

## Patent liên quan
- [[US8423541B1 - Dùng kết quả được người dùng lưu lại làm phản hồi chất lượng]] _(Được trích dẫn bởi)_
- [[US9323827B2 - Xác định từ khóa chính cho các đoạn văn tương tự]] _(Được trích dẫn bởi)_

**Patent Google liên quan khác (chưa có trong vault):**
- [US7350187B1](https://patents.google.com/patent/US7350187B1/en) System and methods for automatically creating lists _(Trích dẫn)_
- [US7734627B1](https://patents.google.com/patent/US7734627B1/en) Document similarity detection _(Trích dẫn)_
- [US8122032B2](https://patents.google.com/patent/US8122032B2/en) Identifying and linking similar passages in a digital text corpus _(Được trích dẫn bởi)_
- [US7958136B1](https://patents.google.com/patent/US7958136B1/en) Systems and methods for identifying similar documents _(Được trích dẫn bởi)_
- [US8434134B2](https://patents.google.com/patent/US8434134B2/en) Providing an electronic document collection _(Được trích dẫn bởi)_
- [US8856640B1](https://patents.google.com/patent/US8856640B1/en) Method and apparatus for applying revision specific electronic signatures to an electronically stored document _(Được trích dẫn bởi)_
- [US11308037B2](https://patents.google.com/patent/US11308037B2/en) Automatic collaboration _(Được trích dẫn bởi)_
- [US9529916B1](https://patents.google.com/patent/US9529916B1/en) Managing documents based on access context _(Được trích dẫn bởi)_
- [US9384285B1](https://patents.google.com/patent/US9384285B1/en) Methods for identifying related documents _(Được trích dẫn bởi)_
- [US9495341B1](https://patents.google.com/patent/US9495341B1/en) Fact correction and completion during document drafting _(Được trích dẫn bởi)_
- [US9514113B1](https://patents.google.com/patent/US9514113B1/en) Methods for automatic footnote generation _(Được trích dẫn bởi)_
- [US9842113B1](https://patents.google.com/patent/US9842113B1/en) Context-based file selection _(Được trích dẫn bởi)_
- [US9529791B1](https://patents.google.com/patent/US9529791B1/en) Template and content aware document and template editing _(Được trích dẫn bởi)_
- [US9703763B1](https://patents.google.com/patent/US9703763B1/en) Automatic document citations by utilizing copied content for candidate sources _(Được trích dẫn bởi)_
- [US10997560B2](https://patents.google.com/patent/US10997560B2/en) Systems and methods to improve job posting structure and presentation _(Được trích dẫn bởi)_

## Toàn văn mô tả
> [!note]- Bấm để mở toàn văn (bản gốc tiếng Anh)
> This application is a continuation of U.S. patent application Ser. No. 10/462,690 filed Jun. 17, 2003, now U.S. Pat. No. 7,734,627, which is incorporated herein by reference.
> 
> 
> ## BACKGROUND OF THE INVENTION
> 
> 
> A. Field of the Invention
> 
> The present invention relates generally to document processing and, more particularly, to comparing documents to find similar or near duplicate documents.
> 
> B. Description of Related Art
> 
> There are a number of applications in which it may be desirable to be able to determine whether documents are similar or near duplicates of one another. Detecting spam email is one such application. Spam is unsolicited commercial email that is transmitted to multiple email accounts. To the receiver, spam is generally considered to be “junk email.”
> 
> In a typical spam episode, a single message is sent to thousands of email accounts. One known technique for removing spam from a network identifies spam based on its content. Thus, the network may be designed to recognize when many identical emails are being transmitted across the network. These identical emails can then be considered candidates for deletion before they arrive at the user email account.
> 
> In an effort to thwart automated spam detection and deletion, spam senders may slightly alter the text of each spam email by adding, removing, or replacing characters or superfluous sentences so as to defeat duplicate matching schemes. Thus, altered spam messages may be highly similar, but not identical, to one another.
> 
> Other applications for which similar document detection may be useful include detection of plagiarism and duplicate document detection in search engines.
> 
> Thus, there is a need in the art for techniques that can more accurately detect similar or near duplicate documents.
> 
> 
> ## SUMMARY OF THE INVENTION
> 
> 
> A document similarity detection technique consistent with the principles of the invention compares documents based on a set of relationships that define the relative order of terms within the documents.
> 
> One aspect of the invention is directed to a method for determining similarity of a document to a first set of documents. The method includes building a similarity model that defines a relative ordering of terms in the first set of documents, comparing an ordering of terms from the document to the similarity model, and generating similarity metrics that describe a degree of similarity between the document and the documents in the first set of documents based on the comparing of the ordering of terms.
> 
> Another aspect of the invention is directed to a similarity detection device. The device includes an inverted index that relates pairs of terms to clusters that contain the pairs of terms. The device further includes an enumeration component that generates pairs of terms for a received document and a pair lookup component that looks up the generated pairs in the inverted index to obtain clusters that contain the generated pairs. Further, the device includes a cluster selection component that selects those of the clusters obtained by the pair lookup component that are similar to the received document.
> 
> 
> ## BRIEF DESCRIPTION OF THE DRAWINGS
> 
> 
> The accompanying drawings, which are incorporated in and constitute a part of this specification, illustrate the invention and, together with the description, explain the invention. In the drawings,
> 
> FIG. 1 is a diagram illustrating an exemplary spam detection/elimination system implemented using concepts consistent with the invention;
> 
> FIG. 2 is a diagram illustrating an exemplary implementation of a similarity detection component in the context of a web search engine;
> 
> FIG. 3 is a block diagram conceptually illustrating operational components of the similarity detection component shown in FIGS. 1 and 2 when adding a new document to a similarity model;
> 
> FIG. 4 is a diagram illustrating a cluster for an exemplary document;
> 
> FIG. 5 is a diagram illustrating another exemplary cluster;
> 
> FIG. 6 is a diagram illustrating an inverted index formed consistent with an aspect of the invention;
> 
> FIG. 7 is a diagram illustrating an exemplary implementation of the table of pairs shown in FIG. 3;
> 
> FIG. 8 is a flow chart illustrating the creation of a cluster by cluster creation component of FIG. 3 consistent with an aspect of the invention;
> 
> FIG. 9 is a block diagram conceptually illustrating operational components of the similarity detection component when determining similarity of an input document consistent with an aspect of the invention; and
> 
> FIG. 10 is a flow chart illustrating the operation of the similarity detection component when determining similarity of an input document.
> 
> 
> ## DETAILED DESCRIPTION
> 
> 
> The following detailed description of the invention refers to the accompanying drawings. The detailed description does not limit the invention. Instead, the scope of the invention is defined by the appended claims and equivalents.
> 
> There are many ways in which documents may be determined to be similar, duplicates or near duplicates.
> 
> One document similarity detection technique is a “shingle” method. In the shingle method, a small consecutive sequence of words within a document is called a shingle. Two documents are said to be similar if they have several shingles in common. One problem with using the shingle method in adversarial situations, such as spam email, is that an adversary can defeat the matching algorithm by performing local swaps, replacements, or deletions of words within a sentence without changing the meaning of the sentence. As an example of this, consider the sentence: “The quick brown fox jumped over the lazy dog,” which can be transformed to: “The brown quick fox jumped over a lazy dog.” These two sentences do not share a single shingle of length four. Thus, the shingle method may classify these two sentences as not nearly identical when semantically the sentences are near duplicates of one another. Accordingly, automated programs that randomly alter words at the sentence level (such as substituting words with close synonyms, switching consecutive adjectives, and other local transformations) can defeat the shingle method.
> 
> Another document similarity detection technique is based on considering a document as a vector of terms. For example, the sentence: “The quick brown fox jumped over the lazy dog,” could be considered as a vector having eight entries—one for each unique word in the sentence. Term vector approaches known in the art, however, throw out ordering information in the document. Throwing out the ordering information can make it easier to get false matches when trying to find near duplicate documents because documents with the same words but entirely different word orders will be considered identical even though the documents may not be similar.
> 
> As an example of the possible problems of a term vector approach to detecting similar documents, consider the following three sentences: (1) When the defendant won the plaintiff hit the judge, (2) The judge hit the defendant when the plaintiff won, and (3) When the plaintiff hit the judge the defendant won. In a simple implementation of term vector similarity, all three sentences would have the same weighted term vectors and would be considered exact duplicates. For spam email duplicate detection, false matches are highly undesirable because it is important to users that legitimate emails are not deleted.
> 
> The detection of near duplicate or highly similar documents is also useful in many other applications, such as detection of plagiarism, duplicate document detection in search engines, etc. For web search engines, in particular, duplicate documents can often be undesirable. Storing duplicate documents effects both the accuracy and efficiency of the search engine. Further, retrieving duplicate documents in response to a user's query may lower the number of valid responses provided to the user, thus lowering the quality of the response set.
> 
> In one aspect of the present invention, a similarity detection component detects similar or near-duplicate documents based on pairs of ordered terms defined for the documents. A document may be characterized as a cluster containing a number of pairs of words. Another document having a relatively high number of pairs in common with the cluster is potentially a similar or near-duplicate of the document characterized by the cluster. Of course, the choice of pairs of ordered terms merely illustrates one embodiment of the present invention, and the invention is equally applicable to other sets of information, e.g. triplets of terms, quadruples, etc. Similarly, terms may refer to words, phrases, sentences, or other units of information as applicable, and may also refer to punctuation, tags, such as HTML tags, or other information. As used herein, a document is to be broadly interpreted to include any machine-readable and machine-storable work product. A document may be an email, a file, a combination of files, one or more files with embedded links to other files, etc. The files may be of any type, such as text, audio, image, video, etc. In the context of the Internet, a common document is a Web page. Web pages often include content and may include embedded information (such as meta information, hyperlinks, etc.) and/or embedded instructions (such as Javascript, etc.).
> 
> 
> ## SYSTEM OVERVIEW
> 
> 
> FIG. 1 is a diagram illustrating an exemplary spam detection/elimination system 100 implemented using concepts consistent with the invention. Spam detection/elimination may be performed by an internet service provider (ISP) 110 on behalf of its customers (users) 120-1 through 120-N (collectively referred to as users 120). ISP 110 may operate to connect users 120 to network 105. Network 105 may be, for example, a public network, such as the Internet. Email destined for one of users 120 is received by ISP 110 and forwarded to the appropriate user(s). Similarly, email transmitted from one of users 120 is received and forwarded by ISP 110 towards its final destination.
> 
> ISP 110 may include a spam filter 115, which may be implemented as a computer program stored on a computer-readable medium. Spam filter 115 may examine incoming email and delete messages that it determines to be spam. Spam filter 115 may make this determination based on results from a similarity detection component 117, which determines similarity between documents. If multiple emails transmitted through ISP 110 are determined by similarity detection component 117 to be highly similar or near duplicates of one another then spam filter 115 may consider these emails to be candidates for deletion. In some implementations, other features of the email messages, such as the transmitting domain name associated with the email messages, may be taken into account by spam filter 115 when determining whether to classify an email message as spam.
> 
> Another possible application of similarity detection component 117 is in the area of search engines. FIG. 2 is a diagram illustrating an exemplary implementation of similarity detection component 117 in the context of a web search engine. As shown in FIG. 2, a number of users 220-1 through 220-N (collectively referred to as users 220) may query a search engine 240 through a network 205. Network 205 may be a public network, such as the Internet.
> 
> Search engine 240 may be a program stored in a computer-readable medium that locates relevant information in response to search queries from users 220. In particular, users 220 send search queries to search engine 240, which responds by returning a list of relevant information to users 220. Typically, users 220 ask search engine 240 to locate web pages (i.e., documents) relating to a particular topic and stored at other devices or systems connected to network 205 (or another network). Search engine 240 may contain, or be coupled to, a database 245 that includes an index to the set of searchable web pages available though search engine 240.
> 
> Search engine 240 may use similarity detection component 117 in performing searches and/or in indexing the set of searchable web pages. Similar web pages detected by similarity detection component 117 may be used by search engine 240 in a number of ways. For example, highly similar web pages may not be separately stored in database 245. Alternatively, when returning results of a search to one of users 220, search engine 240 may use similarity detection component 117 to remove multiple references to nearly duplicate documents in the set of returned documents.
> 
> 
> ## SIMILARITY DETECTION COMPONENT
> 
> 
> The operation of similarity detection component 117 according to one embodiment of the invention will next be described in detail. In general, similarity detection component 117 may operate in one of two modes. In the first mode, similarity detection component 117 adds new documents to a similarity model. In a second mode, similarity detection component 117 receives a document and determines if the document is similar to any of the documents in the model.
> 
> FIG. 3 is a block diagram conceptually illustrating operational components of similarity detection component 117 when adding a new document to the similarity model (first mode). As shown, similarity detection component 117 includes a cluster creation component 301, an inverted index 302, and a table of pairs 303. The similarity model may be considered as including the inverted index 302 and the table of pairs 303. In some implementations, table of pairs 303 may be omitted.
> 
> Cluster creation component 301 creates clusters Ci that describe documents. A cluster may be created for each of a number of documents i. Each cluster, Ci, may include one or more pairs of words from document i. Stated more formally C i=(u 0 ,v 0),(u 1 ,v 1), . . . ,(u n ,v n), where u and v represent terms in document i in which u comes before v, but the terms do not have to be consecutive. Thus, the pair (u0, v0) represents that document i contains the term u0 and the term v0 and that u0 occurs before v0. Generally, another document is said to be similar if it includes pairs that match the pairs in Ci. In other words, the other document is similar if it tends to contain words in the same order as those that appear in document i.
> 
> FIG. 4 is a diagram illustrating a cluster for an exemplary document: “The quick brown fox jumped over the lazy dog.” As shown, the cluster created for this document includes four pairs 401-404. Pair 401 represents that the term “the” comes before the word “fox.” Pair 402 represents that the term “quick” comes before the term “jumped.” Pair 403 represents that the term “fox” comes before the term “lazy.” Pair 404 represents that the term “over” comes before the word “dog.” Another document is considered similar to this document if most of the constraints defined by pairs 401-404 are satisfied. Thus, the document “the brown quick fox jumped over a lazy dog” would be considered similar.
> 
> As another example of a cluster, consider the randomly sampled pairs shown in FIG. 5 for the document: “When the defendant won the plaintiff hit the judge.” For these pairs, the document “The judge hit the defendant when the plaintiff won” only matches one of the four pairs. Also, the document “When the plaintiff hit the judge the defendant won” only matches two of the pairs. Thus, neither of these two documents would be considered similar to the original.
> 
> Cluster creation component 301 may store each created pair for a cluster in inverted index 302. Inverted index 302 lists, for each pair, the clusters for which that pair was created. FIG. 6 is a diagram illustrating an exemplary portion of inverted index 302. Pairs 601-1 through 601-M are listed in inverted index 302. For each of pairs 601, index 302 includes a corresponding list 610-1 through 610-M of the clusters for which the particular pair 601 was created. For example, as shown in FIG. 6, pair 601-1 belongs to a number of clusters, including the clusters labeled C1 and C50.
> 
> In addition to maintaining inverted index 302, cluster creation component 301 may update table 303 when adding a new document to the similarity model. FIG. 7 is a diagram illustrating an exemplary implementation of table 303. As shown, table 303 may store the number of pairs that each cluster contains. Cluster creation component 301 may update table 303 whenever it creates a cluster for a document.
> 
> The creation of a cluster Ci by cluster creation component 301 will now be described in more detail with reference to the flow chart of FIG. 8. Cluster creation component 301 may begin by receiving the document from which it will generate a cluster, (Act 801), and then sampling the document to obtain the pairs for the cluster (Act 802).
> 
> Sampling the document to obtain the pairs can be performed using a number of different sampling techniques. The general goal is to create a useful representation of the document for the purpose of later determining similarity of the document to other documents. In one implementation, cluster creation component 301 randomly samples pairs of words from the input document. In one variation to this random sampling approach, the “random” sampling may be biased so that terms closer to each other have a greater chance of being included in a pair.
> 
> The number of pairs to sample for each cluster may be based on the length of the documents. Thus, clusters for longer documents may include more pairs.
> 
> Terms that have a lower frequency of occurrence in a corpus are often more relevant to the meaning of a document than more common terms. Accordingly, in some implementations, cluster creation component 301 may include a bias that is more likely to sample less frequently occurring terms. On the other hand, terms that are very rare, such as random sequences of symbols used by spammers to thwart similarity detection schemes, may not be included in the pairs of a cluster. Thus, in one embodiment cluster creation component 301 may be biased to sample rare words but to avoid very rare words. One of ordinary skill in the art will recognize that a precise meaning of “rare” and “very rare” may be obtained for a particular application through experimentation and/or observation of the frequency of occurrence of various terms in the corpus.
> 
> In addition to avoiding very rare terms, other terms, such as terms within HTML tags, may be ignored when sampling a document.
> 
> As another possible variation on document sampling, cluster creation component 301, instead of creating clusters that include entries that are pairs, may create clusters from triple, quadruple, or n-ary cluster entries. Such n-ary cluster entries may be referred to as n-ary vectors. For a cluster made of three term sets, for example, each entry would represent that the first term occurs before the second term, which both occur before the third term.
> 
> In another variation on the document sampling, cluster creation component 301 may bias the sampling such that pairs that occur in a pre-selected section of the document such as the upper middle section of the document are preferred. Email spammers may place “junk” terms near the bottom or beginning of a document in an attempt to thwart similarity detection. However, too many “junk” terms placed near the upper middle section of an email, such as in the first few paragraphs of the email, can make the email difficult to read and the reader may lose interest in the email if he/she has to scan past multiple lines of random text before seeing the true message. Accordingly, by sampling pairs from the upper middle section of a document, the clusters generated by cluster creation component 301 may be more resistant to spammer counter-measures. Cluster creation component 301, after sampling the pairs for a cluster, may update inverted index 302 to reflect the new cluster (Act 803). Cluster creation component 301 may also update table 303 by adding an entry in table 303 for the new cluster (Act 804). The entry may indicate the number of pairs that were sampled for the cluster.
> 
> The above discussion of similarity detection component 117 described the operation of similarity detection component 117 when adding a new document to the similarity model. In the second mode of operation, similarity detection component 117 determines similarity of an input document based on the similarity model defined by inverted index 302.
> 
> FIG. 9 is a block diagram conceptually illustrating operational components of similarity detection component 117 when determining similarity of an input document. As shown, in this mode of operation, similarity detection component 117 may include pair enumeration component 901, pair lookup component 902, cluster aggregation component 903, and cluster selection component 904.
> 
> Pair enumeration component 901 enumerates the pairs within the input document. In one implementation, pair enumeration component 901 may enumerate all possible pairs for the input document. In other implementations, the pairs may be enumerated within a fixed window size within the input document. In this implementation, for each word u within the input document, pair enumeration component 901 may enumerate all pairs of words that include u and that are within a fixed number of words (the window size) after u. The window may then be moved to the next word after u and the process repeated. For example, if a document includes the five consecutive words a, b, c, d, and e, and the window size is set to three, pair enumeration component 901 may begin by forming the pairs ab, ac, and ad. Pair enumeration component 901 may then move the sliding window to word b and enumerate the pairs bc, bd, and be. The window may then be moved again and this process repeated for each word in the document. Using a fixed window size can be beneficial for both accuracy and efficiency.
> 
> For each enumerated pair, pair lookup component 902 may look up the pair in inverted index 302 to determine the previously stored clusters that correspond to the pair. Cluster aggregation component 904 may keep track of each cluster that was looked-up for the input document, as well as the number of occurrences of that cluster. For example, a short input document, after enumeration by pair enumeration component 901, may be determined to contain 10 pairs. The 10 pairs may correspond to 30 different clusters in the similarity model. Some of the 30 different clusters may have been output multiple times from inverted index 302, which indicates that the input document has multiple pairs in common with the document corresponding to the cluster.
> 
> Cluster selection component 904 may select the most frequently occurring clusters stored by cluster aggregation component 903. These are the clusters that have the most pairs in common with the input document. The most frequently occurring clusters can be defined as an absolute number (e.g., the input document may contain 15 of the pairs in C10) or on a percentage basis (e.g., the input document may contain 90% of the pairs included in cluster C10) or by using any other measure.
> 
> The operation of similarity detection component 117 when determining similarity of an input document will now be described in more detail with reference to the flow chart shown in FIG. 10.
> 
> Similarity detection component 117 may begin by receiving a document for which a similarity determination is to be made (Act 1001). The received document will be called document B for purposes of this explanation. Pair enumeration component 901 may then enumerate pairs in document B (Act 1002). As previously mentioned, pair enumeration component may enumerate all possible pairs within document B or a subset of the possible pairs within document B. For example, all possible pairs of words (u,v) where u and v are within a fixed distance from each other in document B may be enumerated.
> 
> For each pair enumerated in Act 1002, pair lookup component 902 may use inverted index 302 to obtain the clusters that contain the pair (Act 1003). The total set of clusters, C(B), obtained by pair lookup component 902 may be maintained by cluster aggregation component 903 (Act 1004). Pair lookup component 902 may additionally tabulate the number of pairs that document B has in common with each cluster in C(B) (Act 1004).
> 
> Cluster selection component 904 may then use the information obtained in Act 1004 to determine a similarity metric that describes the similarity of document B to the documents that correspond to the clusters in C(B) (Act 1005). As mentioned, in one implementation, cluster selection component 904 may divide the number of pairs that document B has in common with a cluster to the number of pairs in that cluster to obtain the percentage of pairs that document B shares with the cluster. In another implementation, cluster selection component 904 may use the absolute number of pairs that document B has in common with the cluster as the similarity metric (e.g., B contains 15 of the pairs in cluster C10). Cluster selection component 904 may then compare the calculated similarity metrics for the clusters to a predetermined threshold value (Act 1006). Values above the threshold may indicate that the document B is a similar or near-duplicate document to the document corresponding to the cluster (Act 1007).
> 
> Longer documents are more likely to contain word pairs in the correct ordering. In some implementations, in order to further determine whether a document is to be considered a similar or near-duplicate document, additional factors, such as document length or a comparison of term vectors for the input document and the documents in the similarity model may also be performed.
> 
> Although the above discussion of duplicate or near duplicate document detection was primarily concerned with applications in spam email detection, other applications, such as plagiarism detection, are possible. In one plagiarism detection scheme, for example, a document A may be added to the similarity model by sampling pairs (or n-ary cluster entries), as previously described. Additionally, each paragraph or few paragraphs of document A (or other segments of document A) may be independently added to the similarity model as if it was an independent document. When adding paragraphs, the document from which the paragraph was excerpted from is also stored by the similarity model.
> 
> When a new document B is to be checked for plagiarism, the new document may be compared as a whole to determine if it is similar, and also compared as segments, such as paragraphs, to determine if any of the segments are similar. A final plagiarism judgment on document B can then be made based on one or more of a number of factors, including: (1) how many matching clusters document B has with other documents in the similarity model, (2) how many paragraphs (or other segments) in document B are similar to other paragraphs inserted in the similarity model, and (3) how many similar paragraphs document B has to each document A in the model. Thus, item (1) can be used to determine whether document B is a near copy of another document. Item (2) can be used to determine whether document B includes paragraphs from several other different documents. Item (3) can be used to determine whether document B includes multiple paragraphs from the same document.
> 
> 
> ## CONCLUSION
> 
> 
> The similarity detection described above can detect similar or near duplicate occurrences of a document and is relatively robust in the face of deliberate attempts to thwart its operation. The similarity detection component determines similarity of documents by characterizing the documents as clusters each made up of a set of term pairs. Another document that has a threshold level of term pairs in common with a cluster may be considered similar to the document characterized by the cluster.
> 
> It will be apparent to one of ordinary skill in the art that aspects of the invention, as described above, may be implemented in many different forms of software, firmware, and hardware in the implementations illustrated in the figures. The actual software code or specialized control hardware used to implement aspects consistent with the present invention is not limiting of the present invention. Thus, the operation and behavior of the aspects were described without reference to the specific software code—it being understood that a person of ordinary skill in the art would be able to design software and control hardware to implement the aspects based on the description herein.
> 
> The foregoing description of preferred embodiments of the present invention provides illustration and description, but is not intended to be exhaustive or to limit the invention to the precise form disclosed. Modifications and variations are possible in light of the above teachings or may be acquired from practice of the invention.
> 
> No element, act, or instruction used in the description of the present application should be construed as critical or essential to the invention unless explicitly described as such. Also, as used herein, the article “a” is intended to include one or more items. Where only one item is intended, the term “one” or similar language is used.
> 
> The scope of the invention is defined by the claims and their equivalents.
