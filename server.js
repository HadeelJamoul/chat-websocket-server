// server.js
const WebSocket = require("ws");
const { broadcastMessage } = require("./utils/broadcaster");

function createWebSocketServer(port = 10000) {
  const wss = new WebSocket.Server({ port: process.env.PORT || 10000 });

  console.log(`✅ WebSocket server running on port ${port}`);

  wss.on("connection", function connection(ws) {
    ws.on("message", function incoming(data) {
      try {
        const message = data.toString();
        console.log("Received:", message);

        broadcastMessage(wss, message);
      } catch (err) {
        console.error("Failed to handle message:", err);
      }
    });
  });
}

module.exports = { createWebSocketServer };
