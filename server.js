var ws = require('ws');
var connect = require('connect');
var http = require('http');
var serveStatic = require('serve-static');

var app = connect();

app.use("/", serveStatic(__dirname + "/public"));

var wss = new ws.Server({ port: 5001 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        setTimeout(function () {
            ws.send("Tack");
        }, 1000);
    });
});

http.createServer(app).listen(5000);