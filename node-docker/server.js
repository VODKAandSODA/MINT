'use strict'

const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const app = express()




// Tell express to use the body-parser middleware and to not parse extended bodies
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({extended : true}));


// Route that receives a POST
app.post('/', function(request, response) {
  console.log('POST /')
  console.log("request.body")
  console.dir(request.body)
  console.log("response.writeHead")
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end('thanks')
})


app.listen(port)
console.log(`Listening at http://localhost:${port}`)
