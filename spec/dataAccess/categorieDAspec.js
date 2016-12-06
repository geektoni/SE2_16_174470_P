describe("Categorie Data Access Test", function(){

  var categorieDA = require('../../dataAccess/categorieDA.js');
  var Categoria = require('../../models/categoria.js');

  describe('Create valid Categoria Test', function() {
    var primo = new Categoria("Primo");

    it ("should create a new categoria", function(){
      expect(primo).not.toBe(undefined);
      expect(primo.nome).toBe("Primo");
    });

    it("should be valid", function () {
      expect(categorieDA.isValid(primo)).toEqual(true);
    });
  });

  describe('Create not valid Categoria Test', function() {
    var primo = new Categoria("");
    var secondo = new Categoria();

    it("should not be valid", function () {
      expect(categorieDA.isValid(primo)).toEqual(false);
      expect(categorieDA.isValid(secondo)).toEqual(false);
    });
  });

  describe('Add Categoria Test', function() {
    it("should add a valid categoria", function () {
      var secondo = new Categoria("Secondo");
      var res = categorieDA.addCategoria(secondo);
      expect(res).toEqual(true);
    });

    it("should return false if categoria is not valid", function () {
      var secondo = new Categoria("");
      var terzo = new Categoria();
      var res_1 = categorieDA.addCategoria(secondo);
      var res_2 = categorieDA.addCategoria(terzo);

      expect(res_1).toEqual(false);
      expect(secondo.errors.pop()).toEqual("Nome is empty");

      expect(res_2).toEqual(false);
      expect(terzo.errors.pop()).toEqual("Nome is undefined");

    });
  });

  // Method addCategoria is not called
  describe('Get Categoria By Name Test', function() {
    var quarto = new Categoria("Quarto");
    categorieDA.addCategoria(quarto);

    it('should get an existent Categoria by its nome', function() {

      var res = categorieDA.getCategoriaByNome(quarto);

      expect(res).not.toBe(undefined);
      expect(res).toEqual(quarto);
    });

    it('should return false if not found', function() {
      var res = categorieDA.getCategoriaByNome("");
      expect(res).toEqual(false);
    });

  });

});
