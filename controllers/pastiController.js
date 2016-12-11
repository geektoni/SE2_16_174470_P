var pastiDA = require('../dataAccess/pastiDA.js');
var Pasto = require('../models/pasto.js');

/*
    This function get the pasto Id specified by the request and return its show page
*/
function show (req, res) {
    var id = req.params.id;
    //console.log(id);
    var pasto = new Pasto(id);
    pasto = pastiDA.getPastoById(pasto);
    if (pasto !== false) {
        res.render('pasti/show', pasto);
    } else {
        var error = "Pasto Not Found";
        res.render('error', {
            error: error
        });
    }

}

/*
*/
function new_ (req,res) {

}

/*
*/
function create (req,res) {

}

/*
*/
function edit (req,res) {

}

/*
*/
function update (req,res) {

}

/*
*/
function destroy (req,res) {

}

exports.show = show;