import React, { Component } from 'react'

class BookCard extends Component {

    render() {
        return (
	        <div className="container-main">
                <div className="section-content">
                <h2>Search books: <input type="text"></input></h2><br />
                <picture>
                    <img src={require('./books.jpeg')} alt="Books" />
                </picture>    
                        <h2>
                            <small>"Always read something that will make you look good if you die in the middle of it."-P.J. O'Rourke</small>
                        </h2>
                        <ul>
                            <p>Title: {this.props.book.title}</p>
                            <p>Author: {this.props.book.author}</p>
                            <p>Genre: {this.props.book.genre}</p>
                            <p>ISBN Number: {this.props.book.ISBN}</p>
                            {/* <p>Available: {this.props.book.available}</p> */}
                        </ul>
                </div>
                
	        </div>
        );
    }
}

export default BookCard