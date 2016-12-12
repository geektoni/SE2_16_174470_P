var express = require('express');
var router = express.Router();

var ordiniController = require('../controllers/ordiniController.js');

router.get('/edit/:giorno_id', function(req, res, next) {
  ordiniController.editOrdine(req,res);
});

router.post('/add',function (req,res) {
    ordiniController.addOrdine(req,res);
});

router.post('/create', function(req, res) {
  ordiniController.createOrdine(req,res);
});

router.put('/update', function(req, res) {
  ordiniController.updateOrdine(req,res);
});

router.get('/:giorno_id/riepilogo', function(req, res) {
  ordiniController.getRiepilogo(req,res);
});


module.exports = router;
