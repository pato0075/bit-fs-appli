const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const definition = require('./routes/definition')
const tips = require('./routes/tips')

const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI)

app.use('/api/definition', definition)
app.use('/api/tips', tips)

module.exports = app
