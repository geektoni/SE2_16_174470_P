var Categoria = require('../models/categoria.js');

var categorie = [];

/**
 * This function checks if the Categoria'nome is correct
 * @param categoria
 * @return res if the name is correct or not
 **/
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

/**
 * This function checks if the Categoria object is valid
 * @param categoria
 * @return res if the categoria has passed all validation tests
 **/
function isValid (categoria) {
  var res = true;
  if (!validateNome(categoria)){
    res = false;
  }
  return res;
}

/**
 * This function tries to add a Categoria
 * It first checks if the parameter is valid and then if it does already exist.
 * If not, it then adds the new categoria
 * @param categoria the new categoria to be added
 * @return res if the categoria has been added or not
 **/
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

/**
 * This function return all categorie stored
 * @return res categorie list
 **/
function getAllCateogorie () {
  return categorie;
}

/**
 * This function returns a Categoria by the specified name
 * @param categoria the name to find
 * @return res if the categoria found or not
 **/
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
  categorie = [];
}

exports.isValid = isValid;
exports.addCategoria = addCategoria;
exports.getAllCategorie = getAllCateogorie;
exports.getCategoriaByNome = getCategoriaByNome;
exports.cleanCategorie = cleanCategorie;

//DEFAULT VALUES
var categoria_default_1 = new Categoria("Primo");
var categoria_default_2 = new Categoria("Secondo");
var categoria_default_3 = new Categoria("Dessert");

addCategoria(categoria_default_1);
addCategoria(categoria_default_2);
addCategoria(categoria_default_3);
