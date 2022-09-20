const express = require('express')
const http = require('http')
const path = require('path')

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname,'/public')
const app = express()
const server = http.createServer(app)

//templatepath
app.use(express.static(publicPath))

server.listen(port, () => console.log(`Server is running on :${port}`))