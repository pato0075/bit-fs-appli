const express = require('express')
const definition = require('../models/class')

const router = express.Router()

router.get('/',(req, res) =>{
    definition.find()
    .exec()
    .then(x => res.status(200).send(x))
   // res.send('Hola soy definition')
 });


 router.get('/:id', (req, res)=> {
     definition.findById(req.params.id)
     .exec()
     .then(x => res.status(200).send(x))
 });


 router.post('/', (req, res) =>{
    definition.create(req.body)
    .then(x => res.status(201).send(x))
 });

 router.put('/:id',(req, res)=>{
    definition.findByIdAndUpdate(req.body.id, req.body)
    .then(x => res.status(204).send(x))
 });

 router.delete('/:id',(req,res)=>{
     definition.findOneAndDelete(req.params.id)
     .exec()
     .then(() => res.sendStatus(204))
 });


 module.exports = router