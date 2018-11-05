/**
 * Write a "Hello World" React Component
 */

import React from 'react'

// 使用class的组件是可以包含状态的
class App extends React.Component {
    render() {
        // return <h1>Hello, Component</h1>
        // 除了直接使用JSX，也可以使用React.createElement
        return React.createElement(
            'h1',
            null,
            'Hello, createElement'
        )
    }
}

// 使用函数的组件是没有状态的
// const App = () => <h1>Hello, stateless</h1>

export default App
