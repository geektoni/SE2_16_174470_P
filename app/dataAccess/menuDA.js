var pastiDA = require('../dataAccess/pastiDA.js');
var dataDA = require('../dataAccess/dataDA.js');

var menu = [];

function addScelta (pasto,data) {
  var newScelta = {
    dataDA.toString(data) : pastiDA.getPastoById(pasto.id);
  }

  menu.push(newScelta);
}
