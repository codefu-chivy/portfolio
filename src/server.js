const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const port = process.env.PORT || 8080;
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser")
const urlencodedParser = bodyParser.urlencoded({ extended: false })
require("dotenv").config({path: "./src/email.env"});

app.use(urlencodedParser);

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMUSER,
        pass: process.env.GMPASS
    }
});
app.set('views', path.resolve(__dirname + "/static/views"));
app.set("view engine", "ejs");

/*app.use(express.static("./static"));*/
app.use("/static", express.static(path.join(__dirname, 'static')));

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render("error", {
        message: err.message
    });
})

app.get("/", (req, res) => {
    res.render("about.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs")
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/projects", (req, res) => {
    res.render("projects.ejs");
});
app.post("/send", (req, res) => {
    let mailOptions = {
    from: "<" + req.body.address + ">",
    to: "chivy360@gmail.com", 
    subject: req.body.subject,
    text: req.body.message, 
    html: '<p>' + req.body.message + '</p>'
};
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.redirect("/about");
    });
});
app.get("*", (req, res) => {
    res.render("404.ejs");
})

app.listen(port, () => {
    console.log("Listening on port 3000");
});