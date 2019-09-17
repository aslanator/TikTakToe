import undoable from 'redux-undo';

const calculateWinner = (squares) => {
    const lines = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],
    ];
    for (let line of lines) {
        const [[ay, ax], [by, bx], [cy, cx]] = line;
        if (squares[ay][ax] && squares[ay][ax] === squares[by][bx] && squares[ay][ax] === squares[cy][cx]) {
            return squares[ay][ax];
        }
    }
    return null;
};

const initial = function(action, state) {
    state.squares = action.squares;
    state.nextIsX = true;
    return state;
};

const checkSquare = function(action, state){
    let winner;
    state = JSON.parse(JSON.stringify(state));
    state.squares[action.x][action.y] = state.nextIsX ? 'X' : 'O';
    state.nextIsX = !state.nextIsX;
    if(null !== (winner = calculateWinner(state.squares))){
        state.winner = winner;
    }
    return state;
};

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'INITIAL_STATE':
            return initial(action, state);
        case 'CHECK':
            return checkSquare(action, state);
        default:
            return state
    }
};

const undoableReducer = undoable(reducer, {debug: true});

export default undoableReducer;