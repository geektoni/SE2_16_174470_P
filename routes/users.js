var express = require('express');
var router = express.Router();

var usersController = require ('../controllers/usersController');

/* GET request route */
router.get('/', function(req, res, next) {
  usersController.index(req,res);
});

/* POST request route */
router.post('/users/', function(req, res, next) {
  res.send('respond with a resource');
});

/* PUT request route */
router.put('/users/', function(req, res, next) {
  res.send('respond with a resource');
});

/* DELETE request route */
router.delete('/users/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
