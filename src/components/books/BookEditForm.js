import React, { Component } from "react"
import BookManager from "../../modules/BookManager"
import { Button, Container, Form } from 'react-bootstrap'

class BookEditForm extends Component {
    //set the initial state
    state = {
      book_title: "",
      book_author: "",
      book_genre: "",
      isbn: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingBook = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedBook = {
        id: this.props.match.params.bookId,
        title: this.state.book_title,
        author: this.state.book_author,
        genre: this.state.book_genre,
        ISBN: this.state.isbn,
        libraryId: this.unchangedDetails.libraryId,
        available: this.unchangedDetails.available,
        coverPhoto: this.unchangedDetails.coverPhoto
      };

      BookManager.update(editedBook)
      .then(() => this.props.history.push("/books"))
    }

    unchangedDetails={}

    componentDidMount() {
      BookManager.get(this.props.match.params.bookId)
      .then(book => {
          console.log(book)
          this.unchangedDetails.libraryId = book.libraryId
          this.unchangedDetails.available = book.available
          this.unchangedDetails.coverPhoto = book.coverPhoto

          this.setState({
            book_title: book.title,
            book_author: book.author,
            book_genre: book.genre,
            isbn: book.ISBN,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <Container>
            <h2>Edit A Book</h2><br />
        <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="book_title"
                value={this.state.book_title}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={this.handleFieldChange}
                id="book_author"
                value={this.state.book_author}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={this.handleFieldChange}
                id="book_genre"
                value={this.state.book_genre}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>ISBN Number</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={this.handleFieldChange}
                id="isbn"
                value={this.state.isbn}
              />
            </Form.Group>

        </Form>
            <div className="button-row">
              <Button variant="outline-success"
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingBook}
              >Submit</Button>
            </div>
        </Container>
        </>
      );
    }
}

export default BookEditForm