const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://davi:davi@cluster0-wtj9f.gcp.mongodb.net/twitter?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());

app.use((req, res, next) => {
    req.io = io;
    
    return next();

});

app.use(express.json())

app.use(routes);


server.listen(3333, () => {
    console.log('Server started on port 3333');
});
