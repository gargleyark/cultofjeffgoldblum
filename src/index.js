const express = require('express')
const app = express()
const fs = require('fs')
const jeffs = fs.readdirSync('src/public/jeffs/')
const Homepage = require('./js/homepage.js')

app.get('/', function (req, res) {
  app.use(express.static(__dirname + '/public'))
  const hp = new Homepage()
  res.send(hp.render({
    data: jeffs
  }))
})

app.listen(9001)
