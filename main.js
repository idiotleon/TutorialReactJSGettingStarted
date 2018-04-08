import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App.jsx';
import Card from './Component/Card.jsx';

let data = [
    {
        name: "Paul O'Shannessy",
        avatar_url: "https://avatars1.githubusercontent.com/u/8445?v=4",
        company: "Facebook"
    }, {
        name: "Ben Alpert",
        avatar_url: "https://avatars0.githubusercontent.com/u/7585659?v=4",
        company: "Facebook"
    }
];

ReactDOM.render(<Card cards={data} />, document.getElementById('app'));