var mongoose = require('mongoose');

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