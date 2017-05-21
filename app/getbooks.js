var mongoose = require('mongoose');
// load up the user model
var Book = require('../app/models/books_db');
var ObjectId = mongoose.Schema.Types.ObjectId;

function getUserBooks(user) {
  const queryResult = new Promise(function(resolve, reject) {
    Book.find({
      owner: user._id.toString()
    }, (err, book) => {
      if (err) {
        reject(err);
      }
      resolve(book);
    });
  });

  return queryResult;
}

function getBookInfo(book) {
  const queryResult = new Promise(function(resolve, reject) {
    Book.find({
      _id: book
    }, (err, bookSearch) => {
      if (err) {
        reject(err);
      }
      resolve(bookSearch);
    });
  });

  return queryResult;
}

module.exports = {
  getUserBooks,
  getBookInfo
};