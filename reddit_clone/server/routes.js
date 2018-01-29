let express = require("express");

const routes = express();

let bodyPser = require("body-parser");

routes.set("view engine", "ejs");

routes.use(express.static("public"));

routes.use(bodyPser.urlencoded({ extended: true }));

routes.get("./posts", function(req, res) {
    res.json({
        message: working
    });
});

require('./controllers/home')(routes);

require('./controllers/post_new')(routes);

require('./controllers/posts')(routes);

require('./controllers/show')(routes);

module.exports = { routes };