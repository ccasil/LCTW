const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const creds = require("./config.js");
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// create reusable transporter object using the default SMTP transport
let transport = {
  host: "smtp.gmail.com",
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};
var transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

app.post("/send", (req, res, next) => {
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var phoneemail = req.body.phoneemail;
  // var contactvia = req.body.contactvia;
  var comments = req.body.comments;

  // var content = `name: ${name} \n email: ${email} \n message: ${content} `;

  // setup email data with unicode symbols
  let mailOptions = {
    from: `${first_name} ${last_name}`,
    to: "isyang1223@gmail.com",
    subject: `Add ${first_name} ${last_name} to Mailing List!`,
    text: `Name: ${first_name} ${last_name} \nEmail/Phone: ${phoneemail} \nMessage: ${comments}`
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, data) => {

    if (error) {
        return console.log(error);

    } else {
        console.log("Message sent!")
        
        res.json({ message: "success" });
    }
  });
});

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
