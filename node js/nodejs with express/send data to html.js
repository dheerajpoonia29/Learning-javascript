// reference : https://scotch.io/tutorials/use-ejs-to-template-your-node-application

const express = require('express')
const app = express()
const path = require('path');

var bodyParser = require("body-parser"); 
app.use(bodyParser.urlencoded({ extended: false })); 

//Set view engine to ejs
app.set("view engine", "ejs"); 

//app.get('/', (req, res) => res.send('Hello World'))
//RENDERING INDEX.HTML
app.get('/',function(req,res){
	var data = 'this is data sended from nodejs';
	var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
  res.render(path.join(__dirname + '/views/show'), {data: data, drinks: drinks});
});

app.listen(3000, () => console.log(`Example app listening at http://localhost:3000`))