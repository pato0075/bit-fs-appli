const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Class = mongoose.model('Class', new Schema({
     model_id: { type: Schema.Types.ObjectId, ref: 'model'},
          
    }))

module.exports = Class 