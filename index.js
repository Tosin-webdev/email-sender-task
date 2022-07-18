const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env' });
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('hello');
});

// transporter object
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

// mail options
let mailOptions = {
  from: 'oladejit3@gmail.com',
  to: 'oladejit5@gmail.com',
  subject: 'Nodemailer Project',
  text: 'Hi from Tosin :)',
};

// send mail method

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    console.log('Error ' + err);
  } else {
    console.log('Email sent successfully');
  }
});

app.listen(PORT, () => {
  console.log('listening to port 3000');
});
