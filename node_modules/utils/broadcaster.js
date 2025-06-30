// utils/broadcaster.js

function broadcastMessage(wss, message) {
    wss.clients.forEach(client => {
        if (client.readyState === 1) {
            client.send(message);
        }
    });
}

module.exports = { broadcastMessage };