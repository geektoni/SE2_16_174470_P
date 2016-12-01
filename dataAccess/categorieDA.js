var Categoria = require('../models/categoria.js');

var categorie = [];

var primo = new Categoria("Primo");
var secondo = new Categoria("Secondo");

var cat1 = {
  "Primo": primo
}

var cat2 = {
  "Secondo": secondo
}

categorie.push(cat1);
categorie.push(cat2);

function getCategoriaByName(nome){
  return categorie[nome];
}

exports.getCategoriaByName = getCategoriaByName;
