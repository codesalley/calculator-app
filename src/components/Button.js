/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.Component {
  render() {
    const { number, color, onclick } = this.props;
    return (
      <button type="button" className={color} onClick={() => onclick(number)}>
        {' '}
        {number}
        {' '}
      </button>

    );
  }
}

Button.prototypes = {
  color: PropTypes.bool,
  number: PropTypes.array,
  onclick: PropTypes.func,
};

Button.defaultProps = {
  number: 0,
  color: false,
};

export default Button;
