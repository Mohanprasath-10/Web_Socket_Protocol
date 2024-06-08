const fs = require('fs');
const WebSocket = require('ws');
const express = require('express');
const app = express();
const port = 3000;

let jsonData = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    city: 'New York',
    age: 25  // Added default age
};

// Load initial data from a JSON file if it exists
const dataFile = 'data.json';
if (fs.existsSync(dataFile)) {
    jsonData = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
}

// Serve static files
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    console.log('Client connected');
    ws.send(JSON.stringify(jsonData));

    ws.on('message', message => {
        console.log('Received: %s', message);
        const updatedData = JSON.parse(message);
        jsonData = { ...jsonData, ...updatedData };

        // Save updated data to JSON file
        fs.writeFileSync(dataFile, JSON.stringify(jsonData, null, 2));

        // Broadcast updated data to all connected clients
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(jsonData));
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log(`WebSocket server is listening on port 8080`);
