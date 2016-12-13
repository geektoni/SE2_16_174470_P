var menuDA = require('../dataAccess/menuDA.js');
var dateDA = require('../dataAccess/dateDA.js');
var pastiDA = require('../dataAccess/pastiDA.js');

var Pasto = require('../models/pasto.js');
var Data = require('../models/data.js');

require('../helpers/ordini_list');

/**
 * This function returns all Giorni of a given Settimana specified in the req parameter
 * @param number  the corresponding number of the Settimana
 * @return giorni a list of Giorni of the given Settimana
 **/
function indexGiorni (req,res) {

  var numero = new Data();
  numero.settimana = req.params.numero;

  var giorni = menuDA.getAllGiorni(numero);
  if (giorni){
      var result = {days: giorni};
      res.render('menu/index_giorni',result);
  } else {
      res.status(404);
      var error = "Settimana not found";
      res.render('error', {
        error: error
      })
  }
}

/**
 * This function returns all Pasti of a given Giorno specified in the req parameter
 * @param settimama  the corresponding number of the Settimana
 * @param giorno  the corresponding number of Giorno
 * @return pasti a list of Pasti of the given Giorno
 **/
function indexPastiByGiorno (req,res) {
    var settimana = req.params.numero;
    var giorno = dateDA.parseData(req.params.data);
    var data = new Data(settimana,giorno[0],giorno[1],giorno[2]);
    if (dateDA.isValid(data)){
        var menu_del_giorno = menuDA.getPastiByGiorno(data);
        if (menu_del_giorno){
            res.render('menu/index_pasti',menu_del_giorno);
        } else {
            res.status(404);
            var error = "Giorno not found";
            res.render('error', {
                error: error
            });
        }
    } else {
        res.status(404);
        var error = "Data not valid";
        res.render('error', {
            error: error
        });
    }


}

exports.indexGiorni = indexGiorni;
exports.indexPastiByGiorno = indexPastiByGiorno;
