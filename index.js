const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write('Hello world')
  res.end()
})

server.listen(8080);
