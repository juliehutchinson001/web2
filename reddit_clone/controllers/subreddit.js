let Post = require('../models/post');

module.exports = function(app) {
    app.get('/n/:subreddit', function(req, res) {
        const thisUser = req.user;
        Post.find({ subreddit: req.params.subreddit }).then(function(posts) {
            res.render('index', { posts: posts, pageTitle: req.params.subreddit, thisUser: thisUser })
        }).catch(function(err) {
            console.log(err)
        })
    })
}