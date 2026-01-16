---
description: Trả lời câu hỏi kỹ thuật và kiến trúc (tư vấn, không implement)
---

# /ask - Tư Vấn Kỹ Thuật

## Mục đích
Trả lời câu hỏi về architecture, design decisions, best practices. **KHÔNG** implement.

## Workflow

### 1. Hiểu câu hỏi
- Phân tích câu hỏi kỹ thuật
- Xác định context cần thiết
- Hỏi clarification nếu cần

### 2. Nghiên cứu context
- Đọc related code trong codebase
- Xem docs hiện có (`./docs/`)
- Hiểu current architecture

### 3. Phân tích từ nhiều góc độ

**Systems Design:**
- Component boundaries
- Data flows
- Integration points

**Technology:**
- Framework/library choices
- Patterns áp dụng
- Industry best practices

**Scalability:**
- Performance implications
- Growth considerations
- Bottlenecks potential

**Risks:**
- Trade-offs
- Dependencies
- Technical debt

### 4. Đưa ra recommendations

```markdown
## Technical Consultation

### Question
[Restate câu hỏi]

### Context Analysis
[Hiểu biết về current state]

### Recommendations

#### Option 1: [Name]
**Approach:** [Description]
**Pros:**
- ...
**Cons:**
- ...
**Effort:** Low/Medium/High

#### Option 2: [Name]
**Approach:** [Description]
**Pros:**
- ...
**Cons:**
- ...
**Effort:** Low/Medium/High

### Recommended Approach
[Why option X is best]

### Implementation Hints
[High-level guidance, không chi tiết code]

### References
- [Relevant docs/articles]
```

## Nguyên tắc
- Tư vấn, KHÔNG implement
- Đưa ra nhiều options
- Honest về trade-offs
- Tuân thủ YAGNI, KISS, DRY
