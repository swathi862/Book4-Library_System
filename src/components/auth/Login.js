import React, { Component } from "react"
import Button from 'react-bootstrap/Button'
import { Modal, Form, Container } from 'react-bootstrap'
import LoginManager from '../../modules/LoginManager'

class Login extends Component {

  // Set initial state
  state = {
    email: "",
    password: ""
  }


  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleLogin = (e) => {
    e.preventDefault()
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
   LoginManager.loginAccount(this.state.email).then(library => {
    console.log(library[0].id);
    console.log(library[0].password);
    if (this.state.password === library[0].password){
        localStorage.setItem("libraryId", library[0].id);
        localStorage.setItem(
          "credentials",
          JSON.stringify({
              email: this.state.email,
              password: this.state.password
          })
      )
    }
    else{
        window.alert(`I'm sorry! The password you entered does not exist with the email:   ${this.state.email}
            Please try again!`)
    }
    
  })

    //redirect to page user clicked on
    // this.props.history.goBack();
    //redirect to home page
    this.props.history.push("/");

  }

  render() {

    return (
      <>
      <br />
        <Container>
          <h2 id="contained-modal-title-vcenter">Welcome to Ravenhurst Library!<br/><small>Please sign in</small></h2>
            <Form onSubmit={this.handleLogin}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" id="email" onChange={this.handleFieldChange} placeholder="Enter email" required="" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" id="password" onChange={this.handleFieldChange} placeholder="Password" required=""/>
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Remember Me (not functional)" />
              </Form.Group>
              <div className="button-row">
                <Button variant="outline-success" type="submit">Submit </Button>
              </div>           
            </Form>
          </Container>
      </>
      
    )
  }

}

export default Login