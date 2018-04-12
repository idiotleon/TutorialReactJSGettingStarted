import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/main.css';

var _ = require('lodash');

const Stars = (props) => {

    return (
        <div class="col-5">
            {_.range(props.numberOfStars).map(i =>
                <i key={i} className="fa fa-star"></i>
            )}
        </div>
    );
}

const Button = (props) => {
    return (
        <div className="col-2">
            <button disabled={props.selectedNumbers.length === 0}>
                =
            </button>
        </div>
    );
}

const Answer = (props) => {
    return (
        <div>
            <div className="col-5">
                {props.selectedNumbers.map((number, i) =>
                    <span key={i}
                        onClick={() => props.unselectNumber(number)}>
                        {number}
                    </span>
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
        selectedNumbers: [],
        randomNumberOfStars: 1 + Math.floor(Math.random() * 9)
    };

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
            return;
        }
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };

    unselectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
            this.setState(prevState => ({
                selectedNumbers: prevState.selectedNumbers
                    .filter(number => number != clickedNumber)
            }));
        }
    }

    render() {
        const { selectedNumbers, randomNumberOfStars } = this.state;
        return (
            <div class="container">
                <h3>Play Nine</h3>
                <hr />
                <div class="row">
                    <Stars numberOfStars={randomNumberOfStars} />
                    <Button selectedNumbers={selectedNumbers} />
                    <Answer selectedNumbers={selectedNumbers}
                        unselectNumber={this.unselectNumber} />
                </div>
                <br />
                <Numbers selectedNumbers={selectedNumbers}
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