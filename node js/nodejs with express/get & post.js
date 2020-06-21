var express = require('express');
var app = express();

// ROUTE URL
app.get('/', (req, res) => res.send('welcome at express'))

// GET ROUTE URL
app.get('/get_url', function(req, res){
   res.send("this is get");
});

// POST ROUTE URL
app.post('/post_url', function(req, res){
   res.send("this is post");
});
// for testing post type this in cmd
// curl -X POST "http://localhost:3000/hello"

// ALL TYPE OF ROUTE URL
app.all('/all', function(req, res){
   res.send("HTTP method doesn't have any effect on this route!");
});

app.listen(3000);