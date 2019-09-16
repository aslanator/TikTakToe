import React from 'react';
import Square from "../Square";
import './style.scss';

export default class Row extends React.Component {
    render() {
        return (
            <div className="row">
                {console.log('row', this.props)}
                {
                    this.props.squares.map((value, key) => {
                        return (
                            <Square value={value} key={key} x={this.props.x} y={key} />
                        );
                    })
                }
            </div>
        )
    }
}