import React from 'react';
import Row from '../Row';


import './style.scss';

export default  class Field extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            squares: [[null, null, null],
                [null, null, null],
                [null, null, null]],
            xIsNext: true,
        }
    }

    handleClick(x, y) {
        let squares = this.state.squares.slice();
        if(typeof y === 'undefined' ||
            typeof x === 'undefined' ||
        squares[x][y] !== null)
            return false;
        squares[x][y] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    render () {

        return (

          <div className="field">
              {this.state.squares.map((squares, key) => {
                 return (<Row className="Row" squares={squares} key={key} x={key} />);
              })}
          </div>
        )
    }
}
