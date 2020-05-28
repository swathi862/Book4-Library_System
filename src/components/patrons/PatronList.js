import React, { Component } from 'react'
//import the components we will need
import PatronCard from './PatronCard'
import PatronManager from '../../modules/PatronManager'

    class PatronList extends Component {
        //define what this component needs to render
        state = {
            patrons: [],
        }

    componentDidMount(){
        console.log("PATRON LIST: ComponentDidMount");
        //getAll from PatronManager and hang on to that data; put it in state
        PatronManager.getAll()
        .then((patrons) => {
            this.setState({
                patrons: patrons
            })
        })
    }

    render(){
        console.log("PatronList: Render");
      
        return(
          <div className="container-cards">
            {this.state.patrons.map(patron =>
              <PatronCard key={patron.id} patron={patron} />
            )}
          </div>
        )
      }
}

export default PatronList