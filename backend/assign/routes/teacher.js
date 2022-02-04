var express = require('express');
const assignment = require('../models/assignment');
var router = express.Router();

var Assignment = require('../models/assignment');
var cors = require("cors");

router.use(cors())


router.get('/assignment/:id', function(req, res, next) {//GET ASSIGNMENT Route
  Assignment.findById(req.params.id)
      .then((assignment) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(assignment);
      }, (err) => next(err))
      .catch((err) => next(err));

});
router.put('/assignment/:id', function(req, res, next) {
    Assignment.findByIdAndUpdate(req.params.id , req.body, { useFindAndModify: false})
    .then((assignment) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(assignment);
      }, (err) => next(err))
      .catch((err) => next(err));
    });

router.get('/assignments', function(req, res, next) {//GET ASSIGNMENT Route
  Assignment.find({})
      .then((assignment) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(assignment);
      }, (err) => next(err))
      .catch((err) => next(err));

});

router.post('/addassignment', function(req, res,next) {//POST ASSIGNMENT Route
   Assignment.create(req.body)
      .then((assignment) => {
          console.log('Assignment has been Added ', assignment);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(assignment);
      }, (err) => console.log(err))
      .catch((err) => next(err));
});

router.delete('/delassignments/:id', function(req, res, next) {//DELETING AN ASSIGNMENT Route
  Assignment.deleteOne({ _id: req.params.id }, function(error, results) {
      if (error) {
        console.log("fgh"+error)
          return next(error);
      }
      res.json(results);
  });
});
module.exports = router;
