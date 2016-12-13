var ordiniDA = require('../dataAccess/ordiniDA.js');

var Ordine = require('../models/ordine.js');

function addOrdine(req,res) {
  var pasto_id = req.body.pasto_id;
  var giorno = req.body.data;
  console.log(giorno);
  var ordine = new Ordine(giorno,pasto_id);

  var added = ordiniDA.addOrdine(ordine);
  if (added) {
    res.send("Added");
  } else {
    res.send("Not added");
  }
}

/*
*/
function createOrdine (req,res) {
    ordiniDA.createOrdine();
    res.send("Created");
}

/*
*/
function editOrdine (req,res) {
  // request.redirect('/menu/:giorno');
}

/*
*/
function updateOrdine (req,res) {
  ordiniDA.updateOrdine(ordine);
}

function deleteScelte (req,res) {
  ordiniDA.cleanTmpOrdini();
  res.send("Deleted");
}

/*
*/
function getRiepilogo (req,res) {
  var giorno = req.params.giorno;

  var data = new Ordine(giorno);
  var scelte = ordiniDA.getOrdiniByGiorno(data);
    //console.log(scelte);
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
