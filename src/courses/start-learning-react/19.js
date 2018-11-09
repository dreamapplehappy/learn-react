/**
 * Use React.cloneElement to Extend Functionality of Children Components
 */

import React from 'react';

class App extends React.Component {
    render() {
        return (
            <MyButtons>
                <button value="A">A</button>
                <button value="B">B</button>
                <button value="C">C</button>
            </MyButtons>
        )
    }
}

class MyButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'None'
        }
    }

    selectItem = (selected) => {
        this.setState({selected})
    }

    render() {
        let fn = (child) => React.cloneElement(child, {
            onClick: this.selectItem.bind(null, child.props.value)
        });
        let items = React.Children.map(this.props.children, fn);
        return (
            <div>
                <h1>current selected: {this.state.selected}</h1>
                {items}
            </div>
        )
    }
}

export default App;
