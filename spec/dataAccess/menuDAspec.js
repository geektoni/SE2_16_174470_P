var pastiDA = require('../../dataAccess/pastiDA.js');
var dateDA = require('../../dataAccess/dateDA.js');
var menuDA = require('../../dataAccess/menuDA.js');
/*Struttura menu:
{ "numero_settimana":
    [ {"data" : ["pasto", "pasto", ... ] },
    {"data": ["pasto", "pasto", ... ] },
    ... ]
}
*/
var menu = [];


// Prende il primo pasto aggiunto
var new_pasto = pastiDA.getPastoById(1);
// Prende il primo giorno della settimana specificata
var new_data = dateDA.getDataBySettimana("1")[0];


describe('Menu DA methods', function() {

  it("should add a new scelta", function () {
    var res = menuDA.addScelta(new_pasto,new_data);
    expect(res).toEqual(1);
  });

  // Must implement valdation methods
  xit("should return -1 if one/both param/s is/are not valid", function () {
  });

  it("should get all giorni of a given settimana", function () {

    var settimana = "1";
    var res = menuDA.getAllGiorni(settimana);
    var expected_res = {};
    expected_res[dateDA.toString(new_data)] = new_pasto;

    expect(res).not.toBe(undefined);
    expect(res).toEqual(expected_res);
  });

  it("should return -1 if settimana not found", function () {
    var res = menuDA.getAllGiorni("");
    expect(res).toBe(-1);
  });

  it("should return all pasti of a given giorno", function () {
    var res = menuDA.getPastiByData(new_data);
    var expected_res = {};
    expected_res = new_pasto;

    expect(res).not.toBe(undefined);
    expect(res).toEqual(expected_res);
  });

  it("should return -1 if giorno not found", function () {
    var data_not_exist = new_data;
    data_not_exist.giorno = "";
    var res = menuDA.getPastiByData(data_not_exist);
    
    expect(res).not.toBe(undefined);
    expect(res).toEqual(-1);
  });

});
