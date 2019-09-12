import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux'
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


const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        test: () => dispatch({ type: 'TEST' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        reset: () => dispatch({ type: 'RESET' })
    }
}

export default connect(
    null,
    mapDispatchToProps,
)(Square)