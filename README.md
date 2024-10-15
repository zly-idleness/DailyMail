# DailyMail
你可以使用 gpg 命令行工具来加密 todo.md 文件：
```sh
gpg --batch --yes --passphrase "YOUR_PASSPHRASE" --symmetric --cipher-algo AES256 todo.md

```