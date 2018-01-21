let Post = require('../models/index')

module.exports = app => {
    app.find({}).then((posts) => {
        res.render('pageTitle', { posts })
    }).catch((err) => {
        console.log(err.message);
    })
}