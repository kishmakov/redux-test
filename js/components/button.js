import React from 'react';

const Button = ({buttonId, selected, chooseButton}) => (
    <div className="header_button_wrapper">
        <div className={"header_button" + (selected ? " selected" : "")} onClick={chooseButton.bind(this, buttonId)} ></div>
    </div>
);

Button.propTypes = {
    buttonId: React.PropTypes.number.isRequired,
    selected: React.PropTypes.bool.isRequired,
    chooseButton: React.PropTypes.func.isRequired
};

export default Button