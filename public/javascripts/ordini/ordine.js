//JQuery

// Initialization

// Pasto selezionato
var pasto_id;

//Display dei pasti per categoria
var categorie_rows = $(".categoria_row");

//Mostra solo la lista della prima categoria

categorie_rows.each(function (index,elem) {
    if (index != 0){
        $(elem).hide();
    }
});

//Nasconde la sezione del riepilogo
$("#riepilogo").hide();

$(".card").mouseover(function () {
    $(this).css({"border": "1px solid black"});
});

$(".card").mouseleave(function () {
    $(this).css({"border": "1px solid rgba(0,0,0,.125)"});
});

$(".card").click(function () {
    pasto_id = $(this).attr("id");
});

//Visualizza informazioni prodotto
$("#informazioni .btn-primary").click(function () {
    location.href="/pasti/"+pasto_id;
});

//Conferma scelta pasto

$("#conferma .btn-primary").click(function () {
    var found = false;
    var next_index = 0;
    categorie_rows.each(function (index,elem) {
        if ($(elem).css('display') != 'none') {
            $(elem).hide();
            if ((index + 1) < categorie_rows.length ){
                next_index = index + 1;
                found = true;
            }

        }
    });

    var data = {
        data : $("#giorno").text(),
        pasto_id : pasto_id
    };

    $.post('/ordini/add',data,function () {

        if (found) {
            //Mostro l'elemento successivo
            categorie_rows.eq(next_index).show();
        } else {
            get_riepilogo();
        }
    });




});

var get_riepilogo = function () {

    $("#riepilogo").show();

    giorno = $("#giorno").text(),

    $.get('/ordini/riepilogo/'+giorno, function (data) {
        displayScelte(data);
    })
};

function displayScelte (data) {

    var id,img,nome;
    var lista_scelte = data.scelte;

    for (var i = 0; i < lista_scelte.length; i++) {
        id = lista_scelte[i].id;
        img = lista_scelte[i].fotoURL;
        nome = lista_scelte[i].nome;
        var res = " <div class=\"col-xs-12 col-sm-4 col-md-3\"> "+
                        "<div class=\"card\" id=\""+id+"\">" +
                            "<img class=\"card-img-top photo\" src=\"/images/"+img+"\" alt=\"Card image\">" +
                            "<div class=\"card-block \">"+
                                "<h4 class=\"card-title\">"+nome+"</h4>" +
                            "</div>" +
                        "</div>" +
                    "</div>";
        $("#riepilogo").append(res);
    }
}

$("#crea").click(function () {
    $.post('/ordini/create',function () {
        alert("Ordine aggiunto con successo!");
        location.href='/';
    })
});

$("#annulla").click(function () {
    $.ajax({
        url: '/ordini/delete',
        type: 'DELETE',
        success: function() {
            location.reload();
        }
    });
});



