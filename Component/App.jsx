import React from 'react';

class Button extends React.Component {

    render() {
        return (
            <button onClick={this.props.onClickFunction}>
                +1
            </button>
        );
    }
}

const Result = (props) => {
    return (
        <div>{props.counter}</div>
    );
};

/*
*   Parent <div> is necessary.
*   React component can only return 1 element.
*   Cannot return multiple JSON elements
*/
class App extends React.Component {
    // the state of a component is only accessible to that component only
    // thus we have to move the 'state' one level upper, which is the App component
    state = { counter: 0 };

    incrementCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    };

    render() {
        return (
            <div>
                <Button onClickFunction={this.incrementCounter} />
                <Result counter={this.state.counter} />
            </div>
        );
    }
}

export default App;