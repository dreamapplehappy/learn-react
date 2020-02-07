import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props
        if(hasError) {
            return <p>Error!</p>
        }
        return children
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }))
    }

    render() {
        const { count } = this.state
        if(count === 5) {
            throw new Error('I crashed!');
        }
        return <h1 onClick={this.increment}>{count}</h1>
    }
}

class App extends React.Component {


    render() {
        return (
            <ErrorBoundary>
                <Counter/>
            </ErrorBoundary>
        )
    }
}

export default App
