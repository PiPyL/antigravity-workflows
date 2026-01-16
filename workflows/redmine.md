---
description: Xử lý task từ Redmine với full workflow (fetch → plan → code → test → push → PR)
---

# /redmine - Xử Lý Task Từ Redmine

## Mục đích
Full workflow xử lý task từ Redmine: fetch issue → planning → implementation → testing → push → create PR. **Hoàn toàn tự động** sau khi nhập Issue ID. Tích hợp logic từ `/scout`, `/plan`, `/fix`, `/test`, `/review`, `/git-commit`.

## Config File
API key được lưu tại: `~/.gemini/redmine-config.json`
```json
{
  "api_key": "[REDMINE_API_KEY]",
  "base_url": "https://project.flydinotech.com"
}
```

## Workflow

### Phase 1: Authentication
1. Kiểm tra file `~/.gemini/redmine-config.json`
   - Nếu **có**: Đọc `api_key` và `base_url` đã lưu
   - Nếu **không có**: Hỏi user nhập API key và base URL → Lưu vào config file

### Phase 2: Fetch Issue
2. Hỏi user nhập **Redmine Issue ID** (nếu chưa được cung cấp trong command)

3. Gọi API lấy thông tin issue:
// turbo
```bash
curl -s -H "X-Redmine-API-Key: [API_KEY]" "[BASE_URL]/issues/[ISSUE_ID].json?include=attachments" | python3 -c "import sys, json; data = json.load(sys.stdin); issue = data.get('issue', {}); print(f\"Subject: {issue.get('subject')}\"); print(f\"Description:\n{issue.get('description')}\"); print(\"\nAttachments:\"); [print(f\"- {a['filename']} (Download: {a['content_url']} | View: [BASE_URL]/attachments/{a['id']})\") for a in issue.get('attachments', [])]"
```

4. **TỰ ĐỘNG** phân tích thông tin task (Subject, Description) để hiểu yêu cầu.

### Phase 3: Planning (→ /scout + /plan)
5. **Scout codebase** (áp dụng logic `/scout`):
   - Sử dụng `grep_search` và `find_by_name` để tìm files liên quan
   - Xác định entry points và dependencies

6. **Lập kế hoạch** (áp dụng logic `/plan`):
   - Phân tích yêu cầu từ issue
   - Đề xuất giải pháp sửa lỗi/implement feature
   - Đánh giá rủi ro (Impact Analysis)
   - Liệt kê danh sách files sẽ sửa đổi

7. **TỰ ĐỘNG ĐÁNH GIÁ**: AI tự kiểm tra plan xem có hợp lý và đầy đủ không. Nếu hợp lý, chuyển ngay sang bước Execution.

### Phase 4: Execution (→ /fix hoặc /cook)
**Xác định độ phức tạp (Auto-detect):**

- **Simple** (1-2 files, logic đơn giản): Áp dụng logic `/fix`
- **Complex** (nhiều files, logic phức tạp): Áp dụng logic `/cook`

8. Thực hiện sửa code theo plan
9. Tuân thủ Coding Conventions của dự án
// turbo
10. Chạy lint check: `npm run lint` hoặc tương đương

### Phase 5: Verification (→ /test + /review)
// turbo
11. **Chạy tests** (áp dụng logic `/test`): `npm test` hoặc tests liên quan
12. **Regression test**: Đảm bảo không break logic cũ
13. **Self-review** (áp dụng logic `/review`):
    - Kiểm tra code quality
    - Xóa console.log, debug code thừa

14. **Tổng hợp báo cáo**:
```markdown
## Task Summary - Issue #[ISSUE_ID]
- ✅ Tests Passed
- ✅ Lint Passed
```

### Phase 6: Git & Push (→ /git-commit)
// turbo
15. Detect GitHub URL: `git remote get-url origin`

16. **TỰ ĐỘNG XÁC ĐỊNH Branch Info**:
    - `[type]`: Nếu Subject chứa "Bug", "Fix", "Error" -> `fix`. Ngược lại -> `feat`.
    - `[keyword]`: Lấy từ Subject, chuyển thành kebab-case, tối đa 5 từ. Ví dụ: Subject "Fix login error" -> `fix/login-error-[ISSUE_ID]`

17. Tạo và push branch:
// turbo
```bash
git checkout -b [type]/[keyword]-[ISSUE_ID]
git add .
git commit -m "Refs #[ISSUE_ID] [keyword]"
git push -u origin [type]/[keyword]-[ISSUE_ID]
```

### Phase 7: Redmine Update & PR
18. **Tạo Pull Request** và lấy link:
// turbo
```bash
pr_url=$(gh pr create --title "[type]/[keyword]-[ISSUE_ID]" --body "Refs: [BASE_URL]/issues/[ISSUE_ID]")
echo "Created PR: $pr_url"
```

19. **Gửi note lên Redmine** với PR link:
```bash
python3 -c "
import json, urllib.request, os
api_key = '[API_KEY]'
issue_id = '[ISSUE_ID]'
pr_url = '$pr_url' # Value from previous step
url = f'[BASE_URL]/issues/{issue_id}.json'
data = {'issue': {'notes': f'Pull Request: {pr_url}'}}
req = urllib.request.Request(url, data=json.dumps(data).encode(), headers={'Content-Type': 'application/json', 'X-Redmine-API-Key': api_key}, method='PUT')
print(f'Updating Issue {issue_id} with PR link...')
urllib.request.urlopen(req)
print('Done.')
"
```

20. Hiển thị **Final Summary**.

## Nguyên tắc quan trọng
- **ZERO Manual Intervention**: Trừ khi gặp lỗi nghiêm trọng, workflow tự động chạy thẳng từ A-Z.
- **Fail Fast**: Nếu test fail, tự động thử fix (tối đa 3 lần) trước khi báo lỗi.
- **Clean Code**: Luôn self-review trước khi commit.
