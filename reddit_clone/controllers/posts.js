let Post = require('../models/post');
let User = require('../models/user.js');

module.exports = function(app) {
    app.post('/posts', function(req, res) {
        // add post to database
        let post = new Post(req.body);
        post.author = req.user._id

        post.save().then((post) => {
            return User.findById(req.user._id)
        }).then(user => {
            user.posts.unshift(post);
            user.save();
            res.redirect('/posts')
        }).catch((err) => {
            console.log(err.message)
        })
    })
}