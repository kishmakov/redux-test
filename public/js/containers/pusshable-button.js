import {connect} from 'react-redux'
import Button from '../components/button'
import { choose } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        selected: ownProps.buttonId === state.selectedButtonId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        chooseButton: (buttonId) => { dispatch(choose(buttonId)) }
    }
};

const PushableButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default PushableButton