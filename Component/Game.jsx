import React from 'react';
require('font-awesome/css/font-awesome.min.css');
import 'bootstrap/dist/css/bootstrap.min.css';

const Stars = (props) => {
    return (
        <div class="col-5">
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
            =
        </div>
    );
}

const Answer = (props) => {
    return (
        <div>
            ...
        </div>
    );
}

class Game extends React.Component {
    render() {
        return (
            <div class="container">
                <h3>Play Nine</h3>
                <hr />
                <div class="row">
                    <Stars />
                    <Button />
                    <Answer />
                </div>
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