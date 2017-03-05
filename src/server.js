const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");

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

app.get("/contact", (err, req, res) => {
    if (err) {
        return next(err);
    }
    res.render("contact");
});

app.get("/projects", (err, req, res) => {
    if (err) {
        return next(err);
    }
    res.render("projects");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});