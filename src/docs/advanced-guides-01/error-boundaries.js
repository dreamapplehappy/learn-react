import React from "react"

class CountWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0
    }
  }

  incrementN = () => {
    const { n } = this.state;
    this.setState({
      n: n + 1
    })
  }

  render() {
    if (this.state.n > 5) {
      throw new Error('oops...')
    }
    return (
      <button onClick={this.incrementN}>click{this.state.n}</button>
    )
  }
}

const Username = (props) => {
  if (props.count > 5) {
    throw new Error('count bigger than 5')
  }
  return (
    <>
      <span onClick={props.handler}>{props.name}, {props.count}</span>
      <CountWrapper/>
    </>
  )
}

const UserProfile = (props) => {
  return (
    <>
      <Username handler={props.incrementHandler} name={props.name} count={props.count}/>
      <p>{props.desc}</p>
    </>
  )
}

class UserProfileWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "dreamapple",
      desc: "this is my life"
    }
  }

  incrementCount = () => {
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    })
  }

  render() {
    return <UserProfile incrementHandler={this.incrementCount} {...this.state} />
  }
}

class UserProfileErrorWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError(err) {
    console.log(err)
    return {
      hasError: true
    }
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <p>???</p>
    } else {
      return <UserProfileWrapper />;
    }
  }
}

export default UserProfileErrorWrapper
