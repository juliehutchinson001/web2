const express = require('express')
const app = express()

//route extended to render home.handlebars
app.get('/', (req, res) => {
    res.render('home', { msg: 'Job Documentation Helper' });
})

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})

//initialize handlebars in project
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');