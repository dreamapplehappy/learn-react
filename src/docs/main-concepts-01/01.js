import React, { Suspense } from 'react';

const TEMP_TYPES = {
  'c': '摄氏度℃',
  'f': '华氏度℉'
}

// 定义转化函数
const toC = (f) => {
  return (f - 32) / 9 * 5;
}
const toF = (c) => {
  return c / 5 * 9 + 32;
}

// 表明水是否是开的
const ShowPanel = (props) => {
  const { c } = props;
  if (c >= 100) {
    return <p>水开了</p>
  }
  return <p>水还没有开</p>
}

// 温度输入
const TempInput = (props) => {
  const { val, label, update } = props;
  return (
    <p>
      <label htmlFor={label}>
        {label}
        <input id={label} type="text" value={val} onChange={update}/>
      </label>
    </p>
  )
}

// 容器
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      type: 'c'
    };
  }

  // 转变输入框的值
  updateCTemp = (e) => {
    this.setState({
      temp: parseInt(e.target.value) || 0,
      type: 'c'
    })
  }

  updateFTemp = (e) => {
    this.setState({
      temp: parseInt(e.target.value) || 0,
      type: 'f'
    })
  }

  showFTemp = (temp, type) => {
    if (type === 'c') {
      return toF(temp)
    }
    return temp;
  }

  showCTemp = (temp, type) => {
    if (type === 'f') {
      return toC(temp)
    }
    return temp;
  }

  render() {
    const { temp, type } = this.state;
    const ListEle = React.lazy(() => new Promise(((resolve, reject) => {
      const timer = setTimeout(() => {
        resolve(import('./00'));
        clearTimeout(timer);
      }, 3000)
    })))
    const HelloWorld = React.lazy(() => import('../main-concepts/01'))
    return (
      <div>
        <TempInput val={this.showCTemp(temp, type)} update={this.updateCTemp} label={TEMP_TYPES['c']}/>
        <TempInput val={this.showFTemp(temp, type)} update={this.updateFTemp} label={TEMP_TYPES['f']}/>
        <ShowPanel c={this.showCTemp(temp, type)} />
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <ListEle />
            <HelloWorld />
          </section>
        </Suspense>
      </div>
    );
  }
}



const ele = () => (<div>
  <Container />
</div>)
export default ele;
