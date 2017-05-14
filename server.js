var express = require('express');
var app = express();
var path = require('path');
let router = require('./app/routes')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.set('port', process.env.PORT || 3000);

app.use(express.static('public'));
app.use('/', router);

let port = process.env.PORT || 3000;
var server = app.listen(port, function() {

    console.log('MyLIB ejecutandose en localhost:%s', port);
});