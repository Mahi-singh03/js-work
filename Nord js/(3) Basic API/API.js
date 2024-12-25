// const http = require('http')

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'application/json'})
//   res.write(JSON.stringify({message: 'Hello World'}))
//   res.end() // End the response
// }).listen(3000)





// let say you want to send the data from external file as json response

const http = require('http')
const data = require('./data')

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.write(JSON.stringify({data}))
  res.end() // End the response
}).listen(3000)