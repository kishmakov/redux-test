import {connect} from 'react-redux'
import Display from '../components/display'

const mapStateToProps = (state) => {
    return {
        selectedButtonId: state.selectedButtonId
    }
};

const UpdatableDisplay = connect(mapStateToProps)(Display);

export default UpdatableDisplay
