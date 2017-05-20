var mongoose = require('mongoose');
// load up the user model
var Book = require('../app/models/books_db');
var ObjectId = mongoose.Schema.Types.ObjectId;

function getBooks(user) {    
    const queryResult = new Promise(function(resolve, reject) {
      Book.find({ owner: user._id.toString() }, (err, book) => {
        if(err) { reject(err); }
        
        resolve(book);
      });
    });
    
    return queryResult;
}

module.exports = getBooks;