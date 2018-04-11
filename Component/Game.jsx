import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/main.css';

var _ = require('lodash');

const Stars = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random() * 9);

    return (
        <div class="col-5">
            {_.range(numberOfStars).map(i =>
                <i key={i} className="fa fa-star"></i>
            )}
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
            <div className="col-5">
                <span>5</span>
                <span>6</span>
            </div>
        </div>
    );
}

const Numbers = (props) => {
    return (
        <div className="class text-center">
            <div>
                {Numbers.list.map((number, i) =>
                    <span key={i}>{number}</span>)}
            </div>
        </div>
    );
}
Numbers.list = _.range(1, 10);

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
                <br />
                <Numbers />
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