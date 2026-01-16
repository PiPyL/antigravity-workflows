---
description: Tìm kiếm và khám phá codebase nhanh
---

# /scout - Khám Phá Codebase

## Mục đích
Tìm kiếm nhanh files và code liên quan trong codebase.

## Workflow

### 1. Phân tích yêu cầu
- Hiểu user đang tìm gì
- Xác định keywords và patterns

### 2. Tìm kiếm files
// turbo
- Sử dụng `find_by_name` để tìm files theo tên/pattern
- Sử dụng `grep_search` để tìm code theo content

### 3. Phân tích cấu trúc
- Xem directory structure
// turbo
- Sử dụng `list_dir` để hiểu organization
- Identify main components

### 4. Đọc files quan trọng
- Entry points (index, main, app)
- Configuration files
- Related modules

### 5. Tổng hợp findings

```markdown
## Scout Report

### Search Query
[Mô tả những gì đang tìm]

### Relevant Files Found
| File | Purpose | Relevance |
|------|---------|-----------|
| path/to/file1 | [desc] | High |
| path/to/file2 | [desc] | Medium |

### Directory Structure
```
src/
├── components/
├── services/
└── utils/
```

### Key Findings
- [Finding 1]
- [Finding 2]

### Recommended Next Steps
- [Action 1]
- [Action 2]
```

## Nguyên tắc
- Nhanh và focused
- Chỉ tìm relevant files
- Không đọc toàn bộ codebase
