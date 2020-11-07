const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const webSocket = require('./config/webSocket');

const app = express();

mongoose.connect(process.env.MONGODB_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(webSocket);

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;
