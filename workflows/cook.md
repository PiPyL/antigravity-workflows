---
description: Triển khai tính năng từ đầu đến cuối với full workflow (plan → code → test → review)
---

# /cook - Triển Khai Tính Năng Đầy Đủ

## Mục đích
Full-stack workflow từ planning đến deployment. Áp dụng nguyên tắc **YAGNI**, **KISS**, **DRY**.

## Workflow

### Phase 1: Làm rõ yêu cầu
- Phân tích task được giao
- Nếu cần làm rõ, hỏi user (1 câu hỏi mỗi lần)
- Xác định acceptance criteria

### Phase 2: Nghiên cứu
- Scout codebase để tìm files liên quan
- Nghiên cứu patterns và conventions hiện có
- Xác định integration points

### Phase 3: Lập kế hoạch
- Tạo implementation plan trong `./plans/`
- Chia nhỏ thành các tasks cụ thể
- Xác định thứ tự thực hiện

### Phase 4: Triển khai
- Implement theo plan step-by-step
- Tuân thủ code standards trong `./docs/code-standards.md`
- Chạy type checking/compile sau mỗi thay đổi lớn
// turbo
- Sử dụng: `npm run lint` hoặc tương đương

### Phase 5: Testing
- Viết tests cho features mới
- Chạy full test suite
// turbo
- Sử dụng: `npm test` hoặc tương đương
- **KHÔNG** dùng mock data chỉ để pass tests
- Fix failed tests và chạy lại

### Phase 6: Review
- Self-review code quality
- Kiểm tra security vulnerabilities
- Kiểm tra performance concerns
- Đảm bảo readability và maintainability

### Phase 7: Documentation
- Cập nhật README nếu cần
- Cập nhật API docs
- Cập nhật codebase-summary

### Phase 8: Báo cáo
- Tổng hợp những gì đã làm
- Liệt kê các thay đổi chính
- Hỏi user muốn commit không

## Nguyên tắc quan trọng
- Không tạo file mới nếu có thể update file hiện có
- Giữ files dưới 200 dòng
- Không commit credentials hoặc secrets
- Dùng conventional commits
