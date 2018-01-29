let express = require("express");

let bodyPser = require("body-parser");

let routes = require("./routes");

//Import the mongoose module
let mongoose = require('mongoose');


let app = express();

app.use('/posts', routes);

mongoose.connect('mongodb://localhost/27017');
mongoose.set('debug', true);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'))

module.exports = { app };