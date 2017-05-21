var Book = require('../app/models/books_db');

function deleteBook(book, user) {
  Book.findOneAndRemove({owner: user._id.toString(), title: book.title}, (err) => {
    if (err)
      console.log(err);
  });  
}

module.exports = deleteBook;




