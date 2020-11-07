const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socketio = require('socket.io');

const routes = require('./routes');

const app = express();

const io = socketio(server);

mongoose.connect('mongodb+srv://davi:davi@cluster0-wtj9f.gcp.mongodb.net/twitter?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(cors());

app.use(express.json());

app.use(routes);

module.exports = app;
