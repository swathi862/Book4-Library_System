const remoteURL = "http://localhost:5002"

export default {
  getPatronsfromBook(id) {
    return fetch(`${remoteURL}/books-patrons?bookId=${id}&_expand=patron`).then(result => result.json())
  },
  getBooksforPatrons(id) {
    return fetch(`${remoteURL}/books-patrons?patronId=${id}&_expand=book`).then(result => result.json())
  }
}