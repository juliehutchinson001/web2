let express = require('express');

let app = express();

//running the instance of express
app.listen("3000", function() {
    console.log("listening on port 3000");
});

module.exports = { app };