let express = require("express");

let bodyPser = require("body-parser");

//Import the mongoose module
let mongoose = require('mongoose');

let app = express();

mongoose.connect('mongodb://localhost/27017', function() {
    console.log("connected to mongodb...");
});

mongoose.set('debug', true);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'))

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyPser.urlencoded({ extended: true }));

require('./controllers/home')(app);

require('./controllers/post_new')(app);

require('./controllers/posts')(app);

require('./controllers/show')(app);

//running the instance of express
app.listen("3000", function() {
    console.log("listening on port 3000");
});


module.exports = { app };