const initial = function(action, state) {
    state.squares = action.squares;
    console.log(state);
    return state;
};

const checkSquare = function(action){
    console.log(action);
};

const test = function(action, state){
    state = {...state};
    state.squares = [...state.squares];
    state.squares[0][0] = 1;
    return state;
};

export default (state = {}, action) => {
    switch (action.type) {
        case 'INITIAL_STATE':
            return initial(action, state);
        case 'CHECK':
            return checkSquare(action);
        case 'TEST':
            return test(action, state);
        default:
            return state
    }
}