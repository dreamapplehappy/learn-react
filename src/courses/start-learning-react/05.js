/**
 * Manage React Component State with setState
 */

import React from 'react';

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
                <input type="text" onChange={this.updateTxt}/>
                <h1>{this.state.txt}</h1>
            </div>
        )
    }
}

export default App

