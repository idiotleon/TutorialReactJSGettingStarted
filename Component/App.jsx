import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <Button />
            </div>
        );
    }
}

const Button = function () {
    return (
        <button>Go</button>
    );
};

export default App;