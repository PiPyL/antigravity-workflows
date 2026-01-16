---
description: Review code toàn diện (quality, security, performance)
---

# /review - Review Code

## Mục đích
Đánh giá code quality, security, và performance cho changes gần đây.

## Workflow

### 1. Xác định scope
- Kiểm tra recent changes với `git diff` hoặc `git log`
- Xác định files cần review
- Đọc related implementation plan nếu có

### 2. Code Quality Review
- **Readability**: Code dễ đọc và understand không?
- **Maintainability**: Dễ maintain và extend không?
- **DRY**: Có code duplication không?
- **KISS**: Có over-engineering không?
- **Naming**: Variables, functions có tên rõ ràng không?

### 3. Type Safety Review
- TypeScript types đầy đủ chưa?
- Có any types cần fix không?
- Error handling đúng cách chưa?

### 4. Security Review (OWASP Top 10)
- Input validation
- SQL injection risks
- XSS vulnerabilities
- Authentication/Authorization
- Sensitive data exposure
- Hardcoded secrets

### 5. Performance Review
- N+1 query issues
- Memory leaks potential
- Inefficient algorithms
- Unnecessary re-renders (frontend)

### 6. Báo cáo

```markdown
## Code Review Summary

### Scope
- Files reviewed: [list]
- Lines analyzed: ~XXX

### Overall Assessment
[Brief overview]

### Critical Issues 🔴
[Security vulnerabilities, breaking issues]

### High Priority 🟠
[Performance, type safety issues]

### Medium Priority 🟡
[Code quality, maintainability]

### Low Priority 🟢
[Style, minor optimizations]

### Positive Observations ✅
[Well-written code, good practices]

### Recommended Actions
1. [Prioritized fixes]
2. [Improvements]
```

## Nguyên tắc
- Be constructive, không nitpick
- Acknowledge good practices
- Prioritize issues by severity
