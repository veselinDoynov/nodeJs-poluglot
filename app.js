const express = require('express')
const app = express()
const port = 3000

var httpolyglot = require('httpolyglot');
var fs = require('fs');
 
httpolyglot.createServer({
  key: fs.readFileSync('localhost-privateKey.key'),
  cert: fs.readFileSync('localhost.crt')
}, app).listen(port);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


