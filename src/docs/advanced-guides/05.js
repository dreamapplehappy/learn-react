import React from 'react';

const items = [
    'A', 'B', 'C'
]

const FC = (props) => {
    return (<div>
        {props.items.map((item, index) => (
            <React.Fragment key={item}>
                <div>Hello {item}{index}</div>
                <div>World</div>
            </React.Fragment>
        ))}
    </div>)
}

const App = () => (
    <FC items={items}/>
)

export default App
