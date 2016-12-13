var Ordine = require('../../models/ordine.js');
var ordiniDA = require('../../dataAccess/ordiniDA.js');

xdescribe("Add Ordine Test",function () {
    var pasto_id_test = 1;
    var pasto_id_test_2 = 2;
    var giorno_test = "1-1-2017";
    var giorno_test_2 = "2-1-2017";

    var new_ordine = new Ordine(giorno_test, pasto_id_test);
    var new_ordine_2 = new Ordine(giorno_test_2, pasto_id_test_2);

    beforeEach(function (done) {
        ordiniDA.cleanOrdini();
        ordiniDA.cleanTmpOrdini();
        done();
    });

    it("should add a new ordine",function () {
        var res = ordiniDA.addOrdine(new_ordine);
        expect(res).toEqual(true);
    });

    it("should add another new ordine if not exists",function () {
        ordiniDA.addOrdine(new_ordine);
        var res = ordiniDA.addOrdine(new_ordine_2);

        expect(res).toEqual(true);

    });

    it ("should not add an existing pasto",function () {
        ordiniDA.addOrdine(new_ordine);
        var res = ordiniDA.addOrdine(new_ordine);
        expect(res).toEqual(false);
    });

});

    describe("getOrdiniByGiorno test",function () {
        var pastiDA = require('../../dataAccess/pastiDA.js');
        var Pasto = require('../../models/pasto.js');

        var pasto_id_test = 1;
        var pasto_id_test_2 = 2;
        var giorno_test = "1-1-2017";
        var giorno_test_2 = "2-1-2017";

        var new_ordine = new Ordine(giorno_test, pasto_id_test);
        var new_ordine_2 = new Ordine(giorno_test, pasto_id_test_2);

        it("should return all pasti ordered", function () {
            var pasto_test = new Pasto(1, 'Pasta in bianco', 'Piatto semplice', 'fotoURL', 'videoURL', "Primo");
            var pasto_test_2 = new Pasto(2, 'Pasta al pomodoro', 'Piatto semplice', 'fotoURL', 'videoURL', "Primo");

            pastiDA.cleanPasti();

            pastiDA.addPasto(pasto_test);
            pastiDA.addPasto(pasto_test_2);

            ordiniDA.addOrdine(new_ordine);
            ordiniDA.addOrdine(new_ordine_2);

            var res = ordiniDA.getOrdiniByGiorno(new_ordine);

            var expected_res = {
                "giorno" : giorno_test,
                "scelte" : [pasto_test,pasto_test_2]
            };

            expect(res).toEqual(expected_res);
        })
    });