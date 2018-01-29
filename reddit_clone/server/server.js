let express = require("express");

let bodyPser = require("body-parser");

//Import the mongoose module
let mongoose = require('mongoose');


let app = express();

mongoose.connect('mongodb://localhost/27017');
mongoose.set('debug', true);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'))


module.exports = { app }