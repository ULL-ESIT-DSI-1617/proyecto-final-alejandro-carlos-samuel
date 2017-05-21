// load the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var findOrCreate = require('mongoose-findorcreate');

var uri = 'mongodb://heroku_bmtvx0gk:2l9utvibhnq3i5dm8i0roc3vr@ds055855.mlab.com:55855/heroku_bmtvx0gk';

mongoose.Promise = global.Promise

mongoose.connect(uri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {

// define the schema for our user model
var userSchema = mongoose.Schema({

  local: {
    email: String,
    password: String,
    name: String,
    surnames: String,
    username: String
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String,
    image: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String,
    image: String
  },
  github: {
    id: String,
    token: String,
    name: String,
    displayName: String,
    image: String
  }

});

// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

userSchema.plugin(findOrCreate);
// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
});