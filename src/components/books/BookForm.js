import React, { Component } from 'react';
import BookManager from '../../modules/BookManager';
import './BookForm.css'
// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Row, Col, TextInput, Container } from 'react-materialize';

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
        <Container>
        <h2 className="form-title">Add a Book</h2>
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
            <div className="book-button">
                <Button className="submit-btn" variant="outline-success"  type="submit" waves="light" disabled={this.state.loadingStatus} onClick={this.constructNewBook}> Submit </Button>
            </div>
        </Container>
        </div>
        )
    }
}

export default BookForm