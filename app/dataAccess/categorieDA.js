var categoriaModel = require('/models/categoria.js');

var categorie = [];

var primo;
primo.id = 1;
primo.name = 'Primo';

var cat1 = {
  "Primo": primo;
}

var secondo;
secondo.id = 2;
secondo.name = 'Secondo';

var cat1 = {
  "Secondo": secondo;
}

categorie.push(cat1);
categorie.push(cat2);

function getCategoriaByName(nome){
  return categorie[nome];
}

exports.getCategoriaByName = getCategoriaByName;
