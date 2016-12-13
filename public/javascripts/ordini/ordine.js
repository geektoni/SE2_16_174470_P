// ------------------- Initialization ---------------------

// Pasto selezionato
var pasto_id;

//Le righe che contengono la lista dei divisi pasti per categoria
var categorie_rows = $(".categoria_row");

//Mostra solo la lista della prima categoria
categorie_rows.each(function (index,elem) {
    if (index != 0){
        $(elem).hide();
    }
});

//Nasconde la sezione del riepilogo
$("#riepilogo").hide();

// --------------------------------------------------------

// Evidenzia il pasto che si vuole selezionare
$(".card").mouseover(function () {
    $(this).css({"border": "1px solid black"});
});

// Deseleziona il pasto precedentemente selezionato
$(".card").mouseleave(function () {
    $(this).css({"border": "1px solid rgba(0,0,0,.125)"});
});

// Salva temporaneamente il pasto selezionato
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
    // Trova l'indice della prossima riga da mostrare e nasconde quella visibile
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
        // Se ci sono elementi da mostrare
        if (found) {
            //Mostro l'elemento successivo
            categorie_rows.eq(next_index).show();
        } else {
            // Altrimenti mostra il riepilogo
            get_riepilogo();
        }
    });
});

// Chiede al backend la lista del pasti selezionati dall'utente e costruisce la vista
var get_riepilogo = function () {

    $("#riepilogo").show();

    giorno = $("#giorno").text(),

    $.get('/ordini/riepilogo/'+giorno, function (data) {
        displayScelte(data);
    })
};

// Costruisce la vista con il riepilogo dei pasti scelti
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

// Invia al backend la conferma di creazione dell'ordine
$("#crea").click(function () {
    $.post('/ordini/create',function () {
        alert("Ordine aggiunto con successo!");
        // TODO: La settimana dev'esser parametrizzata
        location.href='/settimana/1';
    })
});

// Annulla le scelte e ricomincia la procedura dall'inizio
$("#annulla").click(function () {
    $.ajax({
        url: '/ordini/delete',
        type: 'DELETE',
        success: function() {
            location.reload();
        }
    });
});



