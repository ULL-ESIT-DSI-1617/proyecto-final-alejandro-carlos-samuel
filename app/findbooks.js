var mongoose = require('mongoose');
// load up the user model
var Book = require('../app/models/books_db');
var ObjectId = mongoose.Schema.Types.ObjectId;

function findBooks(info2Find, user) {
    const queryResult = new Promise(function(resolve, reject) {
        Book.find({
            $or: [{
                    author: info2Find, owner: user._id.toString()
                },
                {
                    title: info2Find, owner: user._id.toString()
                },
                {
                    isbn: info2Find, owner: user._id.toString()
                },
                {
                    publisher: info2Find, owner: user._id.toString()
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