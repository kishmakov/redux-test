import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { increment } from '../actions'

const Button = ({dispatch}) => (
    <button onClick={() => {dispatch(increment(1))}}>+1</button>
)

const AccountContributor = connect()(Button)

export default AccountContributor