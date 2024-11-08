const nodemailer = require('nodemailer');
const fs = require('fs');

const htmlContent = fs.readFileSync('daily_email.html', 'utf-8');

// 获取邮箱密码
const emailPassword = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'zly.idleness@gmail.com', // your email
        pass: emailPassword,
    },
});

const mailOptions = {
    from: 'zly.idleness@gmail.com', // your email
    to: 'zly_hit@outlook.com', // your email
    subject: 'Daily',
    html: htmlContent,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error sending email:', error);
    }
    console.log('Email sent:', info.response);
});
