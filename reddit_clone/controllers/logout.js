module.exports = function(app) {
    app.get('/logout', function(req, res) {
        res.clearCookie('nToken');
        res.redirect('/posts');
    })
};