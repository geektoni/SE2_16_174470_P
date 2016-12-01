var Data = require('../models/data.js');

var date = [];

var data_test = {"1" :  [ new Data(1, 01, 01, 2017),
                          new Data(1, 02, 01, 2017)
                        ]
};

date.push(data_test);

function getDataBySettimana(settimana) {
  var res = -1;
  for (var i=0; i < date.length; i++){
	  if (date[i][settimana]){
		  res = date[i][settimana];
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

exports.getDataBySettimana = getDataBySettimana;
exports.toString = toString;
