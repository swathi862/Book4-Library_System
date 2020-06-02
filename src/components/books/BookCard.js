import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BookCard extends Component {

    render() {
        return (
	        <div className="container-main">
                <div className="section-content">
                        <ul>
                            <p>Title: {this.props.book.title}</p>
                            <p>Author: {this.props.book.author}</p>
                            <button type="button" onClick={()=> this.props.removeBook(this.props.book.id)}>Remove</button>
                            <Link to={`/books/${this.props.book.id}`}><button>Details</button></Link>
                        </ul>
                </div>
                
	        </div>
        );
    }
}

export default BookCard