var dataModel = requre('../models/data.js');

var date = [];

var data_test = new data(01, 1, 1, 2017);

date.push(data_test);

function getDataBySettimana(settimana) {
  return date[settimana - 1];
}

function toString(data) {
  var data =  data.giorno.toString()+
              data.mese.toString() +
              data.anno.toString();
  return data;
}

exports.getDataBySettimana = getDataBySettimana;
exports.toString = toString;
