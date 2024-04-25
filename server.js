const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('Client connected');

    ws.on('message', function incoming(message) {
        console.log('Received message:', message);
        const data = JSON.parse(message);
        const response = {
            name: data.name,
            email: data.email.toUpperCase(), // just an example of processing
            mobile: data.mobile // include mobile number in response
        };
        ws.send(JSON.stringify(response));
    });

    ws.on('close', function close() {
        console.log('Client disconnected');
    });
});
