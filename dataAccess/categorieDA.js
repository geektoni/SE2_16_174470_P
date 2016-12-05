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
  var res = -1;
  for (var i = 0; i < categorie.length; i++) {
    if (categorie[i][nome]){
      res = categorie[i][nome];
    }
  }
  return res;
}

exports.getCategoriaByName = getCategoriaByName;
