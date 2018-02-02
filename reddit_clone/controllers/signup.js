const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = function(app) {
    // SIGN UP POST
    app.post('/signup', function(req, res) {
        // Create User
        const user = new User(req.body);

        user.save().then(function(user) {
            var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "90 days" });
            res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
            res.redirect('/posts');
        }).catch(function(err) {
            console.log(err.message);
            res.redirect('/posts');
        });
    });
}