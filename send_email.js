const nodemailer = require('nodemailer');
const fs = require('fs');

const htmlContent = fs.readFileSync('daily_email.html', 'utf-8');

// 获取邮箱密码
const emailPassword = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'zly.idleness@gmail.com',
        pass: emailPassword,
    },
});

const mailOptions = {
    from: 'zly.idleness@gmail.com',
    to: 'zly_hit@outlook.com',
    subject: 'Daily TODOs and Updates',
    html: htmlContent,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error sending email:', error);
    }
    console.log('Email sent:', info.response);
});
