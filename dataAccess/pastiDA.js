var Pasto = require('../models/pasto.js');

var categoriaDA = require('./categorieDA.js');

var pasti = [];

var categoria_test = categoriaDA.getCategoriaByName('Primo');
var pasto_test = new Pasto(1, 'Pasta in bianco', 'Piatto semplice', 'fotoURL', 'videoURL', categoria_test);

pasti.push(pasto_test);

function getPastoById (id) {
  for (var i = 0; i < pasti.length; i++) {
    return pasti[i].id == id ? pasti[i] : -1;
  }
}

exports.getPastoById = getPastoById;
