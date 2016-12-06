var menuDA = require('../dataAccess/menuDA.js');

/*
*/
// function indexGiorniByUserId (id) {
  // Functione che ritorna i giorni in cui ordinare pasti
  // in base all'utente loggato
  // Questa funzione prevede una modellazione leggermente diversa
  // del DB
// }

function indexGiorni (req,res) {
  var settimana = req.params.numero;
  var giorni = menuDA.getAllGiorni(settimana);
  //console.log(JSON.stringify(giorni));
  console.log(giorni);
  res.send("");
}

/*
*/
function indexPastiByGiorno (req,res) {
  //oggetto sessione per quel giorno
  var settimana = req.params.numero;
  var giorno = req.params.data;

  var menu_del_giorno = menuDA.getPastiByGiorno(settimana,giorno);
  console.log(menu_del_giorno);
  res.send("");
}

exports.indexGiorni = indexGiorni;
exports.indexPastiByGiorno = indexPastiByGiorno;
