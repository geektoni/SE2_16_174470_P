var menuDA = require('../dataAccess/menuDA;js');

/*
*/
// function indexGiorniByUserId (id) {
  // Functione che ritorna i giorni in cui ordinare pasti
  // in base all'utente loggato
  // Questa funzione prevede una modellazione leggermente diversa
  // del DB
// }

function indexGiorni (req,res) {
  var giorni = menuDA.getAllGiorni(data);
  //return giorni;
}

/*
*/
function indexPastiByGiorno (req,res) {
  //oggetto sessione per quel giorno
  var menu_del_giorno = menuDA.getGiorniByData(data)
}
