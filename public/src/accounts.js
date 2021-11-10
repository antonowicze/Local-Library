function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1,
  )
}

function getTotalNumberOfBorrows(account, books) {
  let totalNumber = 0
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (books[i].borrows[j].id === account.id) totalNumber += 1
    }
  }
  return totalNumber
}

function getBooksPossessedByAccount(account, books, authors) {
  let borrowed = []
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (
        books[i].borrows[j].id === account.id &&
        books[i].borrows[j].returned == false
      ) {
        borrowed.push(books[i])
      }
    }
  }

  borrowed.forEach((book) => {
    let author = authors.find((person) => person.id === book.authorId)
    book['author'] = author
  })
  
  return borrowed
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
}
