import React, { Component } from 'react';
import PatronManager from '../../modules/PatronManager';
import './PatronForm.css'
import { Button, Form, Container } from 'react-bootstrap'

class PatronForm extends Component {
    // var today = new Date()
    // today=`${today.getFullYear()}-${(today.getMonth()+ 1) > 9 ? "" + (today.getMonth()+ 1): "0" + (today.getMonth()+ 1)}-${today.getDate() > 9 ? "" + today.getDate(): "0" + today.getDate()}`
    state = {
        name: "",
        DOB: "",
        phone_number: "",
        email: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create Patron object, invoke the PatronManager post method, and redirect to the full Patron list
    */
    constructNewPatron = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.DOB === "" || this.state.phone_number === "" || this.state.email === "") {
            window.alert("Please input the patron's name, DOB, phone number and email.");
        } else {
            this.setState({ loadingStatus: true });
            const patron = {
                name: this.state.name,
                DOB: this.state.DOB,
                phone_number: this.state.phone_number,
                email: this.state.email,
                libraryId: 1,
                account_created:"06/02/2020",
                active: true
            };

            // Create the Book and redirect user to Book list
            PatronManager.post(patron)
            .then(() => this.props.history.push("/patrons"));
        }
    };

    render(){
        return (
            <Container>
                <h2 className="form-title">Add a New Patron</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" id="name" required
                        onChange={this.handleFieldChange} placeholder="i.e. John Doe" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="text" id="DOB" required
                        onChange={this.handleFieldChange} placeholder="mm/dd/yyyy" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" id="phone_number" required
                        onChange={this.handleFieldChange} placeholder="xxx-xxx-xxxx" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" id="email" required
                        onChange={this.handleFieldChange} placeholder="name@email.com" />
                </Form.Group>
            </Form>
                <div className="button-row">
                <Button className="submit-btn" variant="outline-success" type="submit" disabled={this.state.loadingStatus} onClick={this.constructNewPatron}>
                    Submit
                </Button>
                </div>
            </Container>
        )
    }
}
export default PatronForm
