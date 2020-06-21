const http = require('http');
var mongo = require('mongodb');

const hostname = '127.0.0.1';
const port = 3000;

// CREATING SERVER INSTANCE 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello! World');
});

// SERVER BINDING WITH PORT ADDRESS TO LISTEN
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});