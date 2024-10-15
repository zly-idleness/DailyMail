const nodemailer = require('nodemailer');
const fs = require('fs');

const htmlContent = fs.readFileSync('daily_email.html', 'utf-8');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_email_password',
    },
});

const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'your_email@gmail.com',
    subject: 'Daily TODOs and Updates',
    html: htmlContent,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error sending email:', error);
    }
    console.log('Email sent:', info.response);
});
