/**
 * Use React ref to Get a Reference to Specific Components
 *
 * 下面的代码是参照 https://reactjs.org/docs/refs-and-the-dom.html 的一些练习
 */

import React from 'react';

// test 1
// eslint-disable-next-line
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.myRef)
    }

    render() {
        return <div ref={this.myRef}>Hello, Wolrd</div>
    }
}

// test 2
// eslint-disable-next-line
class CustomTextInput extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        console.log(`constructor: ${JSON.stringify(this.props)}`);
        this.textInput = React.createRef();
    }

    // 使用箭头函数
    focusTextInput = () => {
        console.log(`focusTextInput: ${JSON.stringify(this.props)}`);
        this.textInput.current.focus();
    }

    componentDidMount() {
        console.log(`componentDidMount: ${JSON.stringify(this.props)}`);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.textInput} />
                <button onClick={this.focusTextInput}>Focus the text input</button>
            </div>)
    }
}

// eslint-disable-next-line
class CustomTextInputA extends React.Component {
    textInputRef = (ele) => {
        this.textInput = ele
    }

    // 使用箭头函数
    focusTextInput = () => {
        this.textInput.focus();
    }

    render() {
        return (
            <div>
                {/*
                    If the ref callback is defined as an inline function,
                    it will get called twice during updates,
                    first with null and then again with the DOM element.
                    This is because a new instance of the function is created with each render,
                    so React needs to clear the old ref and set up the new one.
                    You can avoid this by defining the ref callback as a bound method on the class,
                    but note that it shouldn’t matter in most cases.
                */}
                <input type="text" ref={this.textInputRef} />
                <button onClick={this.focusTextInput}>Focus the text input</button>
            </div>)
    }
}

const CustomTextInputB = () => {
    let myRef = React.createRef();

    function focusTextInput() {
        myRef.current.focus();
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <button onClick={focusTextInput}>Focus the text input</button>
        </div>
    )
}

const App = () => <CustomTextInputB a={1} />;

export default App;
