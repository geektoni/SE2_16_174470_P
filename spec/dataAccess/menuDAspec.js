var Pasto = require('../../models/pasto.js');
var Categoria = require('../../models/categoria.js');
var Data = require('../../models/data.js');

var categorieDA = require('../../dataAccess/categorieDA.js');
var dateDA = require('../../dataAccess/dateDA.js');
var pastiDA = require('../../dataAccess/pastiDA.js');
var menuDA = require('../../dataAccess/menuDA.js');

/*Struttura menu:
 { "numero_settimana":
 [ {"data" : ["pasto", "pasto", ... ] },
 {"data": ["pasto", "pasto", ... ] },
 ... ]
 }
 */

function cleanDB() {
    pastiDA.cleanPasti();
    dateDA.cleanDate();
    categorieDA.cleanCategorie();
    menuDA.cleanMenu();
}

describe("Menu DA Test", function () {

    describe('Add valid scelta test', function () {

        it("should add a new scelta", function () {
            cleanDB();
            var categoria_test = new Categoria("Terzo");
            categorieDA.addCategoria(categoria_test);
            categoria_test = categorieDA.getCategoriaByNome(categoria_test.nome);

            var pasto_test = new Pasto(1, 'Pasta al ragu', 'Piatto semplice', 'fotoURL', 'videoURL', categoria_test);
            pastiDA.addPasto(pasto_test);
            pasto_test = pastiDA.getPastoById(pasto_test);
            var data_test = new Data(1, 01, 01, 2017);

            dateDA.addData(data_test);
            giorno_test = dateDA.getGiornoBySettimana(data_test);

            var res = menuDA.addScelta(pasto_test, giorno_test);
            expect(res).toEqual(true);
        });
    });

    describe('getAllGiorni test', function () {
        var giorno_test_1 = new Data(1, 01, 01, 2017);
        var giorno_test_2 = new Data(1, 02, 01, 2017);
        var categoria_test = new Categoria("Primo");
        var pasto_test_1 = new Pasto(1, 'Pasta in bianco', 'Piatto semplice', 'fotoURL', 'videoURL', categoria_test);
        var pasto_test_2 = new Pasto(2, 'Pasta al pomodoro', 'Piatto semplice', 'fotoURL', 'videoURL', categoria_test);

        var settimana_test = new Data(1);

        it("should return all giorni when given a settimana", function () {
            cleanDB();
            dateDA.addData(giorno_test_1);
            dateDA.addData(giorno_test_2);
            //Lunedi
            menuDA.addScelta(pasto_test_1, giorno_test_1);
            menuDA.addScelta(pasto_test_2, giorno_test_1);
            //Martedi
            menuDA.addScelta(pasto_test_2, giorno_test_2);

            var expected_res = [dateDA.toString(giorno_test_1), dateDA.toString(giorno_test_2)];

            var res = menuDA.getAllGiorni(settimana_test);

            expect(res).not.toBe(undefined);
            expect(res).not.toEqual([]);
            expect(res.length).toEqual(2);
            expect(res).toEqual(expected_res);
        });

        it("should return false list if settimana not found", function () {
            cleanDB();
            dateDA.addData(giorno_test_1);
            var wrong_settimana = new Data(3);
            var res = menuDA.getAllGiorni(wrong_settimana);
            expect(res).toEqual(false);
        });
    });

    describe("getPastiByGiorno test", function () {
        var giorno_test_1 = new Data(1, 01, 01, 2017);
        var categoria_test_1 = new Categoria("Primo");
        var categoria_test_2 = new Categoria("Secondo");
        var pasto_test_1 = new Pasto(1, 'Pasta in bianco', 'Piatto semplice', 'fotoURL', 'videoURL', categoria_test_1);
        var pasto_test_2 = new Pasto(2, 'Pasta al pomodoro', 'Piatto semplice', 'fotoURL', 'videoURL', categoria_test_2);

        var settimana_test = new Data(1);

        it("should return all pasti of a given giorno", function () {
            cleanDB();
            categorieDA.addCategoria(categoria_test_1);
            categorieDA.addCategoria(categoria_test_2);
            dateDA.addData(giorno_test_1);
            menuDA.addScelta(pasto_test_1, giorno_test_1);
            menuDA.addScelta(pasto_test_2, giorno_test_1);

            var res = menuDA.getPastiByGiorno(giorno_test_1);

            var expected_res = {
                "giorno": dateDA.toString(giorno_test_1),
                "menu": [
                    {
                        "nome": pasto_test_1.categoria.nome,
                        "pasti": [pasto_test_1]
                    },
                    {
                        "nome": pasto_test_2.categoria.nome,
                        "pasti": [pasto_test_2]
                    }
                ]
            };

            expect(res).not.toBe(undefined);
            expect(res).toEqual(expected_res);
        });

        it("should return empty list if giorno not found", function () {
            cleanDB();
            var data_not_exist = new Data(1, 5, 7, 2020);
            var res = menuDA.getPastiByGiorno(data_not_exist);

            expect(res).not.toBe(undefined);
            expect(res).toEqual(false);
        });
    });
});


