var Book = require('../app/models/books_db');

function deleteBook(book) {
    const queryResult = new Promise((resolve, reject) => {
        Book.findOneAndRemove({
            _id: book
        }, (err) => {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    });

    return queryResult;
}
module.exports = deleteBook;