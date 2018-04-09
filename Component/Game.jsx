import React from 'react';
require('font-awesome/css/font-awesome.min.css');

const Stars = (props) => {
    return (
        <div>
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
        </div>
    );
}

const Button = (props) => {
    return (
        <div>
            Btn
        </div>
    );
}

const Answer = (props) => {
    return (
        <div>
            Answer
        </div>
    );
}

class Game extends React.Component {
    render() {
        return (
            <div>
                <h3>Play Nine</h3>
                <Stars />
                <Button />
                <Answer />
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Game />
            </div>
        );
    }
}

export default App;