import React, { Component } from 'react'
//import the components we will need
import BookCard from './BookCard'
import BookManager from '../../modules/BookManager'
import Button from 'react-bootstrap/Button'

    class BookList extends Component {
        //define what this component needs to render
        state = {
            books: [],
        }
    deleteBook = id =>{
        BookManager.delete(id)
        .then(()=>{
            BookManager.getAll()
            .then((newBooks) => {
                this.setState({
                  books: newBooks
                })
            })
        })
    }

    componentDidMount(){
        console.log("BOOK LIST: ComponentDidMount");
        //getAll from BookManager and hang on to that data; put it in state
        BookManager.getAll()
        .then((books) => {
            this.setState({
                books: books
            })
        })
    }

    render(){
        console.log("BookList: Render");
      
        return(
        <>
        <br />
        <section className="section-content">
            <Button variant="success" type="button"
                className="btn"
                onClick={() => {this.props.history.push("/books/new")}}>
                Add New Book
            </Button>
        </section><br />
        <div className="pageContent">
            <h2>Search books: <input type="text"/></h2><br />
                <picture>
                    <img src={require('./books.jpeg')} alt="Books" />
                </picture>    
                <h2>
                    <small>"Always read something that will make you look good if you die in the middle of it."-P.J. O'Rourke</small>
                </h2>
          <div className="container-cards">
            {this.state.books.map(book =>
              book.available ? <BookCard key={book.id} book={book} removeBook={this.deleteBook}/>: ""
            )}
          </div>
        </div>
        </>
        )
      }
}

export default BookList