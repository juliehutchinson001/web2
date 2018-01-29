const aController = {};

module.exports = function(app) {
    app.get("./posts/new", (req, res) => {
        res.render("new_form", { pageTitle: 'Home Page' });
    })
}