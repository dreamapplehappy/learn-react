/**
 * Access Nested Data with Reacts props.children
 */

import React from 'react';

class App extends React.Component {
    render() {
        return <MyButton>I <Heart/> React</MyButton>
    }
}

const MyButton = (props) => <button>{props.children}</button>;

const Heart = () => <span>&hearts;</span>;

export default App
