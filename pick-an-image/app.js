const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Connect to db
mongoose.connect('mongodb://localhost/cmscart');

//init app
const app = express()

//view engine setup
app.set('views', path_join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Set public folder
app.use(express.static(path.join(__dirname, 'public')));

//route extended to render home.ejs
app.get('/', (req, res) => {
    res.render('home', { msg: 'Job Documentation Helper' });
})

//start the server
port = 3000;
app.listen(port, () => {
    console.log('App listening on port ' + port);
})
