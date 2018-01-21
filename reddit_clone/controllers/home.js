let Post = require("../models/post");

module.exports = app => {
    app.get("/posts", (req, res) => {
        Post.find({}).then((posts) => {
            res.render('home', { pageTitle: "Home Reddit Clone", posts: posts });
        }).catch((err) => {
            console.log(err.message);
        });
    })
};