let Post = require("../models/post");

module.exports = app => {
    app.get('/posts', (req, res) => {
        const currentUser = req.user;
        Post.find({}).then(function(posts) {
            res.render('home', { pageTitle: "Home Reddit Clone", posts: posts, currentUser: currentUser })
        }).catch(function(err) {
            console.log(err.message);
        });
    })
};