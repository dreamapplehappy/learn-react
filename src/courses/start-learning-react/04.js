/**
 * Set Properties on React Components
 */

import React from 'react'
import PropTypes from 'prop-types'

class Demo extends React.Component {
    render() {
        const {txt} = this.props
        return (<h1>{txt}</h1>)
    }
}

Demo.propTypes = {
    txt: PropTypes.string.isRequired
}

Demo.defaultProps = {
    txt: 'Hello'
}

const App = () => <Demo />

export default App
