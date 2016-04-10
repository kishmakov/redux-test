import {CHOOSE_BUTTON} from '../actions'

const initialState = {
    selectedButtonId: 0
};

const chooseButton = function (state = initialState, action) {
    switch (action.type) {
        case CHOOSE_BUTTON:           
            console.log("selectedButtonId=" + state.selectedButtonId + " buttonId=" + action.buttonId);
            return {
                ...state,
                selectedButtonId: action.buttonId
            };
        default:
            return state
    }
};

export default chooseButton