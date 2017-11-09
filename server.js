var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var count =0;



// root route to render the index.ejs view
app.get('/', function(req, res) {
    count ++;
    console.log(count);

 res.render("index",{count: count});
})
app.post('/dub', function(req, res) {
    count ++;
    console.log(count);
    res.redirect("/");
})
app.post('/del', function(req, res) {
    count = 0;
    console.log(count);
    res.redirect("/");
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});