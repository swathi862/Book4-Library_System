import React, { Component } from 'react'
import './Home.css'

class Home extends Component {

    render() {
        return (
	        <div class="container-main">
                <div class="section-content">
                <h2>Ravenhurst Library<br />
                    <small>Read to your heart's content..and then some more.</small>
                </h2>
                <picture>
                    <img src={require('./library.png')} alt="Library" />
                </picture>    
                        <address><br />
                                Visit Us at the Nashville North Location
                                <br />500 Library Way
                        </address>
                </div>
                
	        </div>
        );
    }
}

export default Home