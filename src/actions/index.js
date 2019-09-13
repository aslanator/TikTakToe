export const getInitialState = () => ({
    type: "INITIAL_STATE",
    squares: [
        [null, 2, 3],
        [null, null, null],
        [null, null, null]
    ],
});

export const check = (x, y) => ({
    type: "CHECK",
    x: x,
    y: y
});