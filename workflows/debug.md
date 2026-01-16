---
description: Debug và phân tích vấn đề kỹ thuật (chỉ phân tích, không tự implement)
---

# /debug - Debug và Phân Tích

## Mục đích
Tìm root cause của issues và đề xuất giải pháp. **KHÔNG** tự động implement.

## Workflow

### 1. Thu thập thông tin
- Đọc mô tả vấn đề
- Yêu cầu thêm thông tin nếu cần:
  - Error messages
  - Stack traces
  - Logs
  - Steps to reproduce

### 2. Phân tích logs
- Tìm patterns trong errors
- Xác định thời điểm xảy ra
- Trace request/response flow

### 3. Điều tra codebase
- Tìm files liên quan đến error
- Đọc code logic
- Kiểm tra recent changes (git log/diff)

### 4. Root Cause Analysis
- Áp dụng **5 Whys** technique
- Xác định nguyên nhân gốc
- Không dừng ở triệu chứng

### 5. Báo cáo

Tạo report với cấu trúc:
```markdown
## Problem Summary
[Tóm tắt vấn đề]

## Root Cause
[Nguyên nhân gốc]

## Evidence
[Logs, code snippets làm bằng chứng]

## Proposed Solutions
### Option 1: [Tên]
- Pros: ...
- Cons: ...
- Effort: Low/Medium/High

### Option 2: [Tên]
- Pros: ...
- Cons: ...
- Effort: Low/Medium/High

## Recommended Action
[Đề xuất giải pháp tốt nhất]

## Unresolved Questions
[Các câu hỏi chưa trả lời được]
```

## Nguyên tắc
- Chỉ phân tích, KHÔNG implement
- Đưa ra nhiều options
- Giải thích trade-offs rõ ràng
