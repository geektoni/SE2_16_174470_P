var express = require('express');
var router = express.Router();

var ordiniController = require('../controllers/ordiniController.js');

app.param('giorno', function(req, res, next, giorno) {
    // Get the day specified by 'giorno' parameter
    next()
  });
});

router.get('/:giorno/edit', function(req, res, next) {
  ordiniController.editOrdine(ordine);
});

router.post('/:giorno/create', function(req, res, next) {
  ordiniController.createOrdine(ordine);
});

router.put('/:giorno/update', function(req, res, next) {
  ordiniController.updateOrdine(ordine);
});

router.get('/:giorno/riepilogo', function(req, res, next) {
  ordiniController.getRiepilogo(ordine);
});


module.exports = router;
