let Comment = require('../models/comments');
let Post = require('../models/post');
let User = require('../models/user');


module.exports = function(app) {
    app.post('/posts/:postId/comments', function(req, res) {
        // INSTANTIATE INSTANCE OF MODEL
        const comment = new Comment(req.body)
        comment.author = req.user._id
        var userSaved;
        // SAVE INSTANCE OF Comment MODEL TO DB
        comment.save().then(function(comment) {
            console.log("1 ***************************************")
            return User.findById(req.user._id);
        }).then(function(user) {
            user.comments.unshift(comment);
            user.save()
            return Post.findById(req.params.postId)
        }).then(function(post) {
            post.comments.unshift(comment);
            return post.save();
        }).then(function(posts) {
            res.redirect(`/posts/${req.params.postId}`)
        }).catch(function(err) {
            console.log(err);
            res.redirect('/posts')
        })
    })
}