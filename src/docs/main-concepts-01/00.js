import React from 'react';

// const ele = () => <h1>Hello, World!</h1>;

const NumberList = (props) => {
  const { list } = props;
  const listEle = list.map((n) => (<li key={n}>{n}</li>));
  return listEle;
}

const ele = () => (<div>
  <NumberList list={[1, 3, 5, 7]}/>
  <input type="text" value={'ass'} readOnly={true} />
</div>)
export default ele;
