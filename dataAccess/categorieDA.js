var Categoria = require('../models/categoria.js');

var categorie = [];

function validateNome (categoria) {
  res = false;
  var error;

  if (categoria.nome === '') {
    error = "Nome is empty";
    categoria.errors.push(error);
  }
  if (categoria.nome === undefined) {
    error = "Nome is undefined";
    categoria.errors.push(error);
  }
  if (categoria.errors.length === 0) {
    res = true;
  }

  return res;
}

function isValid (categoria) {
  var res = true;
  if (!validateNome(categoria)){
    res = false;
  }
  return res;
}

function addCategoria(categoria) {
  var res = false;
  if (isValid(categoria)){
    categorie.push(categoria);
    res = true;
  }
  return res;
}


function getCategoriaByName(nome){
  var res = false;
  for (var i = 0; i < categorie.length; i++) {
    if (categorie[i][nome]){
      res = categorie[i][nome];
    }
  }
  return res;
}

exports.addCategoria = addCategoria;
exports.getCategoriaByName = getCategoriaByName;
