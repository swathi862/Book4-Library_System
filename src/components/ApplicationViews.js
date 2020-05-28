import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import BookCard from './books/BookCard'
import PatronCard from './patrons/PatronCard'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/books" render={(props) => {
          return <BookCard />
        }} />
        <Route path="/patrons" render={(props) => {
          return <PatronCard />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews