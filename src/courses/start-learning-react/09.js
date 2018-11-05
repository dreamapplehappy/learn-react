/**
 * Normalize Events with Reacts Synthetic Event System
 */

import React from 'react'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentEvent: '---'
        }
    }

    update = (e) => {
        this.setState({
            currentEvent: e.type
        })
    }

    render() {
        return (
            <div>
                <textarea
                    onChange={this.update}
                    onKeyPress={this.update}
                    onKeyDown={this.update}
                    onKeyUp={this.update}
                    onFocus={this.update}
                    onBlur={this.update}
                    onTouchStart={this.update}
                    onTouchEnd={this.update}
                    onPaste={this.update}
                    onCopy={this.update}
                    cols="30"
                    rows="10"/>
                <h1>{this.state.currentEvent}</h1>
            </div>
        )
    }
}

export default App
