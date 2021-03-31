import React from "react"

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textRef = React.createRef();
  }

  textInputFocus= () => {
    this.textRef.current.focus()
  }

  render() {
    return (
      <>
        <input type="text" ref={this.textRef}/>
        <button onClick={this.textInputFocus}>Focus</button>
      </>
    )
  }
}

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.cmptRef = React.createRef()
  }

  componentDidMount() {
    console.log(this.cmptRef)
    // this.cmptRef.current.textInputFocus()
  }

  render() {
    return (
      <TextInput ref={this.cmptRef}/>
    )
  }
}

function FuncTextInput() {
  return (
    <input type="text"/>
  )
}

class FuncTextInputWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.funcRef = React.createRef()
  }

  componentDidMount() {
    console.log(this.funcRef, 233)
  }

  render() {
    return <FuncTextInput ref={this.funcRef}/>
  }
}

class CbRefTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textEle = null;
  }

  textRefCb = (ele) => {
    this.textEle = ele;
  }

  textInputFocus = () => {
    if (this.textEle) {
      this.textEle.focus();
    }
  }

  render() {
    return (
      <>
        <input type="text" ref={this.textRefCb}/>
        <button onClick={this.textInputFocus}>Focus</button>
      </>
    )
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <CbRefTextInput/>
      </>
    )
  }
}

export default Container
