import React from 'react';
import Row from '../Row';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';

import './style.scss';

class Field extends React.Component {

    render () {

        return (
          <div className="field">
              {console.log('field', this.props)}
              {this.props.squares.map((squares, key) => {
                 return (<Row className="Row" squares={squares} key={key} x={key} />);
              })}
              <button onClick={this.props.undo}>Undo</button>
          </div>
        )
    }
}

const mapStateToProps = (state) => ({
    squares: state.present.squares,
});

const mapDispatchToProps = dispatch => (
    {
        undo: () => dispatch(ActionCreators.undo()),
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Field);