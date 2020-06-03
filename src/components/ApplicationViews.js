import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import BookList from './books/BookList'
import BookDetails from './books/BookDetails'
import BookForm from './books/BookForm'
import PatronList from './patrons/PatronList'
import PatronForm from './patrons/PatronForm'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/books" render={(props) => {
          return <BookList {...props}/>
        }} />
        <Route path="/books/:bookId(\d+)" render={(props) => {
          return <BookDetails bookId={parseInt(props.match.params.bookId)} {...props}/>
        }} />
        <Route exact path="/books/new" render={(props) => {
          return <BookForm {...props}/>
        }} />
        <Route exact path="/patrons" render={(props) => {
          return <PatronList {...props}/>
        }} />
        <Route exact path="/patrons/new" render={(props) => {
          return <PatronForm {...props}/>
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews