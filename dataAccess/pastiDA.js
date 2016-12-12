var Pasto = require('../models/pasto.js');

var categorieDA = require('../dataAccess/categorieDA.js');

var pasti = [];

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
  var found = false;
  for (var i = 0; i < pasti.length && !found; i++) {
    if (pasti[i].id == pasto.id){
      res = pasti[i];
      found = true;
    }
  }
  return res;
}
function cleanPasti () {
  pasti = [];
}

exports.isValid = isValid;
exports.addPasto = addPasto;
exports.getPastoById = getPastoById;
exports.cleanPasti = cleanPasti;

//DEFAULT VALUES
var Categoria = require('../models/categoria.js');

var categoria_default_1 = new Categoria("Primo");
var categoria_default_2 = new Categoria("Secondo");
var categoria_default_3 = new Categoria("Dessert");

var pasto_default_1 = new Pasto(1, 'Tagliatelle', 'Piatto semplice', 'tagliatelle_fresche.jpg', 'videoURL', categoria_default_1);
var pasto_default_2 = new Pasto(2, 'Pasta al pomodoro', 'Piatto semplice', 'spaghetti_pomodoro.jpg', 'videoURL', categoria_default_1);
var pasto_default_3 = new Pasto(3, 'Passato di verdura', 'Piatto semplice', 'passato_verdura.jpg', 'videoURL', categoria_default_1);
var pasto_default_4 = new Pasto(4, 'Pasto 4', 'Piatto semplice', 'pasto.jpg', 'videoURL', categoria_default_2);
var pasto_default_5 = new Pasto(5, 'Pasto 5', 'Piatto semplice', 'pasto.jpg', 'videoURL', categoria_default_2);
var pasto_default_6 = new Pasto(6, 'Pasto 6', 'Piatto semplice', 'pasto.jpg', 'videoURL', categoria_default_2);
var pasto_default_7 = new Pasto(7, 'Pasto 7', 'Piatto semplice', 'pasto.jpg', 'videoURL', categoria_default_3);
var pasto_default_8 = new Pasto(8, 'Pasto 8', 'Piatto semplice', 'pasto.jpg', 'videoURL', categoria_default_3);


addPasto(pasto_default_1);
addPasto(pasto_default_2);
addPasto(pasto_default_3);
addPasto(pasto_default_4);
addPasto(pasto_default_5);
addPasto(pasto_default_6);
addPasto(pasto_default_7);
addPasto(pasto_default_8);



