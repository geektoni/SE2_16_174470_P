var menuDA = require('../dataAccess/menuDA.js');
var dateDA = require('../dataAccess/dateDA.js');
var pastiDA = require('../dataAccess/pastiDA.js');

var Pasto = require('../models/pasto.js');
var Data = require('../models/data.js');

require('../helpers/ordini_list');
/*
*/
// function indexGiorniByUserId (id) {
  // Functione che ritorna i giorni in cui ordinare pasti
  // in base all'utente loggato
  // Questa funzione prevede una modellazione leggermente diversa
  // del DB
// }

function indexGiorni (req,res) {

  var numero = new Data();
  numero.settimana = req.params.numero;

  var giorni = menuDA.getAllGiorni(numero);
  if (giorni){
      var result = {days: giorni};
      console.log(giorni);
      res.render('menu/index_giorni',result);
  } else {
      var error = "Settimana not found";
      res.render('error', {
        error: error
      })
  }
}

/*
*/
function indexPastiByGiorno (req,res) {
    var settimana = req.params.numero;
    var giorno = dateDA.parseData(req.params.data);
    var data = new Data(settimana,giorno[0],giorno[1],giorno[2]);
    if (dateDA.isValid(data)){
        var menu_del_giorno = menuDA.getPastiByGiorno(data);
        console.log("MENU") ;
        console.log(JSON.stringify(menu_del_giorno)) ;
        if (menu_del_giorno){
            res.render('menu/index_pasti',menu_del_giorno);
        } else {
            //res.sendStatus(404);
            var error = "Giorno not found";
            res.render('error', {
                error: error
            });
        }
    } else {
        var error = "Data not valid";
        res.render('error', {
            error: error
        });
    }


}

exports.indexGiorni = indexGiorni;
exports.indexPastiByGiorno = indexPastiByGiorno;
