var Pasto = require('../models/pasto.js');

var categoriaDA = require('./categorieDA.js');

var pasti = [];

// var categoria_test = categoriaDA.getCategoriaByName('Primo');
// var pasto_test = new Pasto(1, 'Pasta in bianco', 'Piatto semplice', 'fotoURL', 'videoURL', categoria_test);
// var pasto_test_2 = new Pasto(2, 'Pasta in rosso', 'Piatto semplice', 'fotoURL', 'videoURL', categoria_test);
//
// pasti.push(pasto_test);
// pasti.push(pasto_test_2);

function validateId (pasto) {
  var res = false;
  var error;

  if (pasto.id === ""){
    error = "Id is empty";
    pasto.errors.push(error);
  }

  if (pasto.id === undefined){
    error = "Id is undefined";
    pasto.errors.push(error);
  }

  if (typeof pasto.id !== "number"){
    error= "Id is not a number";
    pasto.errors.push(error);
  }

  if (pasto.errors.length === 0) {
    res = true;
  }
  return res;
}

function validateNome (pasto) {
  var res = false;
  var error;
  if (pasto.nome === ""){
    error = "Nome is empty";
    pasto.errors.push(error);
  }
  if (pasto.nome === undefined){
    error = "Nome is undefined";
    pasto.errors.push(error);
  }
  if (typeof pasto.nome !== "string"){
    error= "Nome is not a string";
    pasto.errors.push(error);
  }
  if (pasto.errors.length === 0) {
    res = true;
  }
  return res;
}

function validateDescrizione (pasto) {
  var res = false;
  var error;
  if (pasto.descrizione === ""){
    error = "Descrizione is empty";
    pasto.errors.push(error);
  }
  if (pasto.descrizione === undefined){
    error = "Descrizione is undefined";
    pasto.errors.push(error);
  }
  if (typeof pasto.descrizione !== "string"){
    error= "Descrizione is not a string";
    pasto.errors.push(error);
  }
  if (pasto.errors.length === 0) {
    res = true;
  }
  return res;
}

function validateFotoURL (pasto) {
  var res = false;
  var error;
  if (pasto.fotoURL === ""){
    error = "Foto URL is empty";
    pasto.errors.push(error);
  }
  if (pasto.fotoURL === undefined){
    error = "Foto URL is undefined";
    pasto.errors.push(error);
  }
  if (typeof pasto.fotoURL !== "string"){
    error= "Foto URL is not a string";
    pasto.errors.push(error);
  }
  if (pasto.errors.length === 0) {
    res = true;
  }
  return res;
}

function validateVideoURL (pasto) {
  var res = false;
  var error;
  if (pasto.videoURL === ""){
    error = "Video URL is empty";
    pasto.errors.push(error);
  }
  if (pasto.videoURL === undefined){
    error = "Video URL is undefined";
    pasto.errors.push(error);
  }
  if (typeof pasto.videoURL !== "string"){
    error= "Video URL is not a string";
    pasto.errors.push(error);
  }
  if (pasto.errors.length === 0) {
    res = true;
  }
  return res;
}


function isValid(pasto) {
    var res = true;

    if (!validateId(pasto)) {
      res = false;
    }
    if (!validateNome(pasto)) {
      res = false;
    }
    if (!validateDescrizione(pasto)) {
      res = false;
    }
    if (!validateFotoURL(pasto)) {
      res = false;
    }
    if (!validateVideoURL(pasto)) {
      res = false;
    }

    return res;
}

function addPasto(pasto) {
  var res = false;
  if (isValid(pasto)){

    if (pasti.length <= 0 || !getPastoById(pasto)){

      pasti.push(pasto);
      res = true;
    }
  }
  return res;
}

function getPastoById (pasto) {
  var res = false;
  for (var i = 0; i < pasti.length; i++) {
    if (pasti[i].id === pasto.id){
      res = pasti[i];
    }
  }
  return res;
}
function cleanPasti () {
  var new_pasti = [];
  pasti = new_pasti;
}

exports.isValid = isValid;
exports.addPasto = addPasto;
exports.getPastoById = getPastoById;
exports.cleanPasti = cleanPasti;
