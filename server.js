var webSocketServer = require('ws').Server;
var connect = require('connect');
var serveStatic = require('serve-static');


connect().use(serveStatic(__dirname)).listen(5000, function () {
    console.log('Server running on 5000...');
});

var wss = new webSocketServer({ port: 5001 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        setTimeout(function () {
            ws.send(JSON.stringify("Tack"));
        }, 1000);
    });
});