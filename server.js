var ws = require('ws');
var connect = require('connect');
var http = require('http');
var serveStatic = require('serve-static');

var wss = new ws.Server({ port: 5001 });

var socket;

wss.on('connection', function connection(ws) {
    socket = ws;
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        // setTimeout(function () {
        //     ws.send("Tack");
        // }, 1000);
    });
});

var app = connect();

app.use("/0", function (req, res) {
    socket.send(JSON.stringify({id: 0}));
    res.end();
});

app.use("/1", function (req, res) {
    socket.send(JSON.stringify({id: 1}));
    res.end();
});

app.use("/", serveStatic(__dirname + "/public"));

http.createServer(app).listen(5000);