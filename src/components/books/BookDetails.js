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
      patron: [],
      checkOutDate: ""
  }

  getCheckoutDetails(){
    BookPatronManager.getPatronsfromBook(this.props.bookId)
    .then((bookDetails) =>{
        console.log(bookDetails)
        this.setState({
            patron: bookDetails.patron
        })
        console.log(this.state.patron)
    });
  }
  componentDidMount(){
    console.log("BookDetails: ComponentDidMount");
    //get(id) from bookManager and hang on to the data; put it into state
    BookManager.get(this.props.bookId)
    .then((book) => {
        console.log(book)
        this.setState({
            title: book.title,
            author: book.author,
            genre: book.genre,
            ISBN: book.ISBN,
            available: book.available,
            coverPhoto: book.coverPhoto,
        });
    })
    BookPatronManager.getPatronsfromBook(this.props.bookId)
    .then((bookDetails) =>{
        console.log(bookDetails)
        bookDetails.map(book => (
            this.setState({
                patron: book.patron,
                checkOutDate: book.checkOutDate
            })
            
        ))
        })
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
                    <li>{this.state.patron.name}
                    <br/><small>{this.state.checkOutDate}</small></li>

                </ul>
            </h4>
        </div>
      </div>
    );
  }
}

export default BookDetails;