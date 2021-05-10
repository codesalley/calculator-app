import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { result } = this.props;
    return (
      <div>
        {result}
      </div>
    );
  }
}

Display.prototypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '00',
};

export default Display;
