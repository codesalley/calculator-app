import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { total, next } = this.props;
    return (
      <div className="result-card">
        <p className="input-res">{next}</p>
        <p className="cal-res">{total}</p>
      </div>
    );
  }
}

Display.prototypes = {
  total: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  total: '0',
  next: '0',
};

export default Display;
