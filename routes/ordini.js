var express = require('express');
var router = express.Router();

var ordiniController = require('../controllers/ordiniController.js');

router.get('/:giorno/edit', function(req, res, next) {
  ordiniController.editOrdine(req,res);
});

router.post('/:giorno/create', function(req, res, next) {
  ordiniController.createOrdine(req,res);
});

router.put('/:giorno/update', function(req, res, next) {
  ordiniController.updateOrdine(req,res);
});

router.get('/:giorno/riepilogo', function(req, res, next) {
  ordiniController.getRiepilogo(req,res);
});


module.exports = router;
