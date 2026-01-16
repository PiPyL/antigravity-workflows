# 📚 Hướng Dẫn Sử Dụng Workflows

Bộ **13 workflows** được thiết kế cho Antigravity IDE, giúp tự động hóa quy trình phát triển phần mềm.

---

## 🚀 Quick Start

```bash
# Trong Antigravity IDE, sử dụng slash commands:
/plan "mô tả tính năng"
/cook "task cần implement"
/fix "lỗi cần sửa"
```

---

## 📋 Danh Sách Workflows

### 🎯 Core Development

| Command | Mô tả | Khi nào dùng |
|---------|-------|--------------|
| `/plan` | Lập kế hoạch triển khai | Trước khi code tính năng mới |
| `/cook` | Triển khai đầy đủ | Khi cần implement từ A-Z |
| `/fix` | Sửa lỗi nhanh | Khi có bug cần fix |

### 🔍 Analysis & Quality

| Command | Mô tả | Khi nào dùng |
|---------|-------|--------------|
| `/debug` | Phân tích vấn đề | Khi cần tìm root cause |
| `/test` | Chạy tests | Kiểm tra code quality |
| `/review` | Review code | Trước khi merge/deploy |

### 📝 Utilities

| Command | Mô tả | Khi nào dùng |
|---------|-------|--------------|
| `/docs` | Cập nhật tài liệu | Sau khi code thay đổi |
| `/scout` | Tìm kiếm codebase | Khi cần locate files/code |
| `/ask` | Tư vấn kỹ thuật | Khi cần advice về architecture |
| `/git-commit` | Commit code | Khi sẵn sàng commit |

### 🔗 Redmine Integration

| Command | Mô tả | Khi nào dùng |
|---------|-------|--------------|
| `/redmine` | Xử lý task từ Redmine | Khi có task từ Redmine cần implement |
| `/finish-task` | Hoàn thành task + PR | Sau khi code xong, cần wrap-up |
| `/ai-batch` | Batch process AI tasks | Xử lý nhiều AI tasks tự động |


---

## 📖 Chi Tiết Từng Workflow

### `/plan` - Lập Kế Hoạch

**Mục đích:** Tạo implementation plan chi tiết trước khi coding.

**Sử dụng:**
```bash
/plan "tạo tính năng authentication với OAuth2"
/plan "refactor database layer sang PostgreSQL"
```

**Output:** File plan trong `./plans/YYMMDD-HHmm-plan-name/plan.md`

**Lưu ý:** Workflow này **KHÔNG** tự động implement.

---

### `/cook` - Triển Khai Đầy Đủ

**Mục đích:** Full-stack workflow từ planning đến hoàn thành.

**Sử dụng:**
```bash
/cook "implement REST API cho user management"
/cook "thêm dark mode cho ứng dụng"
```

**Quy trình:**
1. Làm rõ yêu cầu
2. Nghiên cứu codebase
3. Tạo plan
4. Implement code
5. Chạy tests
6. Review code
7. Cập nhật docs
8. Báo cáo kết quả

---

### `/fix` - Sửa Lỗi Nhanh

**Mục đích:** Fix bugs với mức độ phức tạp tự động detect.

**Sử dụng:**
```bash
/fix "lỗi null pointer khi login"
/fix "button không hoạt động trên mobile"
```

**Auto-detect:**
- **Simple:** Fix trực tiếp (1-2 files)
- **Complex:** Tạo mini-plan rồi fix

---

### `/debug` - Phân Tích Vấn Đề

**Mục đích:** Tìm root cause và đề xuất giải pháp.

**Sử dụng:**
```bash
/debug "ứng dụng chậm khi load data"
/debug "memory leak sau 1 giờ chạy"
```

**Output:** Report với root cause + proposed solutions

**Lưu ý:** Workflow này **KHÔNG** tự động implement.

---

### `/test` - Chạy Tests

**Mục đích:** Chạy test suite và phân tích kết quả.

**Sử dụng:**
```bash
/test
/test "chỉ chạy unit tests"
```

**Output:** Summary với pass/fail + coverage + recommendations

---

### `/review` - Review Code

**Mục đích:** Đánh giá code quality, security, performance.

**Sử dụng:**
```bash
/review
/review "review thay đổi gần đây"
```

**Kiểm tra:**
- ✅ Code quality & readability
- ✅ Type safety
- ✅ Security vulnerabilities (OWASP)
- ✅ Performance issues

---

### `/docs` - Cập Nhật Documentation

**Mục đích:** Sync documentation với code changes.

**Sử dụng:**
```bash
/docs
/docs "cập nhật API documentation"
```

**Cập nhật:** README, API docs, code comments, codebase summary

---

### `/scout` - Tìm Kiếm Codebase

**Mục đích:** Tìm files và code liên quan nhanh chóng.

**Sử dụng:**
```bash
/scout "tìm authentication code"
/scout "files liên quan đến payment"
```

**Output:** Report với relevant files + directory structure

---

### `/ask` - Tư Vấn Kỹ Thuật

**Mục đích:** Trả lời câu hỏi về architecture và best practices.

**Sử dụng:**
```bash
/ask "nên dùng REST hay GraphQL?"
/ask "cách tổ chức folder structure cho microservices"
```

**Output:** Analysis + multiple options với pros/cons

**Lưu ý:** Workflow này **KHÔNG** tự động implement.

---

### `/git-commit` - Commit Code

**Mục đích:** Commit với conventional commit format.

**Sử dụng:**
```bash
/git-commit
/git-commit "push luôn sau khi commit"
```

**Quy trình:**
1. Kiểm tra status
2. Chạy lint + tests
3. Tạo commit message chuẩn
4. Commit (và push nếu yêu cầu)

**Format:** `type(scope): description`

---

### `/redmine` - Xử Lý Task Từ Redmine

**Mục đích:** Full workflow xử lý task từ Redmine với tự động push và tạo PR.

**Sử dụng:**
```bash
/redmine
```

**Quy trình:**
1. Nhập API key (chỉ lần đầu, lưu vào `~/.gemini/redmine-config.json`)
2. Nhập Issue ID
3. Fetch thông tin issue
4. Planning (tích hợp `/scout` + `/plan`)
5. Implementation (tích hợp `/fix` hoặc `/cook`)
6. Verification (tích hợp `/test` + `/review`)
7. Git push (tích hợp `/git-commit`)
8. Cập nhật Redmine + Tạo PR

**Tính năng:**
- ✅ Lưu API key để dùng lại
- ✅ Auto-detect GitHub URL từ project
- ✅ Tự động cập nhật note lên Redmine
- ✅ Tự động tạo Pull Request

---

### `/finish-task` - Hoàn Thành Task & Tạo PR

**Mục đích:** Workflow tự động hóa việc hoàn thành task sau khi code xong.

**Sử dụng:**
```bash
/finish-task "12345"
```

**Quy trình:**
1. Kiểm tra authentication với Redmine
2. Fetch thông tin issue từ Redmine
3. Pre-flight check (git status, lint)
4. Git operations (branch, commit, push)
5. Tạo Pull Request với link Redmine
6. Update Redmine (gửi note + change status)

**Tính năng:**
- ✅ Auto-detect branch type từ Subject (feat/fix)
- ✅ Bi-directional linking (PR ↔ Redmine)
- ✅ Tự động update status → "Waiting Review"

---

### `/ai-batch` - Batch Xử Lý AI Tasks

**Mục đích:** Tự động lấy và xử lý tất cả tasks với Tracker "AI" từ Redmine.

**Sử dụng:**
```bash
/ai-batch
```

**Quy trình:**
1. Fetch all tasks với Tracker "AI"
2. Tạo status file theo dõi tiến độ
3. Xử lý từng task bằng /redmine workflow
4. Summary report và update status

**Tính năng:**
- ✅ Sequential processing
- ✅ Progress tracking với status file
- ✅ Final summary report

---

## 🎓 Nguyên Tắc Chung

Tất cả workflows tuân thủ:

| Nguyên tắc | Ý nghĩa |
|------------|---------|
| **YAGNI** | You Aren't Gonna Need It - Không over-engineer |
| **KISS** | Keep It Simple, Stupid - Ưu tiên đơn giản |
| **DRY** | Don't Repeat Yourself - Không duplicate code |

---

## 💡 Tips

1. **Bắt đầu với `/plan`** cho tính năng phức tạp
2. **Dùng `/cook`** khi muốn full automation
3. **Dùng `/ask`** trước khi quyết định architecture
4. **Luôn `/test`** trước khi `/git-commit`
5. **Chạy `/review`** trước khi deploy production
6. **Dùng `/finish-task`** sau khi code xong để wrap-up nhanh

---

## 📁 Cấu Trúc Thư Mục

```
.agent/workflows/
├── plan.md         # Lập kế hoạch
├── cook.md         # Triển khai đầy đủ
├── fix.md          # Sửa lỗi
├── debug.md        # Phân tích lỗi
├── test.md         # Chạy tests
├── review.md       # Review code
├── docs.md         # Cập nhật docs
├── scout.md        # Tìm kiếm
├── ask.md          # Tư vấn
├── git-commit.md   # Git commit
├── redmine.md      # Xử lý task Redmine
├── finish-task.md  # Hoàn thành task + PR
└── ai-batch.md     # Batch AI tasks
```

---

**Happy Coding! 🚀**

