import React from "react"

class NameList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.list, 23333)
    return this.props.list.map(name => (<span key={name}>{name}</span>))
  }
}

class ListWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['hello'],
      name: ''
    }
  }

  addName = () => {
    const { list, name } = this.state;
    list.push(name)
    this.setState({
      list: [].concat(list),
      name: ''
    })
  }

  getName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (<div>
      <label htmlFor="">
        <input onChange={this.getName} type="text" value={this.state.name}/>
      </label>
      <button onClick={this.addName}>Add Name</button>
      <NameList list={this.state.list}/>
    </div>)
  }
}

export default ListWrapper;
