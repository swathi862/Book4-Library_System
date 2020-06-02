const remoteURL = "http://localhost:5002"

export default {
  getPatronsfromBook(id) {
    return fetch(`${remoteURL}/books-patrons?bookId=${id}&_expand=patron`).then(result => result.json())
  },
  getBooksforPatrons(id) {
    return fetch(`${remoteURL}/books-patrons?_expand=patrons/${id}`).then(result => result.json())
  }
}