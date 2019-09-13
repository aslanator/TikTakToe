import React from 'react';
import {connect} from "react-redux";
import {check} from '../../actions';
import './style.scss';


class Square extends React.Component {

    render() {
        return (
            <button className="square" onClick={this.props.check.bind(null, this.props.x, this.props.y)} >
                {this.props.value}
            </button>
        )
    }

}


const mapDispatchToProps = dispatch => {
    return {
        test: () => dispatch({ type: 'TEST' }),
        check: (x, y) => {
            dispatch(check(x, y));
        }
    }
}

export default connect(
    null,
    mapDispatchToProps,
)(Square)