function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let booksCheckedOut = books.filter(
    (book) => book.borrows.filter((record) => record.returned === false).length,
  )
  return booksCheckedOut.length
}


function commonGenresHelper(accum, book) {
  // get the genre of current book
  let genre = book.genre
  // get the object in accum that has "name === genre"
  let genreInfo = accum.find((element) => element.name === genre)
  // if an object was not found, create a new one and push it into accum
  if (!genreInfo) {
    const newGenreInfo = {
      name: genre,
      count: 1,
    }
    accum.push(newGenreInfo)
  } else {
    // if object was found, then add 1 to count
    genreInfo.count++
  }
  return accum
}

function getMostCommonGenres(books) {
  // create new array of most common genres
  let result = books.reduce(commonGenresHelper, [])
  // sort the array by count from greatest to least
  result.sort((a, b) => b.count - a.count)
  return result.slice(0, 5)
}

function getPopularBooksHelper(book) {
  return { name: book.title, count: book.borrows.length }
}

function getMostPopularBooks(books) {
  return books
    .map(getPopularBooksHelper)
    .sort((a, b) => (a.count < b.count ? 1 : -1))
    .slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  let result = []
  authors.forEach((author) => {
    let theAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    }
    books.forEach((book) => {
      if (book.authorId === author.id) {
        theAuthor.count += book.borrows.length
      }
    })
    result.push(theAuthor)
  })
  return result.sort((a, b) => b.count - a.count).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
}
