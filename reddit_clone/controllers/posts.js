module.exports = app => {
    app.post('/posts', (req, res) => {
        // add post to database

        res.redirect('/posts')
    })
}