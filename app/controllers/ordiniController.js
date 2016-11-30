var ordiniDA = require('../dataAccess/ordiniDA.js')

/*
*/
function createOrdine (req,res) {
  ordiniDA.addOrdine(ordine);
}

/*
*/
function editOrdine (req,res) {
  // request.redirect('/menu/:giorno');
}

/*
*/
function updateOrdine (req,res) {
  ordiniDA.updateOrdine(ordine);
}

/*
*/
function getRiepilogo (req,res) {
  ordiniDA.getOrdineByGiorno(giorno);
}

exports.createOrdine = createOrdine;
exports.editOrdine = editOrdine;
exports.updateOrdine = updateOrdine;
exports.getRiepilogo = getRiepilogo;
