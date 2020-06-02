import React, { Component } from 'react';
import BookManager from '../../modules/BookManager';
import BookPatronManager from '../../modules/BookPatronManager'

class BookDetails extends Component {

  state = {
      title: "",
      author: "",
      genre: "",
      ISBN: "",
      available: "",
      coverPhoto: "",
      patron: "",
  }

  getCheckoutDetails(){
    BookPatronManager.getPatronsfromBook(this.props.bookId)
    .then((bookDetails) =>{
    console.log(bookDetails)
        return bookDetails.patron
    });
  }
  componentDidMount(){
    console.log("BookDetails: ComponentDidMount");
    //get(id) from bookManager and hang on to the data; put it into state
    BookManager.get(this.props.bookId)
    .then((book) => {
        this.setState({
            title: book.title,
            author: book.author,
            genre: book.genre,
            ISBN: book.ISBN,
            available: book.available,
            coverPhoto: book.coverPhoto,
            patron: this.getCheckoutDetails()
        });
    })
console.log(this.state.patron)
console.log(this.getCheckoutDetails())


  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={this.state.coverPhoto} alt="Book Cover" />
          </picture>
            <h3>Title: <span style={{ color: 'darkslategrey' }}>{this.state.title}</span></h3>
            <p>Author: {this.state.author}</p>
            <p>Genre: {this.state.genre}</p>
            <p>ISBN Number: {this.state.ISBN}</p>
            {this.state.available ? <p><em>Available</em></p> : ""}
            <h4>Previously Checked out by: 
                <ul>
                    <li>{this.state.patron}</li>
                </ul>
            </h4>
        </div>
      </div>
    );
  }
}

export default BookDetails;