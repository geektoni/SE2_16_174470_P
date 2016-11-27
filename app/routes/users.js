var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();

/* GET request route */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
