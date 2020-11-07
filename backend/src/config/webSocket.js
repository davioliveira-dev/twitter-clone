const socketio = require('socket.io');
const server = require('../server');
const io = socketio(server);

function setupWebSocket(req, res, next) {
  req.io = io;
  return next();
}

module.exports = setupWebSocket;
