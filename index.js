const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
  let path = url.parse(req.url, true).path
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(path)
  res.end()
})

server.listen(8080);
