var dataModel = requre('../models/data.js');

var date = [];

var data_test = dataModel.createData(01, 1, 1, 2017);

date.push(data_test);

function getDataBySettimana(settimana) {
  return date[settimana - 1];
}
