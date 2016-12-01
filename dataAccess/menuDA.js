var pastiDA = require('../dataAccess/pastiDA.js');
var dateDA = require('../dataAccess/dateDA.js');

/*Struttura menu:
{ "numero_settimana":
    [ {"data" : ["pasto", "pasto", ... ] },
    {"data": ["pasto", "pasto", ... ] }, 
    ... ]
}
*/
var menu = [];


// TEST ----------------------------------------
// Prende il primo pasto aggiunto
var new_pasto = pastiDA.getPastoById(1);
// Prende il primo giorno della settimana specificata
var new_data = dateDA.getDataBySettimana("1")[0];
addScelta(new_pasto,new_data);
console.log(menu);

// ---------------------------------------------

function addScelta (pasto,data) {
  var new_settimana = data.settimana.toString();
  var new_giorno = dateDA.toString(data);
  var newScelta = {
    new_data : { new_giorno : pasto},
  }
  menu.push(newScelta);
}

function getAllGiorni (settimana) {
  var res = -1;

}

function getPastiByData (data) {
  var menu_del_giorno = menu[data.settimana.toString()][dateDA.toString(data)];

}



exports.addScelta = addScelta;
exports.getAllGiorni = getAllGiorni;
exports.getPastiByData = getPastiByData;