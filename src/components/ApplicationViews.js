import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import Login from './auth/Login'
import BookList from './books/BookList'
import BookDetails from './books/BookDetail'
import BookForm from './books/BookForm'
import BookEditForm from './books/BookEditForm'
import PatronList from './patrons/PatronList'
import PatronForm from './patrons/PatronForm'
import PatronDetail from './patrons/PatronDetail'
import PatronEditForm from './patrons/PatronEditForm'


class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/login" component={Login}/>

        <Route exact path="/books" render={(props) => {
            if (this.isAuthenticated()) {
                return <BookList {...props} />
            } else {
                return <Redirect to="/login" />
            }
        }} />
        <Route exact path="/books/:bookId(\d+)" render={(props) => {
          return <BookDetails bookId={parseInt(props.match.params.bookId)} {...props}/>
        }} />
        <Route path="/books/:bookId(\d+)/edit" render={props => {
            return <BookEditForm {...props} />
          }}
        />
        <Route exact path="/books/new" render={(props) => {
          return <BookForm {...props}/>
        }} />
        <Route exact path="/patrons" render={(props) => {
            if (this.isAuthenticated()) {
                return <PatronList {...props} />
            } else {
                return <Redirect to="/login" />
            }
        }} />
        <Route exact path="/patrons/new" render={(props) => {
          return <PatronForm {...props}/>
        }} />
        <Route exact path="/patrons/:patronId(\d+)" render={(props) => {
          return <PatronDetail patronId={parseInt(props.match.params.patronId)} {...props}/>
        }} />
        <Route path="/patrons/:patronId(\d+)/edit" render={props => {
            return <PatronEditForm {...props} />
          }}
        />
      </React.Fragment>
    )
  }
}

export default ApplicationViews