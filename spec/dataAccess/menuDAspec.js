var Pasto = require('../../models/pasto.js');
var Categoria = require('../../models/categoria.js');
var Data = require('../../models/data.js');

var categorieDA = require('../../dataAccess/categorieDA.js');
var dateDA = require('../../dataAccess/dateDA.js');
var pastiDA = require('../../dataAccess/pastiDA.js');
var menuDA = require('../../dataAccess/menuDA.js');

/*Struttura menu:
{ "numero_settimana":
[ {"data" : ["pasto", "pasto", ... ] },
{"data": ["pasto", "pasto", ... ] },
... ]
}
*/

function cleanDB () {
  pastiDA.cleanPasti();
  dateDA.cleanDate();
  categorieDA.cleanCategorie();
  menuDA.cleanMenu();
}



describe('Add valid scelta test', function() {
  cleanDB ()
  var categoria_test = new Categoria ("Terzo");
  categorieDA.addCategoria(categoria_test);
  categoria_test = categorieDA.getCategoriaByNome(categoria_test.nome);

  var pasto_test = new Pasto(1, 'Pasta in bianco', 'Piatto semplice', 'fotoURL', 'videoURL',categoria_test);
  var res=pastiDA.addPasto(pasto_test);
  pasto_test = pastiDA.getPastoById(pasto_test);

  var data_test = new Data(1, 01, 01, 2017);

  it("should add a new scelta", function () {
    dateDA.addData(data_test);
    data_test = dateDA.getDateBySettimana(data_test.settimana.toString());
    var res = menuDA.addScelta(pasto_test,data_test);
    expect(res).toEqual(true);
  });
});

describe('getAllGiorni test', function() {
  cleanDB ()
  var giorno_test_1 = new Data(1, 01, 01, 2017);
  var giorno_test_2 = new Data(1, 02, 01, 2017);
  var settimana_test = "1";



  it("should return all giorni added given a settimana", function () {
    dateDA.addData(giorno_test_1);
    dateDA.addData(giorno_test_2);
    date = dateDA.getDateBySettimana(settimana_test);
    expect(date[0]).toEqual(giorno_test_1);
    expect(date[1]).toEqual(giorno_test_1);
  });

  it("should return empty list if one/both param/s is/are not valid", function () {
    var pasto_test = new Pasto();

    var data_test = new Data();
  });

  it("should get all giorni of a given settimana", function () {

    var settimana = "1";
    var res = menuDA.getAllGiorni(settimana);
    var expected_res = {};
    expected_res[dateDA.toString(new_data)] = new_pasto;

    expect(res).not.toBe(undefined);
    expect(res).toEqual(expected_res);
  });

  xit("should return empty list if settimana not found", function () {
    var res = menuDA.getAllGiorni("");
    expect(res).toEqual([]);
  });

  xit("should return all pasti of a given giorno", function () {
    var res = menuDA.getPastiByGiorno(new_data.settimana,new_data.giorno);
    var expected_res = {};
    expected_res = new_pasto;

    expect(res).not.toBe(undefined);
    expect(res).toEqual(expected_res);
  });

  xit("should return empty list if giorno not found", function () {
    var data_not_exist = new_data;
    data_not_exist.giorno = "";
    var res = menuDA.getPastiByGiorno(data_not_exist);

    expect(res).not.toBe(undefined);
    expect(res).toEqual([]);
  });

});
