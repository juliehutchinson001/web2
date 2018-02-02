// CREATE Comment
module.exports = function(app) {
    app.post('/posts/:postId/comments', function(req, res) {
        // INSTANTIATE INSTANCE OF MODEL
        const comment = new Comment(req.body)

        // SAVE INSTANCE OF Comment MODEL TO DB
        comment.save()
            .then(function() {
                return Post.findById(req.params.postId);
            }).then((post) => {
                if (!post.comments) {
                    post.comments = [];
                }

                post.comments.unshift(comment);
                post.save()
                    .then(function(post) {
                        res.redirect("/posts");
                    });
            }).catch(function(err) {
                console.log(err.message)
            });
    });
};