var ordiniDA = require('../dataAccess/ordiniDA.js')

/*
*/
function createOrdine (ordine) {
  ordiniDA.addOrdine(ordine);
}

/*
*/
function editOrdine (ordine) {
  // request.redirect('/menu/:giorno');
}

/*
*/
function updateOrdine (ordine) {
  ordiniDA.updateOrdine(ordine);
}

/*
*/
function getRiepilogo (ordine) {
  ordiniDA.getOrdineByGiorno(giorno);
}

exports.createOrdine = createOrdine;
exports.editOrdine = editOrdine;
exports.updateOrdine = updateOrdine;
exports.getRiepilogo = getRiepilogo;
