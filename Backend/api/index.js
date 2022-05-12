const express = require('express')
const app = express()

app.get('*', (req, res) => {
   console.log('hola mundo mi first api');
   res.send({mensaje: 'todo ok'}) 
})

module.exports = app
