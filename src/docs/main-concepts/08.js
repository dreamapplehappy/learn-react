import React from 'react';

const numbers = [1, 2, 3, 4, 5, 6]
const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>)

const NumberList = props => {
    const { numbers } = props;
    const list = numbers.map((item) => <li key={item.toString()}>{item}</li>)
    return (<ul>{list}</ul>)
}

const App = () => (<div>
    <ul>{listItems}</ul>
    <NumberList numbers={numbers} />
    <ul>{numbers.map((number) => <li key={number.toString()}>{number}</li>)}</ul>
</div>)

export default App
