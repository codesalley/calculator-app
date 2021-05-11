/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPanel.css';

class ButtonPanel extends React.Component {
  render() {
    const { onclick } = this.props;
    return (
      <div className="buton-list">
        <div className="btn-group">
          {' '}
          <Button number="AC" color="btn-dark btn" onclick={onclick} />
          <Button number="+/-" color="btn-dark btn" onclick={onclick} />
          <Button number="%" color="btn-dark btn" onclick={onclick} />
          <Button number="÷" color="btn-yellow btn" onclick={onclick} />
          {' '}
        </div>
        <div className="btn-group">
          <Button number="7" color="btn-white btn" onclick={onclick} />
          <Button number="8" color="btn-white btn" onclick={onclick} />
          <Button number="9" color="btn-white btn" onclick={onclick} />
          <Button number="X" color="btn-yellow btn" onclick={onclick} />
        </div>
        <div className="btn-group">
          <Button number="4" color="btn-white btn" onclick={onclick} />
          <Button number="5" color="btn-white btn" onclick={onclick} />
          <Button number="6" color="btn-white btn" onclick={onclick} />
          <Button number="-" color="btn-yellow btn" onclick={onclick} />
        </div>
        <div className="btn-group">
          <Button number="1" color="btn-white btn" onclick={onclick} />
          <Button number="2" color="btn-white btn" onclick={onclick} />
          <Button number="3" color="btn-white btn" onclick={onclick} />
          <Button number="+" color="btn-yellow btn" onclick={onclick} />
        </div>
        <div className="last-group">
          <Button number="0" color=" zero-btn btn-last-color" onclick={onclick} />
          <Button number="." color=" last-btn btn-last-color" onclick={onclick} />
          <Button number="=" color=" last-btn btn-yellow " onclick={onclick} />
        </div>
      </div>
    );
  }
}
ButtonPanel.prototypes = {
  onclick: PropTypes.func,
};

export default ButtonPanel;
