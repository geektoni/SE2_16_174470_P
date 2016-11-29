var categoriaModel = require('/models/categoria.js');

var categorie = [];

var primo = new categoria(1,'Primo');
var secondo = new categoria(2,'Secondo');

var cat1 = {
  "Primo": primo;
}

var cat2 = {
  "Secondo": secondo;
}

categorie.push(cat1);
categorie.push(cat2);

function getCategoriaByName(nome){
  return categorie[nome];
}

exports.getCategoriaByName = getCategoriaByName;
