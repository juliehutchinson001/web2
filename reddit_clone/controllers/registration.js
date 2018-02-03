module.exports = function(app) {
    app.get('/signup', function(req, res) {
        const thisUser = req.user;
        res.render('signup', { pageTitle: 'Reddit_Clone/SignUp', thisUser: thisUser })
    })
}