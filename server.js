const WebSocket = require('ws');
const PORT = process.env.PORT || 10000

const server = new WebSocket.Server({ port: PORT });

let clients = [];

server.on('connection', (ws) => {
    clients.push(ws);

    ws.on('message', (message) => {
        // Convert Buffer to string
        const text = message.toString();
        clients.forEach(client => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(text);
        }
        });
    });


    ws.on('close', () => {
        clients = clients.filter(client => client )
    })
});

console.log(`✅ WebSocket server running on port ${PORT}`);
