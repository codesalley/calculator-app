import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { result } = this.props;
    return (
      <div className="result-card">
        <p className="input-res">
          2 * 0
        </p>
        <p className="cal-res">
          {result}
        </p>
      </div>
    );
  }
}

Display.prototypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
