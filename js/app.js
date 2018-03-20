var express = require('express')
var app = express()

app.use(express.static(`${__dirname}/assets`))

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/views/home.html`)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})