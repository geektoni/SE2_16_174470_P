var express = require('express');
var router = express.Router();

var menuController = require('../controllers/menuController.js');
//var ordiniController = require('../controllers/ordiniController.js');

/* GET request route. */
router.get('/settimana/:numero/', function(req, res, next) {
	menuController.indexGiorni(req,res);

});

/* GET request route. */
router.get('/settimana/:numero/giorno/:data', function(req, res, next) {
    menuController.indexPastiByGiorno(req,res);
});
module.exports = router;
