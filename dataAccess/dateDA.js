var Data = require('../models/data.js');

var date = [];

/**
 * This function checks if the Data's settimana is correct
 * @param data
 * @return res if the settimana is correct or not
 **/
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

/**
 * This function checks if the Data's giorno is correct
 * @param data
 * @return res if the giorno is correct or not
 **/
function validateGiorno (data) {
  var res = false;
  var error;
  if (data.giorno === undefined) {
    error = "Giorno is undefined";
    data.errors.push(error);
  }

    /**
     * This function checks if the Data's giorno is correct
     * @param data
     * @return res if the giorno is correct or not
     **/
  if (data.giorno === "") {
    error = "Giorno is empty";
    data.errors.push(error);
  }
  if (data.errors.length === 0) {
    res = true;
  }
  return res;
}

/**
 * This function checks if the Data's mese is correct
 * @param data
 * @return res if the mese is correct or not
 **/
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

/**
 * This function checks if the Data's anno is correct
 * @param data
 * @return res if the anno is correct or not
 **/
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

/**
 * This function checks if the Data object is valid
 * @param data
 * @return res if the data has passed all validation tests
 **/
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

/**
 * This function tries to add a Data
 * It first checks if the parameter is valid and then if it does already exist.
 * If not, it then adds the new data
 * @param data the new data to be added
 * @return res if the data has been added or not
 **/
function addData(data) {
  var res = false;
  var settimana = data.settimana.toString();
  var new_data = {};
  new_data[settimana] = [];
  new_data[settimana].push(data);

  if (isValid(data)){
      // Checks if no data were added or if the Settimana is not already inside
      if (date.length <= 0 || !getSettimana(data) ) {
          date.push(new_data);
          res = true;
        // If the Settimana is already inside it checks if the data is already inside into an existing Settimana
      } else if(!getGiornoBySettimana(data)) {
          // If the data is not inside then it adds it
          for (var i = 0; i < date.length; i++) {
              date[i][settimana].push(data);
          }
          res = true;
      }
  }
  return res;
}

/**
 * This function returns the settimana specified
 * @param data the data to be found
 * @return res the data if found
 **/
function getSettimana(data) {
  res = false;
  for (var i = 0; i < date.length; i++) {
    var found = Object.keys(date[i])[0];
    if( found === data.settimana.toString()){
      res = true;
    }
  }
  return res;
}



/**
 * This function returns a Giorno associated with a Settimana specified
 * @param settimana
 * @return res the giorno associated with that settimana if found
 **/
function getGiornoBySettimana(data){
  var res = false;
  var settimana = data.settimana;
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

/**
 * This function returns a Giorno with the correct sintax removing the '-' dividers
 * @param data
 * @return res the giorno parsed
 **/
function parseData (data) {
    var res = "";
    if (data.length > 6){
      res = data.split("-",3);
    }
    return res;
}

/**
 * This function returns a Giorno with the correct syntax reading the parameter properties
 * @param data
 * @return res the giorno with a more readable syntax
 **/
function toString(data) {
  var separator = "-";
  var data =  data.giorno.toString()+separator+
              data.mese.toString() +separator+
              data.anno.toString();
  return data;
}

function cleanDate () {
  date = [];
}

exports.isValid = isValid;
exports.addData = addData;
exports.getSettimana = getSettimana;
exports.getGiornoBySettimana = getGiornoBySettimana;
exports.parseData = parseData;
exports.toString = toString;
exports.cleanDate = cleanDate;

// DEFAULT VALUES
addData(new Data(1, 01, 01, 2017));
addData(new Data(1, 02, 01, 2017));