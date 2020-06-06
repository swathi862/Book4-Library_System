import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class PatronCard extends Component {

    render() {
        return (
	        <div className="container-main">
                <div className="section-content">  
                        <ul>
                            <h3>{this.props.patron.name}</h3>
                            <p>Patron since: {this.props.patron.account_created}</p>
                            <Link to={`/patrons/${this.props.patron.id}`}><Button variant="primary">Details</Button></Link>
                        </ul>
                </div>
                
	        </div>
        );
    }
}

export default PatronCard