import React from 'react';

const FancyBorder = (props) => {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

const WelcomeDialog = () => {
    return (
        <FancyBorder color='blue'>
            <h1 className='Dialog-title'>Welcome</h1>
            <p className='Dialog-message'>thank you for visiting our spacecraft!</p>
        </FancyBorder>
    )
}

const App = () => {
    return (
        <WelcomeDialog />
    )
}

export default App
