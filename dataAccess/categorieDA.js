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
    if (categorie.length <= 0 || !getCategoriaByNome(categoria)){
      categorie.push(categoria);
      res = true;
    }
  }

  return res;
}

function getAllCateogorie () {
  return categorie;
}

function getCategoriaByNome(categoria){
  var res = false;
  for (var i = 0; i < categorie.length; i++) {
    if (categorie[i].nome === categoria.nome){
      res = categorie[i];
    }
  }
  return res;
}

function cleanCategorie () {
  var new_categorie = [];
  categorie = new_categorie;
}

exports.isValid = isValid;
exports.addCategoria = addCategoria;
exports.getAllCategorie = getAllCateogorie;
exports.getCategoriaByNome = getCategoriaByNome;
exports.cleanCategorie = cleanCategorie;

//DEFAULT VALUES
var categoria_default = new Categoria("Primo");
addCategoria(categoria_default);