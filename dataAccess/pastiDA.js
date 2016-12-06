var Pasto = require('../models/pasto.js');

var categoriaDA = require('./categorieDA.js');

var pasti = [];

var categoria_test = categoriaDA.getCategoriaByName('Primo');
var pasto_test = new Pasto(1, 'Pasta in bianco', 'Piatto semplice', 'fotoURL', 'videoURL', categoria_test);
var pasto_test_2 = new Pasto(2, 'Pasta in rosso', 'Piatto semplice', 'fotoURL', 'videoURL', categoria_test);

pasti.push(pasto_test);
pasti.push(pasto_test_2);

function getPastoById (id) {
  var res = false;
  for (var i = 0; i < pasti.length; i++) {
    if (pasti[i].id == id){
      res = pasti[i] ;
    }
  }
  return res;
}

exports.getPastoById = getPastoById;
