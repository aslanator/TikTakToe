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
}

const initial = function(action, state) {
    state.squares = action.squares;
    state.nextIsX = true;
    return state;
};

const checkSquare = function(action, state){
    let winner;
    state = {...state};
    state.squares = [...state.squares];
    state.squares[action.x][action.y] = state.nextIsX ? 'X' : 'O';
    state.nextIsX = !state.nextIsX;
    if(null !== (winner = calculateWinner(state.squares))){
        state.winner = winner;
    }
    return state;
};

export default (state = {}, action) => {
    switch (action.type) {
        case 'INITIAL_STATE':
            return initial(action, state);
        case 'CHECK':
            return checkSquare(action, state);
        default:
            return state
    }
}