/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div className="buton-list">
        <div className="btn-group">
          {' '}
          <Button number="AC" color="operation-black btn" />
          <Button number="+/-" color="operation-black btn" />
          <Button number="%" color="operation-black btn" />
          <Button number="÷" color="operation-yellow btn" />
          {' '}
        </div>
        <div className="btn-group">
          <Button number="7" color="number-white btn" />
          <Button number="8" color="number-white btn" />
          <Button number="9" color="number-white btn" />
          <Button number="X" color="operation-yellow btn" />
        </div>
        <div className="btn-group">
          <Button number="4" color="number-white btn" />
          <Button number="5" color="number-white btn" />
          <Button number="6" color="number-white btn" />
          <Button number="-" color="operation-yellow btn" />

        </div>
        <div className="btn-group">
          <Button number="1" color="number-white btn" />
          <Button number="2" color="number-white btn" />
          <Button number="3" color="number-white btn" />
          <Button number="+" color="operation-yellow btn" />
        </div>
        <div className="last-group">
          <Button number="0" color=" zero-btn" />
          <Button number="." color=" last-btn" />
          <Button number="=" color=" last-btn" />

        </div>
      </div>
    );
  }
}

export default ButtonPanel;
