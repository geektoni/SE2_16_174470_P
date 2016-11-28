var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

});

app.param('giorno', function(req, res, next, giorno) {
    // Get the day specified by 'giorno' parameter
    next()
  });
});

router.get('/:giorno/', function(req, res, next) {

});

router.get('/:giorno/:categoria', function(req, res, next) {

});

router.post('/:giorno/:categoria', function(req, res, next) {

});

router.put('/:giorno/:categoria', function(req, res, next) {

});

router.delete('/:giorno/:categoria/:pasto_id', function(req, res, next) {

});

router.get('/:giorno/riepilogo', function(req, res, next) {
});


module.exports = router;
