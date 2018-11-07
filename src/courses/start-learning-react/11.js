/**
 * Understand the React Component Lifecycle Methods
 *
 * 部分内容是根据官网的API来进行实践的
 * 1：http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 * 2：https://reactjs.org/docs/react-component.html
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
    }

    render() {
        console.log('render');
        return <button onClick={this.updateCount}>{this.state.count}</button>
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnMount');
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
