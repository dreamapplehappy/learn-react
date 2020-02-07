import React from 'react';


class ListOfWords extends React.PureComponent {
    render() {
        return <div>{this.props.words.join(',')}</div>
    }
}

class WordAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['hello']
        }
    }

    handleChange = () => {
        const { words } = this.state
        words.push('hello')
        this.setState({
            words: words.concat([])
        })
    }

    render() {
        return (
            <div>
                <ListOfWords words={this.state.words} />
                <button onClick={this.handleChange}>add word</button>
            </div>
        )
    }
}

const App = () => (
    <WordAdder />
)

export default App
