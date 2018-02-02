const User = require('../models/user');

module.exports = function(app) {
    app.get('/register', (req, res) => {
        res.render('register');
    });

    app.post('/register', function(req, res) {
        const user = new User(req.body);

        user.save().then(function(user) {
            res.redirect('/')
        }).catch(function(err) {
            console.log(err.message);
        });
    });
}