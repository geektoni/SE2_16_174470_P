var pastiDA = require('../dataAccess/pastiDA.js');
var dateDA = require('../dataAccess/dateDA.js');

/*Struttura menu:

  { "numero_settimana":
    [ {"giorno" :
        ["pasto", "pasto", ... ] },
      {"giorno":
        ["pasto", "pasto", ... ] },
       ...
    ]
 }

*/

var menu = [];


// // TEST ----------------------------------------
// // Prende il primo pasto aggiunto
// var new_pasto = pastiDA.getPastoById(1);
// // Prende il secondo pasto aggiunto
// var new_pasto_2 = pastiDA.getPastoById(2);
//
// // Prende il primo giorno della settimana specificata
// var new_data = dateDA.getDateBySettimana("1")[0];
// addScelta(new_pasto,new_data);
// addScelta(new_pasto_2,new_data);


// ---------------------------------------------

function addScelta (pasto,data) {

  var res = false;
  var new_settimana = data.settimana.toString();
  // controllo se new_settimana is valid
  var new_giorno = dateDA.toString(data);
  // controllo se new_giorno is valid

  if (pastiDA.isValid(pasto) && dateDA.isValid(data)){
    var new_scelta_g = {};
    new_scelta_g[new_giorno] = []
    new_scelta_g[new_giorno].push(pasto);

    var new_scelta_s = {};
    new_scelta_s[new_settimana] = [];
    new_scelta_s[new_settimana].push(new_scelta_g);

    if (menu.length > 0) {
      for (var i = 0; i < menu.length; i++) {
        if(menu[i][new_settimana]) {
          for (var j = 0; j < menu[i][new_settimana].length; j++) {
            if(menu[i][new_settimana][j][new_giorno]){

              menu[i][new_settimana][j][new_giorno].push(pasto);
              res = true;
            } else {
              menu[i][new_settimana].push(new_scelta_g);
              res = true;
            }
          }
        } else {
          menu.push(new_scelta_s)
          //Se la transazione e' andata a buon fine
          res = true;
        }
      }
    } else {
      menu.push(new_scelta_s)
      //Se la transazione e' andata a buon fine
      res = true;
    }
  }


  return res;
}

function getAllGiorni (data) {
  var res = [];
  var settimana = data.settimana.toString();

  for (var i = 0; i < menu.length; i++) {
    var week = menu[i][settimana];
    if(week){
      for (var j = 0; j < week.length; j++ ){
        var day = week[j];
        if (day){
          res.push(Object.keys(day).pop());
        }
      }
    }
  }
  return res;
}

function getPastiByGiorno (data) {
  var res = [];
  var settimana = data.settimana.toString();
  var giorno = dateDA.toString(data);
  //var data = dateDA.getGiornoBySettimana(settimana,giorno);
  for (var i = 0; i < menu.length; i++) {
    var week = menu[i][settimana];
    if(week){
      for (var j = 0; j < week.length; j++) {
        var day = week[j][giorno];
        if (day){
          for (var k = 0; k < day.length; k++){
            if (day[k]){
              res.push(day[k]);
            }
          }
        }
      }
    }
  }

  return res;
}

function cleanMenu () {
  var new_menu = [];
  menu = new_menu;
}

exports.addScelta = addScelta;
exports.getAllGiorni = getAllGiorni;
exports.getPastiByGiorno = getPastiByGiorno;
exports.cleanMenu = cleanMenu;
