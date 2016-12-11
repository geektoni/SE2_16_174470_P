var express = require('express');
var router = express.Router();

var pastiController = require('../controllers/pastiController.js');

/* GET index pasti */
router.get('/', function(req, res, next) {

});

/* GET show page of pasto specified by its id*/
router.get('/:id', function(req, res, next) {
    pastiController.show(req,res);
});

/* POST request route */
router.get('/', function(req, res, next) {

});

/* PUT request route */
router.put('/', function(req, res, next) {

});

/* DELETE request route */
router.delete('/', function(req, res, next) {

});

module.exports = router;
