import React from 'react';

class App extends React.Component {
    state = {
        counter: 0
    }
    render() {
        return (
            <button>{this.state.counter}</button>
        );
    }
}

export default App;