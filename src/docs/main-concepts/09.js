import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      content: '介绍一下你自己。',
      fruit: 'apple',
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleContentChange = e => {
    this.setState({
      content: e.target.value,
    });
  };

  handleFruitChange = e => {
    this.setState({
      fruit: e.target.value,
    });
  };

  handleSubmit = e => {
    alert(`${this.state.value}\n${this.state.content}\n${this.state.fruit}`);
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          介绍:
          <textarea
            value={this.state.content}
            onChange={this.handleContentChange}
            cols="30"
            rows="10"
          />
        </label>
        <label>
          选择你喜欢的水果：
          <select value={this.state.fruit} onChange={this.handleFruitChange}>
            <option value="apple">苹果</option>
            <option value="orange">橘子</option>
            <option value="pear">梨</option>
          </select>
        </label>
        {/*<label>*/}
        {/*  <input value="hi" />*/}
        {/*</label>*/}
        <input type="submit" value="提交" />
      </form>
    );
  }
}

const App = () => <NameForm />;

export default App;
