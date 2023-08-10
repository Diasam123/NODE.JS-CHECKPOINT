// email-sender.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'your-email-service',
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password',
  },
});

const mailOptions = {
  from: 'your-email@example.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'This is a test email from Node.js',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
