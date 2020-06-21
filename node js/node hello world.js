// reference: https://www.tutorialspoint.com/nodejs/ 
// https://blog.risingstack.com/your-first-node-js-http-server/

// LOAD HTTP MODULE AND STORE HTTP INSTANCE INTO VARIABLE
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// CREATING SERVER INSTANCE 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello! World');
  res.end();
});

// SERVER BINDING WITH PORT ADDRESS TO LISTEN
server.listen(port, hostname, (err) => {
	if (err) {
    	return console.log('something bad happened', err)
  }
	console.log(`server is listening on http://${hostname}:${port}/`);
});


// METHOD 1
/*
const http = require('http');

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});   
   response.end('Hello World\n');
}).listen(port);

console.log('Server running at http://127.0.0.1:8081/');
*/


// METHOD 2
/*
let http = require('http');
 
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('Hi There!');
    response.end();
};
 
http.createServer(handleRequest).listen(8000);
*/