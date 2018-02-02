let Post = require("../models/post");

module.exports = app => {
    app.get("/posts", function(req, res) {
        Post.find({}).then(function(posts) {
            res.render('home', { pageTitle: "Home Reddit Clone", posts: posts });
        }).catch(function(err) {
            console.log(err.message);
        });
    })
};