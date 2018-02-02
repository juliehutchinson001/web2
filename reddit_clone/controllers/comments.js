// CREATE Comment
module.exports = function(app) {
    app.post('/posts/:postId/comments', function(req, res) {
        // INSTANTIATE INSTANCE OF MODEL
        const comment = new Comment(req.body)

        // SAVE INSTANCE OF Comment MODEL TO DB
        comment.save().then(function(comment) {
            // REDIRECT TO THE ROOT
            return res.redirect('/posts')
        }).catch(function(err) {
            console.log(err);
        })
    })
}