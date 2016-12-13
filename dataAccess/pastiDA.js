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

/**
 * This function checks if the Pasto object is valid
 * @param pasto
 * @return res if the pasto has passed all validation tests
 **/
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

/**
 * This function tries to add a Pasto
 * It first checks if the parameter is valid and then if it does already exist.
 * If not, it then adds the new data
 * @param pasto the new pasto to be added
 * @return res if the data has been added or not
 **/
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

/**
 * This function returns a Pasto specified by its id
 * @param pasto
 * @return res the pasto if found
 **/
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
var pasto_default_2 = new Pasto(2, 'Pasta al pomodoro', 'Un piatto simbolo della cucina italiana, con i tipici ingredienti del Bel Paese: spaghetti, pomodoro e basilico. Gli spaghetti al pomodoro sono un\'istituzione, una ricetta semplice ma tutt\'altro che banale. Soggetta ad infinite varianti per trovare l\'equilibrio perfetto di sapori, la giusta cremosità e dolcezza partendo già dalla scelta del tipo di pomodoro più adatto. Questo piatto è un vero banco di prova per chi ama prepararlo in casa, ma anche per gli chef stellati che serbano gelosamente i segreti delle loro versioni perfette! Eccoci ai fornelli insieme a voi per suggerirvi la nostra ricetta di questo classico intramontabile: una cottura lenta e dolce dei pomodori pelati, il profumo delle foglioline di basilico fresche sono tra i suggerimenti per un sicuro successo! Sicuramente ricorderete la famosa scena del film "Miseria e Nobiltà", quando Felice Sciosciammocca e gli altri componenti della famiglia si fiondano sul piatto da portata e iniziano ad afferrare gli spaghetti al pomodoro con le mani. Siamo certi che con la nostra versione sarete tentati di fare altrettanto! Buon appetito!', 'spaghetti_pomodoro.jpg', 'videoURL', categoria_default_1);
var pasto_default_3 = new Pasto(3, 'Passato di verdura', 'Piatto semplice', 'passato_verdura.jpg', 'videoURL', categoria_default_1);
var pasto_default_4 = new Pasto(4, 'Pasto 4', 'Piatto semplice', 'gnocchi_pomodoro.jpg', 'videoURL', categoria_default_2);
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



