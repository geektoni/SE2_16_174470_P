describe('Pasti DA methods', function() {

  var Pasto = require('../../models/pasto.js');
  var Categoria = require('../../models/categoria.js');


  describe('Pasto creation test', function() {
    var categoria_test = new Categoria ("Terzo");
    var pasto_test = new Pasto(1, 'Pasta in bianco', 'Piatto semplice', 'fotoURL', 'videoURL', categoria_test);
    it('should create a new Pasto', function() {
      expect(pasto_test).not.toBe(undefined);
    });
  });

  // Need to implement addPasto method and then test
  xdescribe('getPastoById test', function() {
    it('should return a pasto by its id', function() {
    });

    it('should return false if not found', function() {
    });
  });

});
