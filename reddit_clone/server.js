let express = require("express");

let bodyPser = require("body-parser");

let app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyPser.urlencoded({ extended: true }));

require('./controllers/home')(app);

require('./controllers/post_new')(app);

require('./controllers/posts')(app);

app.listen("3000", () => {
    console.log("listening on port 3000");
});