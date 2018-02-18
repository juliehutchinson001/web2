// LOGIN FORM
module.exports = app => {
    app.get('/login', (req, res) => {
        const currentUser = req.user;
        res.render('login', { pageTitle: 'Reddit Clone/log in', currentUser: currentUser });
    })
};