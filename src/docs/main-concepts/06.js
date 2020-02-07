import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }

  handleClick = () => {
    // 注意需要返回一个对象
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  handleClickWithParams(params, e) {
    console.log(params, e);
  }

  render() {
    return (
      <div>
        {/* 绑定一个函数 */}
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        {/* 给事件传递参数 */}
        <button onClick={e => this.handleClickWithParams({id: 1}, e)}>箭头函数</button>
        <button
          onClick={this.handleClickWithParams.bind(this, { id: 1 })}
        >bind绑定</button>
      </div>
    );
  }
}

export default Toggle;
