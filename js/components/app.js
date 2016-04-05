import React from 'react';

import PushableButton from '../containers/pusshable-button'
import UpdatableDisplay from '../containers/updatable-display'

const App = () => (
    <div id="application">
        <div id="header">
            <PushableButton buttonId={0} />
            <PushableButton buttonId={1} />
        </div>
        <UpdatableDisplay />
    </div>
);

export default App