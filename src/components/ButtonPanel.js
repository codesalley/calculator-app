/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div>
        <div>
          {' '}
          <Button number="AC" color={false} />
          <Button number="+/-" color={false} />
          <Button number="%" color={false} />
          <Button number="÷" color={false} />
          {' '}
        </div>
        <div>
          <Button number="7" color />
          <Button number="8" color />
          <Button number="9" color />
          <Button number="X" color={false} />
        </div>
        <div>
          <Button number="4" color />
          <Button number="5" color />
          <Button number="6" color />
          <Button number="-" color="yellow" />

        </div>
        <div>
          <Button number="1" color />
          <Button number="2" color />
          <Button number="3" color />
          <Button number="+" color />
        </div>
        <div>
          <Button number="0" color />
          <Button number="." color />
          <Button number="=" color />

        </div>
      </div>
    );
  }
}

export default ButtonPanel;
