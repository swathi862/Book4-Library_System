import React, { Component } from 'react';
import PatronManager from '../../modules/PatronManager';
import BookPatronManager from '../../modules/BookPatronManager'
import { Button } from 'react-bootstrap'

class PatronDetails extends Component {

  state = {
    name: "",
    DOB: "",
    phone: "",
    email: "",
    book: [],
    account_created: "",
    loadingStatus: true
  }

  archivePatrons = () => {
    //invoke the delete function in OwnerManger and re-direct to the Owner list.
    this.setState({loadingStatus: true})
    PatronManager.patch(this.props.patronId)
    .then(() => this.props.history.push("/patrons"))
   }

  componentDidMount(){
    console.log("PatronDetails: ComponentDidMount");
    //get(id) from pPatronManager and hang on to the data; put it into state
    PatronManager.get(this.props.patronId)
    .then((patron) => {
        console.log(patron)
        this.setState({
            name: patron.name,
            DOB: patron.DOB,
            phone: patron.phone_number,
            email: patron.email,
            account_created: patron.account_created,
            loadingStatus: false
        });
    })
    BookPatronManager.getBooksforPatrons(this.props.patronId)
    .then((bookDetails) =>{
        this.setState({
            book: bookDetails
        })
    })
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img className="anon-image" src={'https://www.booksie.com/files/profiles/22/mr-anonymous.png'} alt="patron pic" />
          </picture>
          <br/>
          <p>Name: {this.state.name}</p>
          <p>DOB: {this.state.DOB}</p>
          <p>Phone: {this.state.phone}</p>
          <p>E-mail: {this.state.email}</p>
          <p>Patron since: {this.state.account_created}</p><br />
          <Button variant="warning" type="button" disabled={this.state.loadingStatus} onClick={this.archivePatrons}>Archive</Button>
          <Button variant="light" type="button" disabled={this.state.loadingStatus} onClick={() => {this.props.history.push(`/patrons/${this.props.patronId}/edit`)}}>Edit</Button>
          <hr />
          <h6>Books Checked Out:</h6>
            {this.state.book.map(book =>
                <ul>
                <li>{book.book.title}</li>
                <li><small>{book.book.author}</small></li>
                <li><small>ISBN: {book.book.ISBN}</small></li>                  
                <li><small>Checked In: {book.checkInDate}</small></li>
                <li><small>Checked Out: {book.checkOutDate}</small></li>                  
                </ul>
            )}
        </div>
      </div>
    );
  }
}

export default PatronDetails;