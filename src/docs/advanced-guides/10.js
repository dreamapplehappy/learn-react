import React from 'react';

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef()
    }

    focusTextInput = () => {
        this.textInput.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.textInput} />
                <button onClick={this.focusTextInput}>focus</button>
            </div>
        )
    }
}

const App = () => (<CustomTextInput/>)

export default App
