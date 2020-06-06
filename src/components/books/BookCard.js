import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class BookCard extends Component {

    render() {
        return (
	        <div className="container-main">
                <div className="section-content">
                        <ul>
                            <p>Title: {this.props.book.title}</p>
                            <p>Author: {this.props.book.author}</p>
                            <Link to={`/books/${this.props.book.id}`}><Button variant="primary">Details</Button></Link>
                        </ul>
                </div>
                
	        </div>
        );
    }
}

export default BookCard