/**
 * Build a JSX Live Compiler as a React Component
 * Understand JSX at a Deeper Level
 */

import React from 'react';
import '../../App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '/* add your jsx here  */',
            output: '',
            err: ''
        }
    }

    update = (e) => {
        // Babel.transform
        let code = e.target.value;
        try {
            this.setState({
                ouput: window.Babel.transform(code, {presets: ['es2015', 'react']}).code,
                err: ''
            })
        } catch (error) {
            this.setState({
                err: error.message
            })
        }
    }

    render() {
        return (
            <div>
                <header>{this.state.err}</header>
                <div className="container">
                    <textarea onChange={this.update} defaultValue={this.state.input}/>
                    <pre>
                        {this.state.ouput}
                    </pre>
                </div>
            </div>
        )
    }
}

export default App;

