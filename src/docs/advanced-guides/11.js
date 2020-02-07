import React from 'react';

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    handleMouseMove = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    render() {
        const { renderContent } = this.props
        return (
            <div style={{height: '300px'}} onMouseMove={this.handleMouseMove}>
                {renderContent(this.state)}
            </div>
        )
    }
}

const App = () => (
    <Mouse renderContent={(mouse) => (
        <div>{mouse.x} & {mouse.y}</div>
    )} />
)

export default App
