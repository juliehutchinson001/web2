let Post = require('../models/post');
let User = require('../models/user.js');

module.exports = function(app) {
    app.post('/posts/:postId/comments', function(req, res) {
        // FIND THE PARENT POST
        Post.findById(req.params.postId).exec(function(err, post) {
            // UNSHIFT A NEW COMMENT
            post.comments.unshift(req.body);
            // SAVE THE PARENT
            post.save();

            // REDIRECT BACK TO THE PARENT POST#SHOW PAGE TO SEE OUR NEW COMMENT IS CREATE
            return res.redirect(`/posts/` + post._id);
        })
    });












    // app.post('/posts', function(req, res) {
    //     // add post to database
    //     let post = new Post(req.body);
    //     post.author = req.user._id

    //     post.save().then((post) => {
    //         return User.findById(req.user._id)
    //     }).then(user => {
    //         user.posts.unshift(post);
    //         user.save();
    //         res.redirect('/posts')
    //     }).catch((err) => {
    //         console.log(err.message)
    //     })
    // })
}