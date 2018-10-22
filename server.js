const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const creds = require("./config.js");
//const mongoose = require("mongoose");
const passport = require("passport");

const users = require("./routes/api/users");
const app = express();


app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// DB Config
/*const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
*/

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);

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

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post("/sendcontact", (req, res, next) => {
  console.log("at app.post!!!!!!!!!!!!!!!!!!!")
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var phone = req.body.phone;
  var email = req.body.email;
  var comments = req.body.comments;
  // setup email data with unicode symbols
    let mailOptions = { from: `${first_name} ${last_name}`, to: "info@lovechangingtheworld.org", subject: `LCTW WEBSITE Add ${first_name} ${last_name} to Mailing List!`, text: `Name: ${first_name} ${last_name} \nPhone: ${phone} \nEmail: ${email} \nMessage: ${comments}` };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, data) => {
    console.log("at sendMAIL!!!!!!!!!!!!!!!!!!!");
    if (error) {
        return console.log(error);
    } else {
        console.log("Message sent!")
        res.json({ msg: "success" });
    }
  });
});

app.post("/sendsponsor", (req, res, next) => {
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var phone = req.body.phone;
  var email = req.body.email;
  var organization = req.body.organization;
  let mailOptions = { from: `${first_name} ${last_name}`, to: "info@lovechangingtheworld.org", subject: `LCTW WEBSITE ${first_name} ${last_name} wants to become a sponsor!`, text: `Name: ${first_name} ${last_name} \nPhone: ${phone} \nEmail: ${email} \nOrganization: ${organization}` };

  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      return console.log(error);
    } else {
      console.log("Message sent!")
      res.json({ msg: "success" });
    }
  });
});


app.post("/sendvolunteer", (req, res, next) => {
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var phone = req.body.phone;
  var email = req.body.email;
  var experience = req.body.experience;
  let mailOptions = { from: `${first_name} ${last_name}`, to: "info@lovechangingtheworld.org", subject: `LCTW WEBSITE ${first_name} ${last_name} wants to become a volunteer!`, text: `Name: ${first_name} ${last_name} \nPhone: ${phone} \nEmail: ${email} \nExperience: ${experience}` };

  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      return console.log(error);
    } else {
      console.log("Message sent!");
      res.json({ msg: "success" });
    }
  });
});

app.post("/sendhelp", (req, res, next) => {
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var phone = req.body.phone;
  var email = req.body.email;
  var birthday = req.body.birthday;
  var location = req.body.location;
  var genderage = req.body.genderage;
  var shirt = req.body.shirt;
  var pant = req.body.pant;
  var sock = req.body.sock;
  var underwear = req.body.underwear;
  let mailOptions = { from: `${first_name} ${last_name}`, to: "info@lovechangingtheworld.org", subject: `LCTW WEBSITE ${first_name} ${last_name} needs supplies!`, text: `Name: ${first_name} ${last_name} \nPhone: ${phone} \nEmail: ${email} \nBirthday: ${birthday} \nArea: ${location} \nGender/Age: ${genderage} \nShirt: ${shirt} \nPant: ${pant} \nSock: ${sock} \nUnderwear: ${underwear}` };

  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      return console.log(error);
    } else {
      console.log("Message sent!");
      res.json({ msg: "success" });
    }
  });
});



app.post("/sendfundraiser", (req, res, next) => {
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var phone = req.body.phone;
  var email = req.body.email;
  var type = req.body.type;
  var event = req.body.event;
  var activities = req.body.activities;
  // setup email data with unicode symbols
  let mailOptions = { from: `${first_name} ${last_name}`, to: "info@lovechangingtheworld.org", subject: `LCTW WEBSITE ${first_name} ${last_name} wants to hold a fundraiser!`, text: `Name: ${first_name} ${last_name} \nPhone: ${phone} \nEmail: ${email} \nType: ${type} \nEvent: ${event} \nActivities: ${activities}` };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      return console.log(error);
    } else {
      console.log("Message sent!")
      res.json({ msg: "success" });
    }
  });
});
app.get("*", (req, res, next) =>{
  console.log("REDIRECT***********************************");
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
