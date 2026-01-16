---
description: Cập nhật documentation theo code changes
---

# /docs - Cập Nhật Documentation

## Mục đích
Đồng bộ documentation với code changes gần đây.

## Workflow

### 1. Phân tích changes
- Xem recent commits/changes
- Xác định features mới hoặc thay đổi
- Liệt kê APIs mới/thay đổi

### 2. Kiểm tra docs hiện có
- `./README.md` - Project overview
- `./docs/` directory nếu có
- Inline code comments
- API documentation

### 3. Cập nhật từng loại

**README.md:**
- Features list
- Installation steps
- Usage examples
- Configuration options

**API Docs:**
- New endpoints
- Changed parameters
- Response formats
- Error codes

**Code Comments:**
- Complex logic explanation
- Function/class documentation
- TODO cleanup

### 4. Tạo/Cập nhật codebase summary
- Project structure
- Key components
- Dependencies
- Architecture overview

### 5. Verify
- Links hoạt động
- Code examples chạy được
- No outdated information

### 6. Báo cáo
```markdown
## Documentation Update Summary

### Files Updated
- [file1.md]: [what changed]
- [file2.md]: [what changed]

### New Documentation
- [new-file.md]: [purpose]

### Removed/Deprecated
- [old-content]: [reason]
```

## Nguyên tắc
- Docs phải sync với code
- Ví dụ phải chạy được
- Ngắn gọn, rõ ràng
