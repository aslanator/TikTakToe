import React from 'react';
import Row from '../Row';
import fieldData from './data.js';

import './style.scss';

class Field extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            squares: fieldData
        }
    }

    handleClick(x, y) {
        if(typeof y === 'undefined' || typeof x === 'undefined')
            return false;
        let squares = this.state.squares;
        squares[x][y] = 'X';

        this.setState({
            squares: squares
        });
    }

    render () {

        return (

          <div className="field">
              {this.state.squares.map((squares, key) => {
                 return (<Row className="Row" squares={squares} key={key} x={key} handleClick={this.handleClick.bind(this)} />);
              })}
          </div>
        )
    }
}

export default Field;