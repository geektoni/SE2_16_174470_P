var pastiDA = require('../../dataAccess/pastiDA.js');
var Pasto = require('../../models/pasto.js');
var Categoria = require('../../models/categoria.js');

describe('Pasti DA methods', function() {

  describe('Pasto creation test', function() {
    var categoria_test = new Categoria ("Terzo");
    var pasto_test = new Pasto(1, 'Pasta in bianco', 'Piatto semplice', 'fotoURL', 'videoURL', categoria_test);
    it('should create a new Pasto', function() {
      expect(pasto_test).not.toBe(undefined);
    });

    it("should be valid", function () {
      expect(pastiDA.isValid(pasto_test)).toEqual(true);
    });

  });

  describe('addPasto test', function() {
    var categoria_test = new Categoria ("Terzo");
    var pasto_test = new Pasto(1, 'Pasta in bianco', 'Piatto semplice', 'fotoURL', 'videoURL', categoria_test);
    var pasto_test_2 = new Pasto(2, 'Pasta al pomodoro', 'Piatto semplice', 'fotoURL', 'videoURL', categoria_test);

    it("should add a valid pasto", function () {
      var res = pastiDA.addPasto(pasto_test);
      expect(res).toEqual(true);
    });

    it('should add another valid pasto', function() {
      pastiDA.addPasto(pasto_test);
      var res = pastiDA.addPasto(pasto_test_2);
      expect(res).toEqual(true);
    });

    it('should not allow to add pasto already inside', function() {
      pastiDA.addPasto(pasto_test);
      var res = pastiDA.addPasto(pasto_test);
      expect(res).toEqual(false);
    });

  });

  describe('getPastoById test', function() {

    var categoria_test = new Categoria ("Terzo");
    var pasto_test = new Pasto(1, 'Pasta in bianco', 'Piatto semplice', 'fotoURL', 'videoURL', categoria_test);

    it('should return a pasto by its id', function() {
      pastiDA.addPasto(pasto_test);
      var res = pastiDA.getPastoById(pasto_test);
      expect(res).toEqual(pasto_test);
    });

    it('should return false if not found', function() {
      pastiDA.addPasto(pasto_test);
      var not_present_pasto = new Pasto(4, 'Pasta in bianco', 'Piatto semplice', 'fotoURL', 'videoURL');
      var res = pastiDA.getPastoById(not_present_pasto);
      expect(res).toEqual(false);
    });
  });

});
