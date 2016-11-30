var express = require('express');
var router = express.Router();

var menuController = require('../controllers/menuController.js');
//var ordiniController = require('../controllers/ordiniController.js');

/* GET request route. */
router.get('/', function(req, res, next) {
    menuController.indexGiorni();
});

/* GET request route. */
router.get('/:data', function(req, res, next) {
    var data;
    menuController.indexPastiByGiorno(data);
});
module.exports = router;
