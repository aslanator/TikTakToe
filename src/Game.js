import React from 'react';
import Field from './Game/Field';
import {connect} from 'react-redux';
import './Game.scss';


function Game({nextSymbol, winner}) {
    const status = `Next player: ${nextSymbol}`;
    return (
    <div className="Game" >
        {!winner ? (
            <div>
                <p>{status}</p>
                <Field />
            </div>
            ) : (
            <div className="winner">
                Winner is: {winner}
            </div>
        ) }
    </div>
    );
}

const mapStateToProps = (state)=> ({
    nextSymbol: state.nextIsX ? 'X' : 'O',
    winner: state.winner
});

export default connect(mapStateToProps)(Game);
