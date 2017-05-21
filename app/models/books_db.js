var mongoose = require('mongoose');

var uri = 'mongodb://heroku_bmtvx0gk:2l9utvibhnq3i5dm8i0roc3vr@ds055855.mlab.com:55855/heroku_bmtvx0gk';

mongoose.Promise = global.Promise

mongoose.connect(uri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {

// define the schema for our user model
var bookSchema = mongoose.Schema({

  title: String,
  author: String,
  publisher: String,
  isbn: String,
  price: Number,
  genre: String,
  pages: Number,
  buyDate: {
    type: Date,
    default: Date.now
  },
  img: String,
  loan: {
    state: Boolean,
    loanDate: Date,
    borrower: String
  },
  read: Boolean,
  owner: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Book', bookSchema);
});