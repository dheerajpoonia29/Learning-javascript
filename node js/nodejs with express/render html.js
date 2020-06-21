const express = require('express')
const app = express()
const path = require('path');

//app.get('/', (req, res) => res.send('Hello World'))
//RENDERING INDEX.HTML
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/view/index.html'));
});

app.listen(3000, () => console.log(`Example app listening at http://localhost:3000`))