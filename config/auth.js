module.exports = {

    'facebookAuth': {
        'clientID': 'your-secret-clientID-here', // your App ID
        'clientSecret': 'your-client-secret-here', // your App Secret
        'callbackURL': 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'twitterAuth': {
        'consumerKey': 'f7Sgyr6ZJhvaFfrRj1dqYFpNE',
        'consumerSecret': '30zNfwnAYtGCOH6YRbF99YcCk86KndCXFqIUflTZ3opUlCGDTF',
        'callbackURL': 'http://127.0.0.1:3000/auth/twitter/callback'
    },

    'googleAuth': {
        'clientID': 'your-secret-clientID-here',
        'clientSecret': 'your-client-secret-here',
        'callbackURL': 'http://127.0.0.1:3000/auth/google/callback'
    },
    'githubAuth': {
        'clientID': '67ba15200f38093705ca',
        'clientSecret': '8d428eabc634fc6c6816c7f55bd7ecc7dcfd5cf0',
        'callbackURL': "http://127.0.0.1:3000/auth/github/callback"
    },

};