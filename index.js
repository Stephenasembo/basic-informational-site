const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
  let path = url.parse(req.url, true).path
  let filename;
  if(path === '/') {
    filename = './pages/index.html';
  } else {
    filename = './pages' + path + '.html';
  }
  fs.readFile(filename, 'utf8', (err, data) => {
    if(err) {
      fs.readFile('./pages/404.html', 'utf8', (err, data) => {
        res.write(data);
        res.end()
      })
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
})

server.listen(8080);
