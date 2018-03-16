const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to db
mongoose.connect(config.database);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

//init app
const app = express()

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Set public folder
app.use(express.static(path.join(__dirname, 'public')));

//route extended to render home.ejs
app.get('/', (req, res) => {
    res.render('index', {title: 'Pick An Image' });
})

//start the server
port = 3000;
app.listen(port, () => {
    console.log('App listening on port ' + port);
})
