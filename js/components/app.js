import React from 'react';

import AccountDisplay from '../containers/account-display'
import AccountContributor from '../containers/account-contributor'

const App = () => (
    <div id="application">
        <h1>My Dux</h1>
        <AccountDisplay />
        <AccountContributor />
    </div>
);

export default App