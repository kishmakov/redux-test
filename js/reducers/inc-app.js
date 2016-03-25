import { INC_ACCOUNT } from '../actions'

const initialState = {
  account: 0
}

const incApp = function (state = initialState, action) {
  switch (action.type) {
    case INC_ACCOUNT:
      return {
        ...state,
        account: state.account + action.ammount
      }
    default:
      return state
  }
}

export default incApp