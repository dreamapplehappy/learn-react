/**
 * Understand React.Children Utilities
 */

import React from 'react';

class App extends React.Component {
    render() {
        return (
            <Parent>
                <div className="childA">childA</div>
                <div className="childA">childB</div>
            </Parent>
        );
    }
}

const Parent = (props) => {
    // console.log(props.children);
    // let items = React.Children.map(props.children, item => item);
    // let items = React.Children.forEach(props.children, item => console.log(item.props.className));
    // let item = React.Children.only(props.children);
    // console.log(item);
    let items = React.Children.toArray(props.children);
    console.log(items);
    return null;
}

export default App;
