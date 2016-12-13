var ordiniDA = require('../dataAccess/ordiniDA.js');

var Ordine = require('../models/ordine.js');

/**
 * This function adds all choosen Pasti (identified by their id) into a temporary array of a given Giorno
 * @param giorno  the corresponding number of Giorno
 * @param pasto_id the corresponding id of the choosen Pasto
 * @return statur a response indicating if scelta is added correctly or not
 **/
function addOrdine(req,res) {
  var pasto_id = req.body.pasto_id;
  var giorno = req.body.data;

  var ordine = new Ordine(giorno,pasto_id);

  var added = ordiniDA.addOrdine(ordine);
  if (added) {
    res.send("Added");
  } else {
    res.send("Not added");
  }
}

/**
 * This function save permanently all Pasti choosen by a user that are saved temporary into tmp_scelte a of a given Giorno
 **/
function createOrdine (req,res) {
    ordiniDA.createOrdine();
    res.send("Created");
}

/*
*/
function editOrdine (req,res) {
}

/*
*/
function updateOrdine (req,res) {
}

/**
 * This function delete all Pasti choosen by a user and saved temporary in an array of a given Giorno
 **/
function deleteScelte (req,res) {
  ordiniDA.cleanTmpOrdini();
  res.send("Deleted");
}

/**
 * This function returns all Pasti choosen by a user and saved temporary in an array of a given Giorno
 * @param giorno  the corresponding number of Giorno
 * @return scelte a list of Pasti choosen the given Giorno
 **/
function getRiepilogo (req,res) {
  var giorno = req.params.giorno;

  var data = new Ordine(giorno);
  var scelte = ordiniDA.getOrdiniByGiorno(data);

  if (scelte) {
      res.send(scelte);
  } else {
    var error = "Giorno Not Found";
      res.render('error', {
          error: error
      });
  }
}

exports.addOrdine = addOrdine;
exports.createOrdine = createOrdine;
exports.editOrdine = editOrdine;
exports.updateOrdine = updateOrdine;
exports.getRiepilogo = getRiepilogo;
exports.deleteScelte = deleteScelte;
