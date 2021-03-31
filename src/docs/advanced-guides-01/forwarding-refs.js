import React from "react"

const ref = React.createRef()
const RefCmpt = React.forwardRef((props, ref) => {
  const {cb, ...rest} = props
  return (
    <button ref={ref} {...rest} onClick={cb}>ref btn</button>
  )
})

class TestRef extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log(ref.current)
    // ref.current;
  }

  render() {
    return <RefCmpt cb={this.handleClick} id={'ref-id'} ref={ref}/>
  }
}

export default TestRef

