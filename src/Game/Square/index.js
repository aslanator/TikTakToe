import React from 'react';
import {connect} from "react-redux";
import './style.scss';


class Square extends React.Component {

    render() {
        return (
            <button className="square" onClick={this.props.test.bind(null, 5)} >
                {this.props.value}
            </button>
        )
    }

}


const mapStateToProps = (state) => ({
    squares: [],
    xIsNext: true,
});

const mapDispatchToProps = {
    test: (x) => (
        {
            type: "TEST",
            payload: {
                x: x,
                y: '0'
            }
        }
    )
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Square)