import React from 'react';

const Card = (props) => {
    return (
        <div style={{ margin: '1em' }}>
            <img src="http://placeholder.it/75" />
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>Name here...</div>
                <div>Company Name here...</div>
            </div>
        </div>
    );
};

class CardList extends React.Component {

    render() {
        return (
            <div>
                <Card />
            </div>
        );
    }
}

export default CardList;