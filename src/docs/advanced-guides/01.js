import React from 'react';

const ThemeContext = React.createContext('light')

const UserContext = React.createContext({ name: 'dreamapple', age: 25})

const LocalContext = React.createContext({ lang: 'zh-CN'})

class ThemedButton extends React.Component {
    static contextType = ThemeContext;

    render() {

        return (<button theme={this.context}>Hello</button>)
    }
}

const Toolbar = () => {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

class App extends React.Component {
    render() {
        return (
            <div>
                <ThemeContext.Provider value='dark' >
                    <Toolbar />
                </ThemeContext.Provider>
                <UserContext.Consumer>
                    {(user) => {
                        // return <div>{user.name}</div>
                        return (
                            <LocalContext.Consumer>
                                {(local) => {
                                    return <div>{user.name}-{local.lang}</div>
                                }}
                            </LocalContext.Consumer>
                        )
                    }}
                </UserContext.Consumer>
            </div>
        )
    }
}

export default App
