let express = require("express");

let bodyPser = require("body-parser");

//Import the mongoose module
let mongoose = require('mongoose');


let app = express();

mongoose.connect('mongodb://localhost/27017');
mongoose.set('debug', true);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'))

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyPser.urlencoded({ extended: true }));

require('./controllers/home')(app);

require('./controllers/post_new')(app);

require('./controllers/posts')(app);

require('./controllers/show')(app);

app.listen("3000", () => {
    console.log("listening on port 3000");
});