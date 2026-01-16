---
description: Lập kế hoạch triển khai tính năng mới với nghiên cứu và phân tích chi tiết
---

# /plan - Lập Kế Hoạch Triển Khai

## Mục đích
Tạo implementation plan chi tiết trước khi bắt đầu coding. Áp dụng nguyên tắc **YAGNI**, **KISS**, **DRY**.

## Workflow

### 1. Phân tích yêu cầu
- Đọc và hiểu yêu cầu từ user
- Nếu chưa rõ, hỏi câu hỏi để làm rõ (1 câu hỏi mỗi lần)
- Xác định scope và constraints

### 2. Nghiên cứu codebase
- Sử dụng `grep_search` và `find_by_name` để tìm files liên quan
- Đọc code hiện có để hiểu architecture
- Xác định dependencies và integration points

### 3. Tạo implementation plan
- Tạo thư mục: `./plans/YYMMDD-HHmm-plan-name/`
- Tạo file `plan.md` với cấu trúc:
  ```
  # [Tên Plan]
  ## Overview
  ## Requirements  
  ## Architecture
  ## Implementation Steps
  ## TODO List (với checkboxes)
  ## Risk Assessment
  ## Success Criteria
  ```

### 4. Báo cáo
- Tổng hợp plan đã tạo
- Liệt kê các câu hỏi chưa giải quyết (nếu có)
- **KHÔNG** tự động implement

## Nguyên tắc quan trọng
- Ưu tiên giải pháp đơn giản nhất
- Tránh over-engineering
- Cân nhắc trade-offs và alternatives
- Đảm bảo token efficiency
