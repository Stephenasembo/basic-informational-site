require('dotenv').config();

const express = require('express')
const app = express();
const fs = require('fs');

const PORT = process.env.PORT || 3000

function displayErrorPage() {
  fs.readFile('./pages/404.html', 'utf8', (err, data) => {
    res.writeHead(404, {'Content-Type': 'text/html'})
    res.write(data);
    res.end()
  })
}

app.get('/', (req, res) => {
  console.log(req.path);
  let filename = './pages/index.html'
  fs.readFile(filename, 'utf8', (err, data) => {
    if(err) {
      displayErrorPage();
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
})

app.get('/contact-me', (req, res) => {
  let filename = './pages/contact-me.html'
  fs.readFile(filename, 'utf8', (err, data) => {
    if(err) {
      displayErrorPage();
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
})

app.get('/about', (req, res) => {
  let filename = './pages/about.html'
  fs.readFile(filename, 'utf8', (err, data) => {
    if(err) {
      displayErrorPage();
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
})

app.listen(PORT);
