import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Ravenhurst Library<br />
          <small>Read all about it.</small>
        </h1>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand >Ravenhurst Library</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/books">Books</Nav.Link>
              <Nav.Link href="/patrons">Patrons</Nav.Link>
            </Nav>
        </Navbar>
      </header>
    )
  }
}

export default NavBar;