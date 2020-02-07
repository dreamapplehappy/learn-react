import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
}

const toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
}

const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature)
    if(Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) /1000
    return rounded.toString()
}

const BoilingVerdict = (props) => {
    const { celsius } = props
    let info
    if(celsius >= 100) {
        info = 'The water would boil'
    } else {
        info = 'The water would not boil'
    }
    return <p>{info}</p>
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        const { value } = e.target
        const { onTemperatureChange } = this.props
        onTemperatureChange(value)
    }

    render() {
        const { scale, temperature } = this.props
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    handleCelsiusChange = (temperature) => {
        this.setState({
            temperature,
            scale: 'c'
        })
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({
            temperature,
            scale: 'f'
        })
    }

    render() {
        const { scale, temperature } = this.state
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius): temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit): temperature
        return (
            <div>
                <TemperatureInput temperature={celsius} onTemperatureChange={this.handleCelsiusChange} scale="c" />
                <TemperatureInput temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} scale="f" />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

const App = () => {
    return (<Calculator />)
};

export default App;
