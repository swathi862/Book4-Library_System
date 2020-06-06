import React, { Component } from "react"
import PatronManager from "../../modules/PatronManager"
import { Button, Container, Form } from 'react-bootstrap'

class PatronEditForm extends Component {
    //set the initial state
    state = {
      name: "",
      DOB: "",
      phone: "",
      email: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingPatron = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedPatron = {
        id: this.props.match.params.patronId,
        name: this.state.name,
        DOB: this.state.DOB,
        phone_number: this.state.phone,
        email: this.state.email,
        libraryId: this.unchangedDetails.libraryId,
        active: this.unchangedDetails.active,
        account_created: this.unchangedDetails.account_created
      };

      PatronManager.update(editedPatron)
      .then(() => this.props.history.push("/patrons"))
    }

    unchangedDetails={}

    componentDidMount() {
      PatronManager.get(this.props.match.params.patronId)
      .then(patron => {
          console.log(patron)
          this.unchangedDetails.libraryId = patron.libraryId
          this.unchangedDetails.active = patron.active
          this.unchangedDetails.account_created = patron.account_created
          this.setState({
            name: patron.name,
            DOB: patron.DOB,
            phone: patron.phone_number,
            email: patron.email,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <Container>
            <h2>Edit Patron Details</h2><br />
        <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={this.handleFieldChange}
                id="DOB"
                value={this.state.DOB}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={this.handleFieldChange}
                id="phone"
                value={this.state.phone}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={this.handleFieldChange}
                id="email"
                value={this.state.email}
              />
            </Form.Group>

        </Form>
            <div className="button-row">
              <Button variant="outline-success"
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingPatron}
              >Submit</Button>
            </div>
        </Container>
        </>
      );
    }
}

export default PatronEditForm