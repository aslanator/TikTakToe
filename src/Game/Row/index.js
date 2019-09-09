import React from 'react';
import Square from "../Square";
import './style.scss';

export default class Row extends React.Component {
    squares;

    render() {
        return (
            <div className="row">
                {
                    this.props.squares.map((value, key) => {
                        return (
                            <Square value={value} key={key} x={this.props.x} y={key} handleClick={this.props.handleClick}/>
                        );
                    })
                }
            </div>
        )
    }
}