import React from 'react';
import Row from '../Row';
import { connect } from 'react-redux';

import './style.scss';

class Field extends React.Component {

    render () {

        return (
          <div className="field">
              {console.log('field', this.props)}
              {this.props.squares.map((squares, key) => {
                 return (<Row className="Row" squares={squares} key={key} x={key} />);
              })}
          </div>
        )
    }
}

const mapStateToProps = (state) => ({
    squares: state.squares
});

export default connect(
    mapStateToProps
)(Field);