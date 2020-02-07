import React from 'react';

const FancyButton = React.forwardRef((props, ref) => {
    return (
        <button ref={ref}>
            {props.children}
        </button>
    )
})

const ref = React.createRef()

const App = () => (<div>
    <FancyButton ref={ref}>button</FancyButton>
</div>)

console.log(ref)

export default App
