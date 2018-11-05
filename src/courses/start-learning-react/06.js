/**
 * Use React Components as Children for Other Components
 */

import React from 'react'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'Hello, World'
        };
    }

    updateTxt = (e) => {
        this.setState({
            txt: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.txt}</h1>
                <Widget update={this.updateTxt}/>
            </div>
        )
    }
}

const Widget = (props) => <input type="text" onChange={props.update}/>

export default App
