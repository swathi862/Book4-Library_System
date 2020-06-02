import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import BookList from './books/BookList'
import BookDetails from './books/BookDetails'
import PatronList from './patrons/PatronList'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/books" render={(props) => {
          return <BookList />
        }} />
        <Route path="/books/:bookId(\d+)" render={(props) => {
          return <BookDetails bookId={parseInt(props.match.params.bookId)}/>
        }} />
        <Route path="/patrons" render={(props) => {
          return <PatronList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews