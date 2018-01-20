let express = require("express");

let bodyPser = require("body-parser");

let app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyPser.urlencoded({ extended: true }));

app.get("/posts", (req, res) => {
    res.render("home", { pageTitle: 'Home Page' });
});

app.get("/posts/new", (req, res) => {
    res.render("new_form", { pageTitle: 'Home Page' });
})


app.listen("3000", () => {
    console.log("listening on port 3000");
});