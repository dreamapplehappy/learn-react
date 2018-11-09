/**
 * Compose React Component Behavior with Higher Order Components
 */

import React from 'react';

const HOC = (InnerComponent) => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    update = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentWillMount() {
        console.log('component will mount');
    }

    render() {
        return <InnerComponent
                {...this.props}
                {...this.state}
                update={this.update}
               />
    }
}

const MyButton = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>);

class MyLabel extends React.Component {
    componentWillMount() {
        console.log('label will mount');
    }

    render() {
        return <label onClick={this.props.update}>{this.props.children} - {this.props.count}</label>
    }
}

const MyLabelHOC = HOC(MyLabel);

class App extends React.Component {
    render() {
        return (
            <div>
                <MyButton>button</MyButton>
                <hr />
                <MyLabelHOC>label</MyLabelHOC>
            </div>
        )
    }
}

export default App;
