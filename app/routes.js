let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
    console.log("GET /");
    res.render('landing/landing.ejs');
});

router.get('/login', function(req, res) {
    console.log("GET /login");
    res.render('login/login.ejs');
});

router.get('/register', function(req, res) {
    console.log("GET /register");
    res.render('login/register.ejs');
});


module.exports = router;