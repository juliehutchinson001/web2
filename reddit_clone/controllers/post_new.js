const aController = {};

module.exports = function(app) {
    app.get("/posts/new", function(req, res) {
        res.render("new_form", { pageTitle: 'New Post' });
    })
}