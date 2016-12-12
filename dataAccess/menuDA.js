var pastiDA = require('../dataAccess/pastiDA.js');
var dateDA = require('../dataAccess/dateDA.js');
var categorieDa = require('../dataAccess/categorieDA.js');

/*Struttura menu:

 { "numero_settimana":
 [ {"giorno" :
 ["pasto", "pasto", ... ] },
 {"giorno":
 ["pasto", "pasto", ... ] },
 ...
 ]
 }

 */

var menu = [];

// ---------------------------------------------

function addScelta (pasto,data) {
    var res = false;
    var new_settimana = data.settimana.toString();
    // controllo se new_settimana is valid
    var new_giorno = dateDA.toString(data);
    // controllo se new_giorno is valid

    if (pastiDA.isValid(pasto) && dateDA.isValid(data)){
        var new_scelta_g = {};
        new_scelta_g[new_giorno] = []
        new_scelta_g[new_giorno].push(pasto);

        var new_scelta_s = {};
        new_scelta_s[new_settimana] = [];
        new_scelta_s[new_settimana].push(new_scelta_g);
        if (menu.length > 0) {
            for (var i = 0; i < menu.length; i++) {
                if(menu[i][new_settimana]) {
                    var found = false;
                    for (var j = 0; j < menu[i][new_settimana].length && !found; j++) {
                        if (menu[i][new_settimana][j][new_giorno]) {

                            menu[i][new_settimana][j][new_giorno].push(pasto);
                            found = true;
                        }
                    }
                    if (!found) {
                        menu[i][new_settimana].push(new_scelta_g);

                    }
                    res = true;

                } else {
                    menu.push(new_scelta_s)
                    //Se la transazione e' andata a buon fine
                    res = true;
                }
            }
        } else {
            menu.push(new_scelta_s)
            //Se la transazione e' andata a buon fine
            res = true;
        }
    }


    return res;
}

function getAllGiorni (data) {

    var res = false;
    var settimana = data.settimana.toString();

    for (var i = 0; i < menu.length; i++) {
        var week = menu[i][settimana];
        if(week){
            res = [];
            for (var j = 0; j < week.length; j++ ){
                var day = week[j];
                if (day){
                    res.push(Object.keys(day).pop());
                }
            }
        }
    }
    return res;
}

function getPastiByGiorno (data) {
    var res = false;
    var settimana = data.settimana.toString();
    var giorno = dateDA.toString(data);

    /*
     Costruisco il JSON di risposta

     {
     "giorno" : giorno,
     "pasti" : [   { "Categoria" : [pasto, pasto, pasto] } ,
     { "Categoria" : [pasto, pasto, pasto] } ,
     ... ]
     }

     */

    for (var i = 0; i < menu.length; i++) {
        var week = menu[i][settimana];
        if(week){
            for (var j = 0; j < week.length; j++) {
                var day = week[j][giorno];
                if (day){
                    // Costruisco il JSON di risposta
                    res = {};
                    res["giorno"] = giorno;
                    res["menu"] = [];
                    var all_categorie = categorieDa.getAllCategorie();

                    // Riempio il JSON con le categorie su cui dividere i pasti del giorno
                    for (var cat = 0; cat < all_categorie.length; cat++) {
                        var categoria = {};
                        categoria["nome"] =  all_categorie[cat].nome;
                        categoria["pasti"] = [];
                        res["menu"].push(categoria);

                        // assegno i piatti alla categorie di appartenenza
                        for (var k = 0; k < day.length; k++){
                            if (day[k]){
                                nome_categoria = res["menu"][cat].nome;
                                if (nome_categoria === day[k].categoria.nome ){
                                    res["menu"][cat]["pasti"].push(day[k]);
                                }
                            }
                        }

                    }
                }
            }
        }
    }

    return res;
}

function cleanMenu () {
    var new_menu = [];
    menu = new_menu;
}

exports.addScelta = addScelta;
exports.getAllGiorni = getAllGiorni;
exports.getPastiByGiorno = getPastiByGiorno;
exports.cleanMenu = cleanMenu;

// DEFAULT VALUES
var Pasto = require('../models/pasto.js');
var Categoria = require('../models/categoria.js');
var Data = require('../models/data.js');

var giorno_default_1 = new Data(1, 01, 01, 2017);
var giorno_default_2 = new Data(1, 02, 01, 2017);

var categoria_default_1 = new Categoria("Primo");
var categoria_default_2 = new Categoria("Secondo");
var categoria_default_3 = new Categoria("Dessert");

var pasto_default_1 = new Pasto(1, 'Tagliatelle', 'Piatto semplice', 'tagliatelle_fresche.jpg', 'videoURL', categoria_default_1);
var pasto_default_2 = new Pasto(2, 'Pasta al pomodoro', 'Piatto semplice', 'spaghetti_pomodoro.jpg', 'videoURL', categoria_default_1);
var pasto_default_3 = new Pasto(3, 'Passato di verdura', 'Piatto semplice', 'passato_verdura.jpg', 'videoURL', categoria_default_1);
var pasto_default_4 = new Pasto(4, 'Pasto 4', 'Piatto semplice', 'gnocchi_pomodoro.jpg', 'videoURL', categoria_default_2);
var pasto_default_5 = new Pasto(5, 'Pasto 5', 'Piatto semplice', 'pasto.jpg', 'videoURL', categoria_default_2);
var pasto_default_6 = new Pasto(6, 'Pasto 6', 'Piatto semplice', 'pasto.jpg', 'videoURL', categoria_default_2);
var pasto_default_7 = new Pasto(7, 'Pasto 7', 'Piatto semplice', 'pasto.jpg', 'videoURL', categoria_default_3);
var pasto_default_8 = new Pasto(8, 'Pasto 8', 'Piatto semplice', 'pasto.jpg', 'videoURL', categoria_default_3);

addScelta(pasto_default_1,giorno_default_1);
addScelta(pasto_default_2,giorno_default_1);
addScelta(pasto_default_3,giorno_default_1);
addScelta(pasto_default_4,giorno_default_1);
addScelta(pasto_default_5,giorno_default_1);
addScelta(pasto_default_6,giorno_default_1);
addScelta(pasto_default_7,giorno_default_1);
addScelta(pasto_default_8,giorno_default_1);

addScelta(pasto_default_1,giorno_default_2);
addScelta(pasto_default_4,giorno_default_2);
addScelta(pasto_default_8,giorno_default_2);



