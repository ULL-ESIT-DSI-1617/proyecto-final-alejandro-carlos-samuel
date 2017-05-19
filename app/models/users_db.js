// load the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var findOrCreate = require('mongoose-findorcreate');

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
        username: String
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