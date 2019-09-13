import React from 'react';
import Field from './Game/Field';
import {connect} from 'react-redux';
import './Game.scss';


function Game({nextSymbol}) {
    const status = `Next player: ${nextSymbol}`;
    return (
    <div className="Game" >
        <p>{status}</p>
        <Field/>
    </div>
    );
}

const mapStateToProps = (state)=> ({
    nextSymbol: state.nextIsX ? 'X' : 'O'
});

export default connect(mapStateToProps)(Game);
