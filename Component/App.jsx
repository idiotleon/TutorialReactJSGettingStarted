import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <button>{this.state.counter}</button>
        );
    }
}

export default App;