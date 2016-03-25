import { connect } from 'react-redux'
import Display from '../components/display'

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}

const AccountDisplay = connect(mapStateToProps)(Display)

export default AccountDisplay