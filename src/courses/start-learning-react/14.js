/**
 * Use map to Create React Components from Arrays of Data
 */

import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentWillMount() {
        fetch('https://swapi.co/api/people/?format=json')
            .then((response) => response.json())
            .then(({results}) => this.setState({
                items: results
            }))
    }

    filter = (e) => {
        this.setState({
            filterStr: e.target.value
        })
    }

    render() {
        let items = this.state.items;
        if(this.state.filterStr) {
            items = items.filter(item => item.name.toLowerCase().includes(this.state.filterStr.toLowerCase()))
        }
        return (
            <div>
                <input type="text" onChange={this.filter}/>
                {items.map(item => <People key={item.name} people={item} />)}
            </div>
        )
    }
}

const People = (props) => <h4>{props.people.name}</h4>

export default App;
