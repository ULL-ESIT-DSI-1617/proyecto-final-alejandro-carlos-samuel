let express = require('express');
let app = express();
let path = require('path');
let mongoose = require('mongoose');
let passport = require('passport');
let flash = require('connect-flash');

let morgan = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let session = require('express-session');

mongoose.connect('mongodb://localhost/mylib'); //creamos la conexión con la base de datos

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.set('port', process.env.PORT || 3000);
require('./config/passport')(passport); // pass passport for configuration
app.use(express.static('public'));
app.use(morgan('dev')); //ver informacion de las peticiones en la consola
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({
    extended: true
}));

// required for passport
app.use(session({
    secret: 'supersecret', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


require('./app/routes.js')(app, passport); // las rutas

let port = process.env.PORT || 3000;
var server = app.listen(port, function() {

    console.log('MyLIB ejecutandose en localhost:%s', port);
});