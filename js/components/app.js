import React from 'react';

import AccountDisplay from '../containers/account-display'
import AccountContributor from '../containers/account-contributor'

const App = () => (
    <div>
        <h1>Super App</h1>
        <AccountDisplay />
        <AccountContributor />
    </div>
)

export default App