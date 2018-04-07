import React from 'react';

const Card = (props) => {
    return (
        <div style={{ margin: '1em' }}>
            <img width="75" src="https://avatars1.githubusercontent.com/u/8445?v=4" />
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>Name here...</div>
                <div>Company Name here...</div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    return (
        <div>
            <Card />
        </div>
    );
}

export default CardList;