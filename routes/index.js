var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController.js');

/* GET request route. */
router.get('/', function(req, res, next) {
    indexController.homepage(req,res);
});

module.exports = router;
