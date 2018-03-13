const express = require('express');
const path = require('path');

//init app
const app = express()

//view engine setup
app.set('views', path_join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Set public folder
app.use(express.static(path.join(__dirname, 'public')));

//route extended to render home.ejs
app.get('/', (req, res) => {
    res.render('home', { msg: 'Job Documentation Helper' });
})

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})

//initialize handlebars in project
var exphbs = require('express-handlebars');


// OUR MOCK ARRAY OF PROJECTS
let reviews = [
    { title: "Great Review" },
    { title: "Next Review" }
]