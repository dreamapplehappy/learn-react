/**
 * Add Custom propType Validation to React Components
 */

import React from 'react';

class App extends React.Component {
    render() {
        return <Title txt="hello,world"/>
    }
}

const Title = (props) => <h1>{props.txt}</h1>;

Title.propTypes = {
    txt(props, propName, componentName) {
        // 判断是否存在txt属性，不存在返回一个错误
        if(!(propName in props)) {
            return new Error(`component ${componentName}'s ${propName} was required!`);
        }
        // 上面的if语句判断txt是否存在，如果存在的话，然后判断属性的值的长度是否满足需求
        if(props[propName].length < 6) {
            return new Error(`component ${componentName}'s ${propName} length was short!`)
        }
    }
};

export default App

