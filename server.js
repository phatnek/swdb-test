//
//
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// use JSON for data 
app.use(bodyParser.json());

// start the server
app.listen(3000, function() {
  console.log('listening on 3000')
})

// handle incoming get requests
app.get('/',(req,res) => {
  res.send('Hello world')
})
app.get('/swdb',(req,res) => {
  res.send('Hello swdb')
})

// handle incoming put requests
app.post('/swdb', (req,res) => {
  console.log(req.body)
})

