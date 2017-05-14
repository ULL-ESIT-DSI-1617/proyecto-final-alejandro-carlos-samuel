let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
    res.render('landing/landing.ejs');
});

router.get('/login', function(req, res) {
    res.render('login/login.ejs');
});

router.get('/register', function(req, res) {
    res.render('login/register.ejs');
});


module.exports = router;