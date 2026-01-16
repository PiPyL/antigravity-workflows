---
description: Sửa lỗi nhanh với auto-detect mức độ phức tạp
---

# /fix - Sửa Lỗi Nhanh

## Mục đích
Phân tích và sửa lỗi với mức độ phức tạp tự động detect.

## Workflow

### 1. Phân tích vấn đề
- Đọc mô tả lỗi từ user
- Thu thập thêm thông tin nếu cần
- Xác định scope ảnh hưởng

### 2. Xác định độ phức tạp

**Simple Fix** (1-2 files, logic đơn giản):
- Fix trực tiếp
- Chạy tests
- Báo cáo kết quả

**Complex Fix** (nhiều files, logic phức tạp):
- Tạo mini-plan
- Fix step-by-step
- Chạy tests từng bước
- Review changes

### 3. Thực hiện fix
- Tìm root cause
- Implement fix
- Giữ changes minimal và focused
// turbo
- Chạy: `npm run lint` để kiểm tra

### 4. Verify
// turbo
- Chạy: `npm test` hoặc tests liên quan
- Đảm bảo không break existing functionality
- Test edge cases

### 5. Báo cáo
- Tóm tắt vấn đề và giải pháp
- Liệt kê files đã thay đổi
- Hỏi user muốn commit không

## Nguyên tắc
- Minimal changes - chỉ fix đúng vấn đề
- Không refactor không liên quan
- Test kỹ trước khi báo cáo xong
