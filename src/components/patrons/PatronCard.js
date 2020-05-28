import React, { Component } from 'react'

class PatronCard extends Component {

    render() {
        return (
	        <div className="container-main">
                <div className="section-content">
                <h2>List of Patrons:<br />
                        </h2>
                <picture>
                    <img src={require('./patron.jpg')} alt="Patrons" />
                </picture>    
                        <ul>
                            <h3>Name: {this.props.patron.name}</h3>
                            <p>DOB: {this.props.patron.DOB}</p>
                            <p>Phone: {this.props.patron.phone_number}</p>
                            <p>E-mail: {this.props.patron.email}</p>
                            <p>Patron since: {this.props.patron.account_created}</p>
                        </ul>
                </div>
                
	        </div>
        );
    }
}

export default PatronCard