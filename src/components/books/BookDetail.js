import React, { Component } from 'react';
import BookManager from '../../modules/BookManager';
import BookPatronManager from '../../modules/BookPatronManager'
import { Button } from 'react-bootstrap'

class BookDetails extends Component {

  state = {
      title: "",
      author: "",
      genre: "",
      ISBN: "",
      available: "",
      coverPhoto: "",
      patron: [],
      loadingStatus: true
  }

  deleteBook = () => {
    //invoke the delete function in OwnerManger and re-direct to the Owner list.
    this.setState({loadingStatus: true})
    BookManager.delete(this.props.bookId)
    .then(() => this.props.history.push("/books"))
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
            loadingStatus: false
        });
    })
    BookPatronManager.getPatronsfromBook(this.props.bookId)
    .then((bookDetails) =>{
        this.setState({
            patron: bookDetails
        })
    })
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={this.state.coverPhoto} alt="Book Cover" />
          </picture>
          <br/>
            <h3><span style={{ color: 'darkslategrey' }}>{this.state.title}</span></h3>
            <p>Author: {this.state.author}</p>
            <p>Genre: {this.state.genre}</p>
            <p>ISBN Number: {this.state.ISBN}</p>
            {this.state.available ? <p style={{ color: 'green' }}><em>Available</em></p> : ""}<br/>
            <Button variant="danger" type="button" disabled={this.state.loadingStatus} onClick={this.deleteBook}>Remove</Button>
            <Button variant="light" type="button" disabled={this.state.loadingStatus} onClick={() => {this.props.history.push(`/books/${this.props.bookId}/edit`)}}>Edit</Button>
            <hr />
            <h6>Previously Checked out by: </h6>
                <ul>
                {this.state.patron.sort((a,b) => a.checkOutDate.split("/")[2] > b.checkOutDate.split("/")[2] ? -1:1).slice(0,3).map(patron =>
                    
                    {if(patron.checkInDate !== null){
                      return <><li>{patron.patron.name}</li><br/></>
                    } else {
                      return <><li style={{ color: 'navy' }}><strong>{patron.patron.name}<br /><small>Due Back: {patron.dueDate}</small></strong></li><br/></>
                    }}
                    
                )}
                </ul>
        </div>
      </div>
    );
  }
}

export default BookDetails;