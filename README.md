# 🚀 Antigravity Workflows

Bộ **12 workflows** tự động hóa cho **Antigravity IDE**, giúp tăng tốc quy trình phát triển phần mềm.

## ⚡ Quick Start

```bash
# Cài đặt workflows vào project
npx @pipyl/antigravity-workflows init
```

Sau khi cài đặt, sử dụng các slash commands trong Antigravity IDE:

```bash
/plan     # Lập kế hoạch triển khai
/cook     # Triển khai tính năng đầy đủ
/fix      # Sửa lỗi nhanh
/debug    # Phân tích vấn đề  
/review   # Review code
/redmine  # Xử lý task từ Redmine
/ai-batch # Batch xử lý AI tasks
```

## 📦 Cài Đặt

### Cách 1: Dùng npx (Khuyến nghị)

```bash
# Di chuyển đến thư mục project
cd your-project

# Cài đặt workflows
npx @pipyl/antigravity-workflows init
```

### Cách 2: Install global

```bash
# Cài đặt global
npm install -g @pipyl/antigravity-workflows

# Sử dụng
@pipyl/antigravity-workflows init
```

### Cách 3: Install trong project

```bash
# Cài đặt như dev dependency
npm install --save-dev @pipyl/antigravity-workflows

# Chạy qua npx
npx @pipyl/antigravity-workflows init
```

## 🛠️ Commands

| Command | Mô tả |
|---------|-------|
| `init` | Cài đặt workflows vào `.agent/workflows/` |
| `list` | Xem danh sách workflows có sẵn |
| `update` | Cập nhật workflows (ghi đè tất cả) |
| `remove` | Xóa workflows khỏi project |
| `help` | Hiển thị trợ giúp |

## ⚙️ Options

| Option | Mô tả |
|--------|-------|
| `--force`, `-f` | Ghi đè workflows đã tồn tại |
| `--only=a,b,c` | Chỉ cài đặt các workflows cụ thể |
| `--dir=path` | Thư mục đích (mặc định: thư mục hiện tại) |

### Ví dụ

```bash
# Ghi đè workflows đã tồn tại
npx @pipyl/antigravity-workflows init --force

# Chỉ cài đặt một số workflows cụ thể
npx @pipyl/antigravity-workflows init --only=cook,plan,fix

# Xem danh sách workflows
npx @pipyl/antigravity-workflows list

# Cập nhật tất cả workflows
npx @pipyl/antigravity-workflows update
```

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
| `/ai-batch` | Batch xử lý AI tasks | Khi cần xử lý nhiều AI tasks từ Redmine |

## 🎓 Nguyên Tắc Chung

Tất cả workflows tuân thủ:

| Nguyên tắc | Ý nghĩa |
|------------|---------|
| **YAGNI** | You Aren't Gonna Need It - Không over-engineer |
| **KISS** | Keep It Simple, Stupid - Ưu tiên đơn giản |
| **DRY** | Don't Repeat Yourself - Không duplicate code |

## 💡 Tips

1. **Bắt đầu với `/plan`** cho tính năng phức tạp
2. **Dùng `/cook`** khi muốn full automation
3. **Dùng `/ask`** trước khi quyết định architecture
4. **Luôn `/test`** trước khi `/git-commit`
5. **Chạy `/review`** trước khi deploy production
6. **Dùng `/redmine`** khi có task từ Redmine cần implement tự động
7. **Dùng `/ai-batch`** để batch xử lý nhiều AI tasks cùng lúc

## 📁 Cấu Trúc Sau Khi Cài Đặt

```
your-project/
└── .agent/
    └── workflows/
        ├── ai-batch.md     # Batch xử lý AI tasks
        ├── ask.md
        ├── cook.md
        ├── debug.md
        ├── docs.md
        ├── fix.md
        ├── git-commit.md
        ├── plan.md
        ├── redmine.md      # Xử lý task từ Redmine
        ├── review.md
        ├── scout.md
        ├── test.md
        └── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

**Happy Coding! 🚀**
