describe('Pasti DA methods', function() {

  var Pasto = require('../../models/pasto.js');

  var categoriaDA = require('../../dataAccess/categorieDA.js');
  var pastoDA = require('../../dataAccess/pastiDA.js');
  var pasti = [];

  var categoria_test = categoriaDA.getCategoriaByName('Primo');
  var pasto_test = new Pasto(1, 'Pasta in bianco', 'Piatto semplice', 'fotoURL', 'videoURL', categoria_test);

  pasti.push(pasto_test);

  it('should create a new Pasto', function() {
    expect(pasto_test).not.toBe(undefined);
  });

  it('should return a pasto by its id', function() {
    var res = pastoDA.getPastoById(1);
    expect(res).not.toBe(undefined);
    expect(res.id).toEqual(1);
  });

  it('should return -1 if not found', function() {
    var res = pastoDA.getPastoById(6);
    expect(res).toEqual(-1);
  });

});
