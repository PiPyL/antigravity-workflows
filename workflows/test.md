---
description: Chạy tests và phân tích kết quả chi tiết
---

# /test - Chạy và Phân Tích Tests

## Mục đích
Chạy test suite và phân tích kết quả. **KHÔNG** tự động implement fixes.

## Workflow

### 1. Xác định test environment
- Kiểm tra `package.json` cho test scripts
- Xác định test framework (Jest, Mocha, Vitest, etc.)
- Kiểm tra test configuration

### 2. Chạy tests
// turbo
- Chạy: `npm test` hoặc test command phù hợp
- Thu thập output đầy đủ

### 3. Phân tích kết quả

**Nếu tất cả PASS:**
- Báo cáo summary
- Hiển thị coverage nếu có

**Nếu có FAILURES:**
- Liệt kê từng test failed
- Phân tích nguyên nhân
- Xác định priority (critical/high/medium/low)

### 4. Coverage Analysis (nếu có)
- Tổng coverage percentage
- Files có coverage thấp
- Uncovered branches/lines quan trọng

### 5. Báo cáo

```markdown
## Test Results Summary
- Total: X tests
- Passed: Y ✅
- Failed: Z ❌
- Skipped: W ⏭️

## Coverage
- Statements: XX%
- Branches: XX%
- Functions: XX%
- Lines: XX%

## Failed Tests
### [Test Name 1]
- Error: ...
- Possible cause: ...
- Suggested fix: ...

## Recommendations
1. [Priority fixes]
2. [Coverage improvements]
```

## Nguyên tắc
- Chạy full suite trừ khi user chỉ định
- Phân tích chi tiết failures
- Đề xuất fixes nhưng KHÔNG tự implement
