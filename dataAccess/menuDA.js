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



function addScelta (pasto,data) {
  var newScelta = {
    data.settimana.toString() : {dateDA.toString(data) : pasto},
  }
  menu.push(newScelta);
}

function getAllGiorni (data) {
  return data[data.settimana.toString()];
}

function getPastiByData (data) {
  var menu_del_giorno = menu[data.settimana.toString()][dateDA.toString(data)];

}


// TEST ----------------------------------------
// Prende il primo pasto aggiunto
var new_pasto = pastiDA.getPastoById(1);
// Prende il primo giorno della settimana specificata
var new_data = dateDA.getDataBySettimana("1")[0];
addScelta(new_pasto,new_data);
// ---------------------------------------------
