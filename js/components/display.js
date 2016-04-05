import React from 'react';

const Display = ({selectedButtonId}) => (
    <div id="display">
        Selected button: #{selectedButtonId}.
    </div>
);

Display.propTypes = {
    selectedButtonId: React.PropTypes.number.isRequired
};

export default Display