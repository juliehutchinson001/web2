let Post = require('../models/post')

module.exports = app => {
    app.post('/posts', (req, res) => {
        // add post to database
        let post = new Post(req.body);

        post.save((err, post) => {
            // REDIRECT TO THE ROOT
            res.redirect('/posts');
        })
    })
}