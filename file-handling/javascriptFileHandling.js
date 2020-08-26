const http = require("http");
var fs = require('fs');  // dheer

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  //   res.statusCode = 200;
	//   res.setHeader('Content-Type', 'text/plain');
	
	// dheer
		// read file
			var data = '';

			fs.open('file.txt', 'r', (err, fd) => {
				if (err) throw err;
				
				fs.close(fd, (err) => {
					if (err) throw err;
				});
			});


	// res.end("Testing, File Handling In Javascript");
	res.end(`nodejs end`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
