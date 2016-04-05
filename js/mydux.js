import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import chooseButton from './reducers/choose-button'
import App from './components/app'

let store = createStore(chooseButton);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('body')
);



