const http = require('http');
const app = require('./app');

const server = new http.Server(app);

server.listen(3333, () => {
  console.log('Server started on port 3333');
});
