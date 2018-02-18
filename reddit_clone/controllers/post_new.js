module.exports = app => {
    app.get('/posts/new', (req, res) => {
        const currentUser = req.user;
        if (currentUser) {
            res.render('new', { pageTitle: 'Reddit Clone/new post', currentUser: currentUser })
        } else {
            return res.status(401).send({ message: 'UNAUTHORIZED' }); // Unauthorized
        }
    })
}