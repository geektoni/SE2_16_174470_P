var Data = require('../models/data.js');

var date = [];

// var data_test = {"1" :  [ new Data(1, 01, 01, 2017),
//                           new Data(1, 02, 01, 2017)
//                         ]
// };
//
// date.push(data_test);

function validateSettimana (data) {
  var res = false;
  var error;
  if (data.settimana === undefined){
    error = "Settimana is undefined";
    data.errors.push(error);
  }
  if (data.settimana === ""){
    error = "Settimana is empty";
    data.errors.push(error);
  }
  if (data.errors.length === 0) {
    res = true;
  }
  return res;
}

function validateGiorno (data) {
  var res = false;
  var error;
  if (data.giorno === undefined) {
    error = "Giorno is undefined";
    data.errors.push(error);
  }

  if (data.giorno === "") {
    error = "Giorno is empty";
    data.errors.push(error);
  }
  if (data.errors.length === 0) {
    res = true;
  }
  return res;
}

function validateMese (data) {
  var res = false;
  var error;
  if (data.mese === undefined) {
    error = "Mese is undefined";
    data.errors.push(error);
  }
  if (data.mese === "") {
    error = "Mese is empty";
    data.errors.push(error);
  }
  if (data.errors.length === 0) {
    res = true;
  }
  return res;
}

function validateAnno (data) {
  var res = false;
  var error;
  if (data.anno === undefined) {
    error = "Anno is undefined";
    data.errors.push(error);
  }
  if (data.anno === "") {
    error = "Anno is empty";
    data.errors.push(error);
  }
  if (data.errors.length === 0) {
    res = true;
  }
  return res;
}

function isValid(data){
  var res = true;

  if (!validateSettimana(data)){
    res = false;
  }
  if (!validateGiorno(data)){
    res = false;
  }
  if (!validateMese(data)){
    res = false;
  }
  if (!validateAnno(data)){
    res = false;
  }
  return res;
}

function addData(data) {
  var res = false;
  var settimana = data.settimana.toString();
  var new_data = {};
  new_data[settimana] = [];
  new_data[settimana].push(data);

  if (isValid(data)){
      if (date.length <= 0 || !getSettimana(data) ) {
          date.push(new_data);
          res = true;
      } else if(!getGiornoBySettimana(settimana,data)) {
          for (var i = 0; i < date.length; i++) {
              date[i][settimana].push(data);
          }
          res = true;
      }
  }
  return res;
}

function getSettimana(data) {
  res = false;
  for (var i = 0; i < date.length; i++) {
    var found = Object.keys(date[i])[0];
    if( found === data.settimana.toString()){
      res = Object.keys(date[i])[0];
    }
  }
  return res;
}

function getDateBySettimana(settimana) {
  var res = false;
  for (var i=0; i < date.length; i++){
	  if (date[i][settimana]){
		  res = date[i][settimana];
	  }
  }
  return res;
}

function getGiornoBySettimana(settimana,data){
  var res = false;
  var giorno = toString(data);
  for (var i=0; i < date.length; i++){
    if (date[i][settimana]){
      for (var j = 0; j < date[i][settimana].length; j++) {
        if(toString(date[i][settimana][j]) === giorno){
          res = date[i][settimana][j];
        }
      }
	  }
  }
  return res;
}

function toString(data) {
  var data =  data.giorno.toString()+
              data.mese.toString() +
              data.anno.toString();
  return data;
}

function cleanDate () {
  var new_date = [];
  date = new_date;
}

exports.isValid = isValid;
exports.addData = addData;
exports.getDateBySettimana = getDateBySettimana;
exports.getGiornoBySettimana = getGiornoBySettimana;
exports.toString = toString;
exports.cleanDate = cleanDate;
