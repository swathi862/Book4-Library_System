import React, { Component } from 'react';
import BookManager from '../../modules/BookManager';
// import './BookForm.css'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import { Button, Icon, Row, Col, TextInput } from 'react-materialize';

class BookForm extends Component {
    state = {
        title: "",
        author: "",
        genre: "",
        ISBN: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create Book      object, invoke the BookManager post method, and redirect to the full Book list
    */
    constructNewBook = evt => {
        evt.preventDefault();
        if (this.state.title === "" || this.state.author === "" || this.state.genre === "" || this.state.ISBN === "") {
            window.alert("Please input the book's title, author, genre, and ISBN number");
        } else {
            this.setState({ loadingStatus: true });
            const book = {
                title: this.state.title,
                author: this.state.author,
                genre: this.state.genre,
                ISBN: this.state.ISBN,
                libraryId: 1,
                available: true,
                coverPhoto: "https://img.clipartlook.com/book-clipart-download-this-image-as-600.png"
            };

            // Create the Book and redirect user to Book list
            BookManager.post(book)
            .then(() => this.props.history.push("/books"));
        }
    };

    render(){

        return(
            <div className="page-content">
            <div className="new-book-form">
            <Row className="book-form">
            <form className="col">
                <Row className="book-form">
                    <Col>
                    <TextInput id="title" required
                        onChange={this.handleFieldChange} label="Title"/>
                    </Col>
                </Row>
                <Row className="book-form">
                    <Col>
                        <TextInput id="author" required
                        onChange={this.handleFieldChange} label="Author"/>
                    </Col>
                </Row>
                <Row className="book-form">
                    <Col>
                        <TextInput id="genre" required
                        onChange={this.handleFieldChange} label="Genre"/>
                    </Col>
                </Row>
                <Row className="book-form">
                    <Col>
                        <TextInput id="ISBN" required
                        onChange={this.handleFieldChange} label="ISBN Number"/>
                    </Col>
                </Row>
            </form>
            </Row>
            <div className="alignRight">
                <Button node="button"  type="submit" waves="light" disabled={this.state.loadingStatus} onClick={this.constructNewBook}> Submit <Icon right> send </Icon> </Button>
            </div>
            {/* <Form>
                <Form.Group controlId="formGroupTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" required
                        onChange={this.handleFieldChange} id="title" placeholder="Title" />
                </Form.Group>
                <Form.Group controlId="formGroupAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" required
                        onChange={this.handleFieldChange} id="author" placeholder="Author" />
                </Form.Group>
                <Form.Group controlId="formGroupGenre">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text" required
                        onChange={this.handleFieldChange} id="genre" placeholder="Genre" />
                </Form.Group>
                <Form.Group controlId="formGroupISBN">
                    <Form.Label col sm="2">ISBN Number</Form.Label>
                    <Form.Control type="text" required
                        onChange={this.handleFieldChange} id="ISBN" placeholder="ISBN Number" />
                </Form.Group>
            </Form> */}
        {/* <Form.group>
            <Form.Row>
                <Form.Label column lg={2}>
                    Title
                </Form.Label>
                <Form.Control type="text" required
                        onChange={this.handleFieldChange} id="title" placeholder="Title" />
            </Form.Row>
            <br />
            <Form.Row>
                <Form.Label column lg={2}>
                    Author
                </Form.Label>
                <Form.Control type="text" required
                        onChange={this.handleFieldChange} id="author" placeholder="Author" />
            </Form.Row>
            <br />
            <Form.Row>
                <Form.Label column lg={2}>
                    Genre
                </Form.Label>
                <Form.Control type="text" required
                        onChange={this.handleFieldChange} id="genre" placeholder="Genre" />
            </Form.Row>
            <br />
            <Form.Row>
                <Form.Label column lg={2}>
                    ISBN Number
                </Form.Label>
                <Form.Control type="text" required
                        onChange={this.handleFieldChange} id="ISBN" placeholder="ISBN number" />
            </Form.Row>
            <br /> */}
                {/* <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="title"
                        placeholder="Title"
                        />
                        <label htmlFor="title">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="author"
                        placeholder="Author"
                        />
                        <label htmlFor="author">Author</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="genre"
                        placeholder="Genre"
                        />
                        <label htmlFor="genre">Genre</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="ISBN"
                        placeholder="ISBN number"
                        />
                        <label htmlFor="ISBN">ISBN Number</label>
                    </div> */}
                    {/* <div className="alignRight">
                        <Button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewBook}
                        >Submit</Button>
                    </div>
                {/* </fieldset> */}
            {/* </Form.group> */}
        </div>
        </div>
        )
    }
}

export default BookForm