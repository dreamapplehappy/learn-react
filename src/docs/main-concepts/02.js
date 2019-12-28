import React from 'react';

// const name = 'dreamapple';
// const App = () => <h1>Hello, {name}</h1>;

// JavaScript 表达式
const user = {
    firstName: 'dream',
    lastName: 'apple'
};
const formatName = (user) => `${user.firstName} ${user.lastName}`;
const App = () => <h1>{formatName(user)}</h1>;
// console.log(<h1>12</h1>)


export default App
