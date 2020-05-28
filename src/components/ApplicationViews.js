import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import BookList from './books/BookList'
import PatronList from './patrons/PatronList'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/books" render={(props) => {
          return <BookList />
        }} />
        <Route path="/patrons" render={(props) => {
          return <PatronList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews