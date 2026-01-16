---
description: Commit và push code theo conventional commits format
---

# /git-commit - Git Commit & Push

## Mục đích
Tạo clean commits theo conventional commit format và push code.

## Workflow

### 1. Kiểm tra status
// turbo
- Chạy: `git status`
- Xem files changed
- Xác định những gì cần commit

### 2. Pre-commit checks
// turbo
- Chạy lint: `npm run lint` hoặc tương đương
// turbo
- Chạy tests: `npm test` hoặc tương đương
- Fix issues nếu có

### 3. Stage files
- Stage relevant files
- Không commit:
  - `.env` files
  - Credentials/secrets
  - Build artifacts
  - node_modules

### 4. Tạo commit message

**Conventional Commit Format:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting (no code change)
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

**Examples:**
```
feat(auth): add login with Google OAuth
fix(api): handle null response in user endpoint
docs(readme): update installation instructions
```

### 5. Commit
// turbo
- Chạy: `git commit -m "<message>"`

### 6. Push (nếu được yêu cầu)
- Confirm với user trước khi push
- Chạy: `git push origin <branch>`

### 7. Báo cáo
```markdown
## Git Commit Summary

### Committed Changes
- [file1]: [change description]
- [file2]: [change description]

### Commit Message
```
feat(scope): description
```

### Status
- ✅ Committed successfully
- ✅ Pushed to origin/main (nếu push)
```

## Nguyên tắc
- Clean, focused commits
- Không commit secrets
- Conventional commit format
- Confirm trước khi push
