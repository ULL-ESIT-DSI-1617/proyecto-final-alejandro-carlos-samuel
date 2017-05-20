let Book = require('../app/models/books_db');

module.exports = function(book, user) {
  //console.log(book);
  //console.log(user);
  let newBook = new Book();
  newBook.title = book.title;
  newBook.author = book.author;
  newBook.publisher = book.publisher;
  newBook.isbn = book.isbn;
  newBook.price = parseFloat(book.price);
  newBook.genre = book.genre;
  newBook.pages = parseInt(book.pages);
  newBook.buyDate = book.buydate;
  newBook.owner = user;//.email || user.id;

  newBook.save(function(err) {
    if (err)
      console.log(err);
    console.log("saved correctly.");
  });
};