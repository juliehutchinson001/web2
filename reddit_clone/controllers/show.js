let Post = require("../models/post");

module.exports = app => {
    app.get('/posts/:id', (req, res) => {
        let postId = req.params.id
        Post.findById(postId).then(post => {
            res.render('show', { post: post, pageTitle: '<%= post.title%>' })
        }).catch((err) => {
            console.log(err);
        })
    })
}