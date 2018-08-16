const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const creds = require("./config.js");
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}));

app.post('/send', (req, res) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: creds.USER,
            pass: creds.PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: creds.USER, // sender address
        to: 'someone@test.com', // list of receivers
        subject: 'A Postcard For You!', // Subject line
        text: 'Postcard', // plain text body
        html: '<b>From my app</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
});

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});