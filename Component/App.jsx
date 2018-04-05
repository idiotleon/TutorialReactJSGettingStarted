import React from 'react';

class Button extends React.Component {
    state = { counter: 0 };

    handleClick = () => {
        // "this"[keyword] refers to the component instance
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.counter}
            </button>
        );
    }
}

const Result = (props) => {
    return (
        <div>...</div>
    );
};

/*
*   Parent <div> is necessary.
*   React component can only return 1 element.
*   Cannot return multiple JSON elements
*/
class App extends React.Component {
    render() {
        return (
            <div>
                <Button />
                <Result />
            </div>
        );
    }
}

export default App;