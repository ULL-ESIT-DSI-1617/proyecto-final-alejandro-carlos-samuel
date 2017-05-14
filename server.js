var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/', function(req, res) {
  console.log("GET /");
  res.render('landing/landing.ejs');
});

app.get('/login', function(req, res) {
  console.log("GET /login");
  res.render('login/login.ejs');
});

app.get('/register', function(req, res) {
  console.log("GET /register");
  res.render('login/register.ejs');
});

var server = app.listen(4000, function () {
  var port = server.address().port;

  console.log('MyLIB ejecutandose en localhost:%s', port);
});