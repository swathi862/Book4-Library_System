const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/patrons/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/patrons`).then(result => result.json())
  },
  patch(id){
    return fetch(`${remoteURL}/patrons/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({active: false}),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(result => result.json())
  }
}