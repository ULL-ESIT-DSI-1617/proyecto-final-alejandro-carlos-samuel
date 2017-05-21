let express = require('express');
let router = express.Router();
let createBook = require('./createbooks.js');
let getBooks = require('./getbooks.js');
let getUserBooks = getBooks.getUserBooks;
let getBookInfo = getBooks.getBookInfo;
let deleteBook = require('./deletebooks.js');


module.exports = function(passport) {

    // normal routes ===============================================================

    // LANDING =========================
    router.get('/', function(req, res) {
        res.render('landing/landing.ejs');
    });

    // PROFILE SECTION =========================
    router.get('/profile', isLoggedIn, function(req, res) {
        res.render('content/profile.ejs', {
            user: req.user
        });
    });

    // LOGOUT ==============================
    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // BOOKS ===============================
    router.get('/content', isLoggedIn, function(req, res) {
        //let myBooks = getBooks(req.user);
        //console.log(myBooks);
        getUserBooks(req.user)
            .then((response) => {
                //console.log(response);
                res.render('content/content.ejs', {
                    user: req.user,
                    book: response
                });
            })
            .catch((response) => {
                console.log("Error al buscar libros");
            });

    });

    router.get('/content/:id', isLoggedIn, function(req, res) {
        getBookInfo(req.params.id)
            .then((response) => {
                //console.log(response);
                res.render('content/bookinfo.ejs', {
                    user: req.user,
                    book: response
                });
            })
            .catch((response) => {
                console.log("Error al mostrar libros");
            });

    });

    router.post('/content', isLoggedIn, function(req, res) {
        createBook(req.body, req.user);
        res.redirect('/content');
    });

    // FIND ===============================
    router.get('/find', isLoggedIn, function(req, res) {
        res.render('content/find.ejs', {
            user: req.user
        });
    });

    //DELETE =============
    
    router.get('/delete/:id', isLoggedIn, function(req, res) {
        deleteBook(req.params.id)
            .then((response) => {
                console.log("Libro eliminado correctamente.");
                res.redirect('/content');
            })
            .catch((response) => {
                console.log("Error al mostrar libros");
            });

    });


    // =============================================================================
    // AUTHENTICATE (FIRST LOGIN) ==================================================
    // =============================================================================

    // locally --------------------------------
    // LOGIN ===============================
    // show the login form
    router.get('/login', function(req, res) {
        res.render('login/login.ejs', {
            message: req.flash('loginMessage')
        });
    });

    // process the login form
    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // SIGNUP =================================
    // show the signup form
    router.get('/register', function(req, res) {
        res.render('login/register.ejs', {
            message: req.flash('signupMessage')
        });
    });

    // process the signup form
    router.post('/register', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/register', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // twitter --------------------------------

    // send to twitter to do the authentication
    router.get('/auth/twitter', passport.authenticate('twitter', {
        scope: 'email'
    }));

    // handle the callback after twitter has authenticated the user
    router.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));


    // google ---------------------------------

    // send to google to do the authentication
    router.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    // the callback after google has authenticated the user
    router.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

    // github ---------------------------------

    // send to github to do the authentication
    router.get('/auth/github', passport.authenticate('github'));

    // the callback after github has authorized the user
    router.get('/auth/github/callback',
        //passport.authenticate
        passport.authenticate('github', {
            failureRedirect: '/login'
        }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/profile');
        });

    return router;
};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}