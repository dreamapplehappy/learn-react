import React from 'react';

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

const ThemeContext = React.createContext({
    theme: themes.light,
    toggleTheme: () => {
        console.log(233)
    }
})

const ThemeTogglerButton = () => {
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button onClick={toggleTheme}
                        style={{backgroundColor: theme.background}}>
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        }
    }

    toggleTheme = () => {
        console.log(1)
        this.setState((state) => ({
            theme: state.theme === themes.light ? themes.dark : themes.light
        }))
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <div>
                    <ThemeTogglerButton />
                </div>
            </ThemeContext.Provider>
        )
    }
}

export default App
