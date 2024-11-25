// import express
const express = require('express')
// import path that connects code/ requests to pieces of location
const path = require('path')

const indexRouter = require('./routes/index.js')

// create app server
const app = express()

// use this block of code to connect to css stylesheet
const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

// tell app where to get views files
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use('/', indexRouter)

// start running server
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})