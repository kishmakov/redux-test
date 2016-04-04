import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import incApp from './reducers/inc-app'
import App from './components/app'

let store = createStore(incApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('body')
);



