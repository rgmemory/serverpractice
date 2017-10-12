var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var numbersController = require('./numbersController');

var app = express();

app.listen(3000, function(){
  console.log("port 3000 works");
})


app.use(bodyParser.json());
app.use(cors());

app.get('/get', numbersController.get)
