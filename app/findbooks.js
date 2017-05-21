var mongoose = require('mongoose');
// load up the user model
var Book = require('../app/models/books_db');
var ObjectId = mongoose.Schema.Types.ObjectId;

function findBooks(info2Find) {
  const queryResult = new Promise(function(resolve, reject) {
    Book.find({
      $or: [
        {
          author: info2Find
        },
        {
          title: info2Find
        },
        {
          isbn: info2Find
        },
        {
          publisher: info2Find
        }
      ]
    }, (err, book) => {
      if (err) {
        reject(err);
      }
      resolve(book);
    });
  });

  return queryResult;
}

module.exports = findBooks;