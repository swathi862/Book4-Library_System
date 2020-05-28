import React, { Component } from 'react'
import './Library.css'
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"


class Library extends Component {

    render() {
        return (
	        <>
                <NavBar />
                <ApplicationViews />
            </>
        );
    }
}

export default Library