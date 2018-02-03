module.exports = function(app) {
    app.get("/posts/new", function(req, res) {
        res.render("new_form", { pageTitle: 'Reddit_Clone/New_Post' });
    })
}