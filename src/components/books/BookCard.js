import React, { Component } from 'react'

class BookCard extends Component {

    render() {
        return (
	        <div className="container-main">
                <div className="section-content">
                        <ul>
                            <p>Title: {this.props.book.title}</p>
                            <p>Author: {this.props.book.author}</p>
                            <p>Genre: {this.props.book.genre}</p>
                            <p>ISBN Number: {this.props.book.ISBN}</p>
                            {this.props.book.available ? <p><em>Available</em></p> : ""}
                            <button type="button" onClick={()=> this.props.removeBook(this.props.book.id)}>Remove</button>
                        </ul>
                </div>
                
	        </div>
        );
    }
}

export default BookCard