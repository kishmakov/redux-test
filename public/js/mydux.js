import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import chooseButton from './reducers/choose-button'
import App from './components/app'

let store = createStore(chooseButton);

var socketUrl = 'ws://localhost:5001'
var socket = new WebSocket(socketUrl);

socket.onopen = function () {
    setTimeout(function () {
        socket.send(JSON.stringify("Tick"));
    }, 1000);
};

socket.onmessage = function (message) {
    console.log('Received: ' + JSON.stringify(message.data))

    setTimeout(function () {
        socket.send(JSON.stringify("Tick"));
    }, 1000);
};

socket.onerror = function (error) {
    console.error("websocket error: " + error);
};

// socket.onopen = function () {
//     setInterval(function () {
//         socket.send(JSON.stringify("Tick"));
//     }, 1000);
// };

// $('form#emit').submit(function(event) {
//     socket.emit('my event', {data: $('#emit_data').val()});
//     return false;
// });
// $('form#broadcast').submit(function(event) {
//     socket.emit('my broadcast event', {data: $('#broadcast_data').val()});
//     return false;
// });

// socket.emit('my event', {data: '239'});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('body')
);



