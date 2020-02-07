import React from 'react';
import ReactDOM from 'react-dom'

const sectionRoot = document.getElementById('section')
console.log(sectionRoot)

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div')
    }

    componentDidMount() {
        sectionRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        sectionRoot.removeChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}

const Child = () => {
    return (
        <div className='modal'>
            <button>Click Me</button>
        </div>
    )
}

class ModalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        const { count } = this.state
        this.setState({
            count: count + 1
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>Number of clicks: {this.state.count}</p>
                <Modal>
                    <Child />
                </Modal>
            </div>
        )
    }
}

const App = () => (<ModalContainer />)

export default App
