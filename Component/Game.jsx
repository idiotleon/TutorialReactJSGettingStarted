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
                {props.selectedNumbers.map((number, i) =>
                    <span key={i}>{number}</span>
                )}
            </div>
        </div>
    );
}

const Numbers = (props) => {
    const numberClassName = (number) => {
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
        }
    }

    return (
        <div className="class text-center">
            <div>
                {Numbers.list.map((number, i) =>
                    <span key={i} className={numberClassName(number)}
                        onClick={() => props.selectNumber(number)}>
                        {number}
                    </span>
                )}
            </div>
        </div>
    );
}
Numbers.list = _.range(1, 10);

class Game extends React.Component {
    state = {
        selectedNumbers: [2, 4]
    };

    selectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };

    render() {
        return (
            <div class="container">
                <h3>Play Nine</h3>
                <hr />
                <div class="row">
                    <Stars />
                    <Button />
                    <Answer selectedNumbers={this.state.selectedNumbers} />
                </div>
                <br />
                <Numbers selectedNumbers={this.state.selectedNumbers}
                    selectNumber={this.selectNumber} />
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