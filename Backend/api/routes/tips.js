const express = require('express')
const tips = require('../models/model')

const router = express.Router()

router.get('/',(req, res) =>{
    tips.find()
    .exec()
    .then(x => res.status(200).send(x))
   // res.send('Hola soy definition')
 });


 router.get('/:id', (req, res)=> {
     tips.findById(req.params.id)
     .exec()
     .then(x => res.status(200).send(x))
 });


 router.post('/', (req, res) =>{
    tips.create(req.body)
    .then(x => res.status(201).send(x))
 });

 router.put('/:id',(req, res)=>{
    tips.findByIdAndUpdate(req.body.id, req.body)
    .then(x => res.status(204).send(x))
 });

 router.delete('/:id',(req,res)=>{
     tips.findOneAndDelete(req.params.id)
     .exec()
     .then(() => res.sendStatus(204))
 });


 module.exports = router