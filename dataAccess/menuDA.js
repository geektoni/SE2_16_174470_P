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

/**
 * This function tries to add a Scelta composed by a Pasto and a Data when this Pasto is coocked
 * It first checks if the parameters are valid and then if they don't already exist.
 * If not, it then adds the new Scelta
 * @param pasto the new pasto to be added
 * @param data the new data to be associated with the pasto specified
 * @return res if the Scelta has been added or not
 **/
function addScelta (pasto,data) {
    var res = false;
    var new_settimana = data.settimana.toString();
    // controllo se new_settimana is valid
    var new_giorno = dateDA.toString(data);
    // controllo se new_giorno is valid

    if (pastiDA.isValid(pasto) && dateDA.isValid(data)){
        // Builds the new Scelta object
        var new_scelta_g = {};
        new_scelta_g[new_giorno] = []
        new_scelta_g[new_giorno].push(pasto);

        var new_scelta_s = {};
        new_scelta_s[new_settimana] = [];
        new_scelta_s[new_settimana].push(new_scelta_g);

        if (menu.length > 0) {
            // Find the settimana that corresponds with the data specified
            for (var i = 0; i < menu.length; i++) {
                if(menu[i][new_settimana]) {
                    var found = false;
                    for (var j = 0; j < menu[i][new_settimana].length && !found; j++) {
                        // Tries to find if the data is already inside
                        if (menu[i][new_settimana][j][new_giorno]) {
                            // if the data is already inside it then add only the new pasto
                            menu[i][new_settimana][j][new_giorno].push(pasto);
                            found = true;
                        }
                    }
                    if (!found) {
                        //If the new Data is not inside it adds it
                        menu[i][new_settimana].push(new_scelta_g);
                    }
                    res = true;

                } else {
                    // If the settimana wasn't added it then adds the new Scelta
                    menu.push(new_scelta_s);
                    //Se la transazione e' andata a buon fine
                    res = true;
                }
            }
        } else {
            // If the menu is empty it then adds the new Scelta
            menu.push(new_scelta_s)
            //Se la transazione e' andata a buon fine
            res = true;
        }
    }


    return res;
}

/**
 * This function returns all giorni of the given settimana where at leas a scelta has been specified
 * @param data the new data to be associated with the pasto specified
 * @return res all giorni with at leas a Scelta
 **/
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

/**
 * This function returns all Pasti of the given Giorno
 * @param data the new data
 * @return res all pasti associated with the given Giorno
 **/
function getPastiByGiorno (data) {
    var res = false;
    var settimana = data.settimana.toString();
    var giorno = dateDA.toString(data);

    for (var i = 0; i < menu.length; i++) {
        var week = menu[i][settimana];
        if(week){
            for (var j = 0; j < week.length; j++) {
                var day = week[j][giorno];
                if (day){
                    /*
                     Costruisco il JSON di risposta

                     {
                        "giorno" : giorno,
                        "pasti" :   [    { "Categoria" : [pasto, pasto, pasto] } ,
                                        { "Categoria" : [pasto, pasto, pasto] } ,
                                    ... ]
                     }

                     */
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
    menu = [];
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
var pasto_default_2 = new Pasto(2, 'Pasta al pomodoro', 'Un piatto simbolo della cucina italiana, con i tipici ingredienti del Bel Paese: spaghetti, pomodoro e basilico. Gli spaghetti al pomodoro sono un\'istituzione, una ricetta semplice ma tutt\'altro che banale. Soggetta ad infinite varianti per trovare l\'equilibrio perfetto di sapori, la giusta cremosità e dolcezza partendo già dalla scelta del tipo di pomodoro più adatto. Questo piatto è un vero banco di prova per chi ama prepararlo in casa, ma anche per gli chef stellati che serbano gelosamente i segreti delle loro versioni perfette! Eccoci ai fornelli insieme a voi per suggerirvi la nostra ricetta di questo classico intramontabile: una cottura lenta e dolce dei pomodori pelati, il profumo delle foglioline di basilico fresche sono tra i suggerimenti per un sicuro successo! Sicuramente ricorderete la famosa scena del film "Miseria e Nobiltà", quando Felice Sciosciammocca e gli altri componenti della famiglia si fiondano sul piatto da portata e iniziano ad afferrare gli spaghetti al pomodoro con le mani. Siamo certi che con la nostra versione sarete tentati di fare altrettanto! Buon appetito!', 'spaghetti_pomodoro.jpg', 'videoURL', categoria_default_1);
var pasto_default_3 = new Pasto(3, 'Passato di verdura', 'Piatto semplice', 'passato_verdura.jpg', 'videoURL', categoria_default_1);
var pasto_default_4 = new Pasto(4, 'Pasto 4', 'Piatto semplice', 'gnocchi_pomodoro.jpg', 'videoURL', categoria_default_1);
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

addScelta(pasto_default_5,giorno_default_2);
addScelta(pasto_default_4,giorno_default_2);
addScelta(pasto_default_8,giorno_default_2);



