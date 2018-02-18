const cookieParser = require('cookie-parser');
const bodyPser = require('body-parser');
const jwt = require('jsonwebtoken');
let mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const app = express();
app.use(cookieParser());

const authentic = (req, res, next) => {
    console.log("authentication in progress");
    if (typeof req.cookies === 'undefined' || req.cookies.nToken === 'undefined' || req.cookies.nToken === null) {
        req.user = null;
    } else {
        var token = req.cookies.nToken;
        var decodedToken = jwt.decode(token, { complete: true }) || {};
        req.user = decodedToken.payload;
    }

    next()
}
app.use(authentic);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyPser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/27017');
mongoose.set('debug', true);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'))


require('./controllers/comments')(app)

require('./controllers/home')(app);

require('./controllers/login_form')(app)

require('./controllers/login')(app)

require('./controllers/logout')(app)

require('./controllers/post_new')(app);

require('./controllers/posts')(app);

require('./controllers/registration')(app)

require('./controllers/show')(app);

require('./controllers/signup')(app);

require('./controllers/subreddit')(app)

//running the instance of express
app.listen("3000", function() {
    console.log("listening on port 3000");
});


module.exports = { app };