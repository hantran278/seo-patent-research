# Nghiên cứu patent Google cho SEO

Kho nghiên cứu ~275 patent Google (lõi 262 patent) về crawl, index, xếp hạng, liên kết, tín hiệu người dùng, thực thể…, dịch và phân tích tiếng Việt. Là nguồn căn cứ cho công cụ audit [seo-patent-audit](https://github.com/hantran278/seo-patent-audit).

| Thư mục | Nội dung |
|---|---|
| `Google Patent Research/` | Kho Obsidian: `00 - Index.md`, 262 note patent lõi, hub 10 nhóm yếu tố xếp hạng, ghi chú audit |
| `patent-crawler/` | Script crawl Google Patents, gộp họ patent, sinh note Obsidian; dữ liệu thô `data/raw/`, bản dịch `data/vi/`, phân tích `data/analysis/` |

Mở thư mục repo này bằng Obsidian (**Open folder as vault**), bắt đầu từ `Google Patent Research/00 - Index.md`. Thư mục `patent-crawler/` được ẩn khỏi Obsidian.

## Workflow (Node.js ≥ 20)

```bash
cd patent-crawler
npm install
```

| Bước | Lệnh | Kết quả |
|---|---|---|
| Tìm patent theo chủ đề | `node discover.mjs` | `data/candidates.json` |
| Gộp họ patent | `node dedupe.mjs` | `data/families.json` |
| Chọn danh sách lõi | sửa `core.mjs` | 10 nhóm yếu tố |
| Crawl toàn văn | `node crawl.mjs 12` | `data/raw/<id>.json` (nghỉ 12 giây/patent; Google Patents trả 503 khi quá nhanh: đổi IP rồi chạy lại, patent đã có được bỏ qua) |
| Đề xuất patent liên quan | `node suggest.mjs` | `data/suggestions.txt` |
| Bản dịch còn thiếu | `node export-untranslated.mjs 25 0` | dịch rồi lưu vào `data/vi/batch-*.json` |
| Tài liệu đọc theo nhóm | `node dump-factor.mjs site-quality` | phân tích lưu vào `data/analysis/<nhóm>.json` |
| Sinh/cập nhật note | `node build-notes.mjs` | ghi vào `Google Patent Research/` (chỉ ghi đè note có `status: todo` hoặc `auto: true`; note đã sửa tay được giữ) |
| Cập nhật dữ liệu cho tool audit | trong repo seo-patent-audit: `node build-patents.mjs "<đường dẫn repo này>"` | `lib/patents.json` |

Lưu ý: patent mô tả khả năng kỹ thuật Google đã đăng ký, không phải bằng chứng Google đang dùng; phân tích kết hợp với tài liệu leak 2024 (Google) và 2023 (Yandex) chỉ mang tính tham khảo.
