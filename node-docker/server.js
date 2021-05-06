'use strict'

const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const app = express()


// Tell express to use the body-parser middleware and to not parse extended bodies
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({extended : true}));


// Route that receives a POST request to /sms
// app.post('/sms', function (req, res) {
app.post('/', function (req, res) {
  const body = req.body.Body
  res.set('Content-Type', 'text/plain')
  res.send(`You sent: ${body} to Express`)
  console.log(body)

})

// Tell our app to listen on port defined above
app.listen(port, function (err) {
  if (err) {
    throw err
  }
  console.log('Server started on port 3000')

})