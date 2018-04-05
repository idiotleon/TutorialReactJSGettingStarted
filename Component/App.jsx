import React from 'react';

class Button extends React.Component {

    handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue);
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                +{this.props.incrementValue}
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

    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue
        }));
    };

    render() {
        return (
            <div>
                <Button incrementValue={1} onClickFunction={this.incrementCounter} />
                <Button incrementValue={5} onClickFunction={this.incrementCounter} />
                <Button incrementValue={10} onClickFunction={this.incrementCounter} />
                <Button incrementValue={100} onClickFunction={this.incrementCounter} />
                <Result counter={this.state.counter} />
            </div>
        );
    }
}

export default App;