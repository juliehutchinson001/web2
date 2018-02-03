const User = require('../models/user');
const jwt = require('jsonwebtoken');

// LOGIN
module.exports = function(app) {
    app.post('/login', function(req, res) {
        const username = req.body.username;
        const password = req.body.password;
        // Find this user name
        User.findOne({ username }, 'username password').then(function(user) {
            if (!user) {
                // User not found
                return res.status(401).send({ message: 'Incorrect Username' });
            }
            // Check the password
            user.comparePassword(password, function(err, matching) {

                if (!matching) {
                    // Password does not match
                    return res.status(401).send({ message: "Incorrect Password" });
                }
                // Create a token
                const token = jwt.sign({ _id: user._id, username: user.username }, process.env.SECRET, { expiresIn: "90 days" });
                // Set a cookie and redirect to root
                res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
                res.redirect('/posts');
            });
        }).catch(function(err) {
            console.log(err);
        });
    })
};