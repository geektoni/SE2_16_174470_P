var menuDA = require('../dataAccess/menuDA;js');

/*
*/
// function indexGiorniByUserId (id) {
  // Functione che ritorna i giorni in cui ordinare pasti
  // in base all'utente loggato
  // Questa funzione prevede una modellazione leggermente diversa
  // del DB
// }

function indexGiorni (data) {
  var giorni = menuDA.getAllGiorni(data);
  return giorni;
}

/*
*/
function indexPastiByGiorno (data) {
  var menu_del_giorno = menuDA.getGiorniByData(data)
}
