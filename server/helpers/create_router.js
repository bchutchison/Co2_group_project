const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const handleServerError = (err, res) => {
 console.error(err);
 res.status(500);
 res.json({ status: 500, error: err });
};
const createRouter = (collection) => {
 const router = express.Router();
 //Index
 router.get('/', (req, res) => {
   collection.find().toArray()
     .then(docs => res.json(docs))
     .catch(err => handleServerError(err, res));
 });
 //Show
 router.get('/:id', (req, res) => {
   const id = req.params.id;
   collection.findOne({ _id: ObjectID(id) })
     .then(doc => res.json(doc))
     .catch(err => handleServerError(err, res));
 });
 //Create
 router.post('/', (req, res) => {
   if (req.body.name && req.body.email) {
     collection.insertOne(req.body)
       .then((result) => res.json(result.ops[0]))
       .catch(err => handleServerError(err, res));
     }
     else {
       res.status(400);
       res.json({ status: 400 });
     }
 });
 //Delete
 router.delete('/:id', (req, res) => {
   const id = req.params.id;
   collection.deleteOne({ _id: ObjectID(id) })
     .then(result => res.json(result))
     .catch(err => handleServerError(err, res));
 });
 // Update
 router.put('/:id', (req, res) => {
   const id = req.params.id;
   collection.findOneAndUpdate(
     { _id: ObjectID(id) },
     { $set: req.body },
     { returnOriginal: false })
   .then(result => res.json(result.value))
   .catch(err => handleServerError(err, res.value))
 });
 return router;
};
module.exports = createRouter;
