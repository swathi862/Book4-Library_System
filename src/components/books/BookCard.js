import React, { Component } from 'react'

class BookCard extends Component {

    render() {
        return (
	        <div class="container-main">
                <div class="section-content">
                <h2>Search books: <input type="text"></input></h2><br />
                <picture>
                    <img src={require('./books.jpeg')} alt="Books" />
                </picture>    
                        <h2>
                            <small>"Always read something that will make you look good if you die in the middle of it."-P.J. O'Rourke</small>
                        </h2>
                        <ul>
                            <p>Wild by Cheryl Strayed</p>
                        </ul>
                </div>
                
	        </div>
        );
    }
}

export default BookCard