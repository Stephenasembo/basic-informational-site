require('dotenv').config();

const express = require('express')
const app = express();
const fs = require('fs');

const PORT = process.env.PORT || 3000

function displayErrorPage(res) {
  fs.readFile('./pages/404.html', 'utf8', (err, data) => {
    res.writeHead(404, {'Content-Type': 'text/html'})
    res.write(data);
    res.end()
  })
}

function displayContent(filename, res) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if(err) {
      displayErrorPage(res);
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
}

app.get('/', (req, res) => {
  return displayContent('./pages/index.html', res)
})

app.get('/contact-me', (req, res) => {
  return displayContent(`./pages/${req.path}.html`, res)
})

app.get('/about', (req, res) => {
  return displayContent(`./pages/${req.path}.html`, res)
})

app.use((req, res) => {
  return displayErrorPage(res);
})

app.listen(PORT);
