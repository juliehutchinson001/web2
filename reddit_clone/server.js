let express = require("express");

let bodyPser = require("body-parser");

let app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyPser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.listen("3000", () => {
    console.log("listening on port 3000");
});