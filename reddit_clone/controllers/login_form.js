// LOGIN FORM
module.exports = function(app) {
    app.get('/login', function(req, res) {
        const thisUser = req.user;
        res.render('login', { pageTitle: 'Reddit_Clone/login', thisUser: thisUser });
    })
};