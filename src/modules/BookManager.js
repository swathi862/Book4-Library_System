const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/books/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/books?libraryId=${localStorage.getItem("libraryId")}`).then(result => result.json())
  },
  delete(id){
    return fetch(`${remoteURL}/books/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newBook){
    this.newBook.libraryId = localStorage.getItem("libraryId")
    return fetch(`${remoteURL}/books`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
    }).then(data => data.json())
  },
  update(newBook){
    return fetch(`${remoteURL}/books/${newBook.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
      }).then(data => data.json());
  }
}