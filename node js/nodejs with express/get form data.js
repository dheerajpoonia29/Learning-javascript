const express = require('express')
const app = express()
const path = require('path');

//app.get('/', (req, res) => res.send('Hello World'))
//RENDERING INDEX.HTML
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/views/form.html'));
});

app.get('/htmlToExpress', function (req, res) {
   // Prepare output in JSON format
   response = {
      name:req.query.name,
      phone:req.query.number
   };
   console.log(response);
   res.send(JSON.stringify(response));
});

app.listen(3000, () => console.log(`Example app listening at http://localhost:3000`))