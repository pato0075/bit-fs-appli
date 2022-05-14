const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Models = mongoose.model('Models', new Schema({
     name: String,
     desc: String,
     año: Number,
    }))

module.exports = Models    

