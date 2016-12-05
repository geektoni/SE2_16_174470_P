describe("Categorie Data Access Test", function(){

  var categorieDA = require('../../dataAccess/categorieDA.js');
  var Categoria = require('../../models/categoria.js');

  var categorie = [];

  var primo = new Categoria("Primo");
  var secondo = new Categoria("Secondo");

  var cat1 = {
    "Primo": primo
  }

  var cat2 = {
    "Secondo": secondo
  }

  categorie.push(cat1);
  categorie.push(cat2);

  it ("should create a new categoria", function(){
      expect(primo).not.toBe(undefined);
      expect(primo.nome).toBe("Primo");
  });

  it('should get an existent Categoria by its nome', function() {
    var res = categorieDA.getCategoriaByName("Primo");
    expect(res).not.toBe(undefined);
    expect(res).not.toEqual(-1);
    expect(res).toEqual(primo);
  });

  it('should return -1 if not found', function() {
    var res = categorieDA.getCategoriaByName("");
    expect(res).toEqual(-1);
  });

});
