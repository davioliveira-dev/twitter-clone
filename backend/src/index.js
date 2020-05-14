const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socketio = require('socket.io')
const http = require('http')

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect('mongodb+srv://davi:davi@cluster0-wtj9f.gcp.mongodb.net/twitter?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use(cors());

app.use(express.json())

app.use(routes);

server.listen(3333, () => {
    console.log('Server started on port 3333');
});
