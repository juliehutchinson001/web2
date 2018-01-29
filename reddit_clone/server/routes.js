let app = require('./server');

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyPser.urlencoded({ extended: true }));

require('./controllers/home')(app);

require('./controllers/post_new')(app);

require('./controllers/posts')(app);

require('./controllers/show')(app);