import React, { PropTypes } from 'react';

const Display = ({account}) => (
    <p>I have #{account} apples!</p>
)

Display.propTypes = {
  account: React.PropTypes.number.isRequired
}

export default Display