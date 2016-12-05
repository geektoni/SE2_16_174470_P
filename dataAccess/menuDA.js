var pastiDA = require('../dataAccess/pastiDA.js');
var dateDA = require('../dataAccess/dateDA.js');

/*Struttura menu:

{ "numero_settimana":
    [ {"giorno" : ["pasto", "pasto", ... ] },
      {"giorno": ["pasto", "pasto", ... ] },
      ...
    ]
}
*/

var menu = [];


// TEST ----------------------------------------
// Prende il primo pasto aggiunto
var new_pasto = pastiDA.getPastoById(1);
// Prende il primo giorno della settimana specificata
var new_data = dateDA.getDataBySettimana("1")[0];
addScelta(new_pasto,new_data);
//console.log(menu);

// ---------------------------------------------

function addScelta (pasto,data) {
  var res = -1;
  var new_settimana = data.settimana.toString();
  // controllo se new_settimana is valid
  var new_giorno = dateDA.toString(data);
  // controllo se new_giorno is valid

  var new_scelta_g = {};
  new_scelta_g[new_giorno] = pasto;

  var new_scelta_s = {};
  new_scelta_s[new_settimana] = new_scelta_g;

  //controllo se l'aggiunta al DB e' andata bene.
  if(menu.push(new_scelta_s)){
    //Se la transazione e' andata a buon fine
    res = 1;
  }

  return res;
}

function getAllGiorni (settimana) {
  var res = -1;
  for (var i = 0; i < menu.length; i++) {
    if(menu[i][settimana]){
      res = menu[i][settimana];
    }
  }
  return res;
}

function getPastiByData (data) {
  var res = -1;
  for (var i = 0; i < menu.length; i++) {
    if(menu[i][data.settimana.toString()][dateDA.toString(data)]){
        res = menu[i][data.settimana.toString()][dateDA.toString(data)];
    }
  }

  return res;
}



exports.addScelta = addScelta;
exports.getAllGiorni = getAllGiorni;
exports.getPastiByData = getPastiByData;
