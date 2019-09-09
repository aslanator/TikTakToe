import React from 'react';

import './style.scss';


export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    handleClick(){
        this.props.handleClick(this.props.x, this.props.y);
    }


    render() {
        return (
            <button className="square" onClick={this.handleClick.bind(this)} >
                {this.props.value}
            </button>
        )
    }

}