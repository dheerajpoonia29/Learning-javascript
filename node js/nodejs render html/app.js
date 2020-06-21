//	https://vegibit.com/render-html-in-node-js/

const http = require('http');
let fs = require('fs');


const hostname = '127.0.0.1';
const port = 3000;

// CREATING SERVER INSTANCE 
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	// here is main changes => text/html

	// RENDERING HTML 
	fs.readFile('./index.html', null, function (error, data) {
	    if (error) {
	        res.writeHead(404);
	        respone.write('Whoops! File not found!');
	    } else {
	        res.write(data);
	    }
	    res.end();
	});

});

// SERVER BINDING WITH PORT ADDRESS TO LISTEN
server.listen(port, hostname, (err) => {
	if (err) {
    	return console.log('something bad happened', err)
  	}
	console.log(`server is listening on http://${hostname}:${port}/`);
});