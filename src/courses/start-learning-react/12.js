/**
 * Manage React Component State with Lifecycle Methods
 */

import React from 'react';
import ReactDOM from 'react-dom'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    updateCount = () => {
        // setState 的用法
        this.setState({
            count: this.state.count + 1
        });
    }

    componentWillMount() {
        console.log('componentWillMount');
        this.setState({
            m: 2
        })
    }

    render() {
        console.log('render');
        return <button onClick={this.updateCount}>{this.state.count * this.state.m}</button>
    }

    componentDidMount() {
        console.log('componentDidMount');
        // this.inc = setInterval(this.updateCount, 1000);
    }

    componentWillUnmount() {
        console.log('componentWillUnMount');
        // Remember cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
        // clearInterval(this.inc);
    }
}

class App extends React.Component {
    mountCounter = () => {
        ReactDOM.render(
            <Counter/>,
            document.getElementById('counter')
        );
    }

    unmountCounter = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('counter'));
    }

    render() {
        return(
            <div>
                <button onClick={this.mountCounter}>Mount</button>
                <button onClick={this.unmountCounter}>UnMount</button>
                <div id="counter"></div>
            </div>
        )
    }
}

export default App
