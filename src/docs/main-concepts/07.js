import React from 'react'

const SayHello = props => {
    if(props.canSay) {
        return <p>Hello</p>
    } else {
        return null
    }
}

// 登录按钮
const LoginBtn = (props) => {
    return (
        <button onClick={props.onClick}>登录</button>
    )
}

// 登录按钮
const LogoutBtn = (props) => {
    return (
        <button onClick={props.onClick}>退出</button>
    )
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    // 登录逻辑
    handleLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    // 登出逻辑
    handleLogout = () => {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        const { isLoggedIn } = this.state;
        let button;
        if(isLoggedIn) {
            button = <LogoutBtn onClick={this.handleLogout} />
        } else {
            button = <LoginBtn onClick={this.handleLogin} />
        }

        return (
            <div>
                {button}
                { 1 > 0 && <p>Hello, World</p>}
                {isLoggedIn ? '欢迎' : '你好，世界'}
                <SayHello canSay={isLoggedIn} />
            </div>
        )
    }
}

export default LoginControl;
