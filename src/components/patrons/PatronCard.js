import React, { Component } from 'react'

class PatronCard extends Component {

    render() {
        return (
	        <div class="container-main">
                <div class="section-content">
                <picture>
                    <img src={require('./patrons.jpg')} alt="Patrons" />
                </picture>    
                        <h2>List of Patrons:<br />
                        </h2>
                        <ul>
                            <p>Miss Frizzle</p>
                        </ul>
                </div>
                
	        </div>
        );
    }
}

export default PatronCard