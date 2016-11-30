var dataModel = requre('../models/data.js');

var date = [];

var data_test = {"1" :  [ new data(1, 01, 01, 2017),
                          new data(1, 02, 01, 2017)
                        ]
};

date.push(data_test);

function getDataBySettimana(settimana) {
  return date[settimana];
}

function toString(data) {
  var data =  data.giorno.toString()+
              data.mese.toString() +
              data.anno.toString();
  return data;
}

exports.getDataBySettimana = getDataBySettimana;
exports.toString = toString;
