const initialState = {
    squares: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
};

const checkSquare = function(action){
    console.log(action);
};

const test = function(action){
  console.log(action);
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHECK':
            return checkSquare(action);
        case 'TEST':
            return test(action);
        default:
            return state
    }
}