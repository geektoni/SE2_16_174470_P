var pastoModel = requre('../models/pasto.js');

var pasti = [];

var pasto_test = pastoModel.createPasto(1, 'Pasta in bianco', 'Piatto semplice', 'fotoURL', 'videoURL',);

pasti.push(pasto_test);

function getPastoById (id) {
  for (var i = 0; i < pasti.length; i++) {
    return pasti[i].id == id ? pasti[i] : -1;
  }
}

exports.getPastoById = getPastoById;
