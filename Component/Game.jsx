import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/main.css';

var _ = require('lodash');

const Stars = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random() * 9);

    let stars = [];
    for (let i = 0; i < numberOfStars; i++) {
        stars.push(<i key={i} className="fa fa-star" />);
    }

    return (
        <div class="col-5">
            {stars}
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

const Numbers = (props) => {
    const arrayOfNumbers = _.range(1, 10);

    return (
        <div className="class text-center">
            <div>
                {arrayOfNumbers.map((number, i) =>
                    <span key={i}>{number}</span>)}
            </div>
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