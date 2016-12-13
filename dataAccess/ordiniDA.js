var pastiDA = require('../dataAccess/pastiDA.js');
var Pasto = require('../models/pasto.js');
// Struttura dati contenente la lista degli ordini suddivisi per giorno
// Ogni pasto viene recuperato tramite pastiDA utilizzando l'id salvato

var ordini = [];
var tmp_ordini = [];

/*
    ordini = [
        {   "giorno" : giorno,
            "scelte" : [pasto_id, pasto_id, pasto_id]
        },
        ...
    ]
 */



function addOrdine(ordine) {
    var res = false;
    var data = ordine.data;
    var pasto = ordine.pasti[0];
    if (tmp_ordini.length <= 0) {
        tmp_ordini.push(ordine);
        res = true;
    } else {
        for (var i=0; i < tmp_ordini.length; i++ ) {
            if (tmp_ordini[i].data === data){
                var found = false;
                for (var j=0; j < tmp_ordini[i].pasti.length && !found; j++ ){
                    if (tmp_ordini[i].pasti[j] === pasto){
                        found = true;
                    }
                }
                if (!found) {
                    tmp_ordini[i].pasti.push(pasto);
                    res = true;
                }
            } else {
                tmp_ordini.push(ordine);
                res = true;
            }
        }
    }
    console.log(tmp_ordini);

    return res;
}

function createOrdine(ordine) {
    ordini = tmp_ordini;
    cleanTmpOrdini();
}

function updateOrdine(ordine) {

}

function getOrdiniByGiorno (giorno) {
    var res = false;

    var data = giorno.data;
    for (var i=0; i < tmp_ordini.length; i++ ) {
        if (tmp_ordini[i].data === data){

            res = {};
            res["giorno"] = data;
            res["scelte"] = [] ;

            for (var j=0; j < tmp_ordini[i].pasti.length; j++ ){
                var pasto = new Pasto (tmp_ordini[i].pasti[j]);
                pasto = pastiDA.getPastoById(pasto);
                res["scelte"].push(pasto);
            }

        }
    }

    return res;
}

function cleanOrdini() {
    ordini = [];
}

function cleanTmpOrdini() {
    tmp_ordini = [];
}


exports.addOrdine = addOrdine;
exports.createOrdine = createOrdine;
exports.getOrdiniByGiorno = getOrdiniByGiorno;
exports.cleanOrdini = cleanOrdini;
exports.cleanTmpOrdini = cleanTmpOrdini;