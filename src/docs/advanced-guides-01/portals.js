import React from "react"
import ReactDOM from "react-dom"


const modalRoot = document.getElementById("section")

class BtnChild extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button>这是一个按钮</button>
    )
  }
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div")
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    })
  }

  render() {
    return (
      <div onClick={this.incrementCount}>
        <p>Hello World, count is {this.state.count}</p>
        <Modal>
          <BtnChild/>
        </Modal>
      </div>
    )
  }
}

export default Content;
