/**
 * Write More Reusable React Components with Composable APIs
 */

import React from 'react';
import PropTypes from 'prop-types';

class NumInput extends React.Component {

    render() {
        const label = this.props.label ? <label>{this.props.label} - {this.props.val}</label> : '';
        return (
            <div>
                <input
                    type={this.props.type}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    defaultValue={this.props.val}
                    onChange={this.props.update}
                />
                {label}
            </div>
        )
    }
}

NumInput.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    val: PropTypes.number,
    label: PropTypes.string,
    update: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
    min: 0,
    max: 10,
    step: 1,
    val: 0,
    label: '',
    type: 'range'
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 5
        }
    }

    onChangeHander = (e) => {
        this.setState({
            val: +e.target.value
        })
    }

    render() {
        return (
            <NumInput min={0}
                      max={10}
                      step={1}
                      type="range"
                      val={this.state.val}
                      update={this.onChangeHander}
                      label="value"
            />
        )
    }
}

export default App;
