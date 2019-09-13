const initial = function(action, state) {
    state.squares = action.squares;
    state.nextIsX = true;
    return state;
};

const checkSquare = function(action, state){
    state = {...state};
    state.squares = [...state.squares];
    state.squares[action.x][action.y] = state.nextIsX ? 'X' : 'O';
    state.nextIsX = !state.nextIsX;
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