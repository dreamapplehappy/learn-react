import React, { Profiler } from "react"

class Container extends React.Component {
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

  noop = (id, // the "id" prop of the Profiler tree that has just committed
          phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
          actualDuration, // time spent rendering the committed update
          baseDuration, // estimated time to render the entire subtree without memoization
          startTime, // when React began rendering this update
          commitTime, // when React committed this update
          interactions) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions);
  }

  render() {
    return (
      <Profiler id={"Counter"} onRender={this.noop}>
        <span onClick={this.incrementCount}>{this.state.count}</span>
      </Profiler>
    )
  }
}

export default Container;
