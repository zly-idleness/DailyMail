# DailyMail


你可以使用 gpg 命令行工具来加密 todo.md 文件：

```sh
gpg --batch --yes --passphrase "YOUR_PASSPHRASE" --symmetric --cipher-algo AES256 todo.md

```

## ENV

需要添加以下 github secrets：
> WEATHER_API_KEY # 天气 API KEY
> EMAIL_PASSWORD # 邮箱密钥
> GPG_PASSPHRASE # 加密时使用的密码