function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id )
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let bookReturned = books.filter((book) => 
    book.borrows.every((book) => book.returned === true));
  let bookBorrowed = books.filter((book) => 
    book.borrows.some((book) => book.returned === false));
  
  let newArray = [bookBorrowed, bookReturned]
   console.log(newArray);
   return newArray;
}

function getBorrowersForBook(book, accounts) {
  const totalBorrowers = book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id) ;
    return {...borrow, ...account};
  }) 
  return totalBorrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
