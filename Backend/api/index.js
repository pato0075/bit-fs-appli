const express = require('express')
const mongoose = require('mongoose')
const definition = require('./routes/definition')
const tips = require('./routes/tips')
const app = express()

mongoose.connect(process.env.MONGODB_URI)

app.use('/api/definition', definition)
app.use('/api/tips', tips)

module.exports = app
