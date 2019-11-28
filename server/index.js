const express = require('express')
const app = express()
const port = 3007
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(express.static(__dirname + '/../client/dist/'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
