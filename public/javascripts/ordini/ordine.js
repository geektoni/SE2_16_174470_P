// ------------------- Initialization ---------------------

// Selected Pasto
var pasto_id;

// Rows displaying all Pasti divided by their Categoria
var categorie_rows = $(".categoria_row");

// Shows only the first Categoria rows
categorie_rows.each(function (index,elem) {
    if (index != 0){
        $(elem).hide();
    }
});

// Hides the Riepilogo section
$("#riepilogo").hide();

// --------------------------------------------------------

// Highlight the wanted Pasto
$(".card").mouseover(function () {
    $(this).css({"border": "1px solid black"});
});

// Deselect the Pasto choosen previously
$(".card").mouseleave(function () {
    $(this).css({"border": "1px solid rgba(0,0,0,.125)"});
});

// Save temporary the choosen pasto
$(".card").click(function () {
    pasto_id = $(this).attr("id");
});

// Displays Pasto's show page
$("#informazioni .btn-primary").click(function () {
    location.href="/pasti/"+pasto_id;
});

// Pasto choosen confirmation

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
        // If there are still elements to be displayed
        if (found) {
            //Make the the next element visible
            categorie_rows.eq(next_index).show();
        } else {
            // Otherwise it shows the recap
            get_riepilogo();
        }
    });
});

// Send to the backend all choosen Pasti list
var get_riepilogo = function () {

    $("#riepilogo").show();

    giorno = $("#giorno").text(),

    $.get('/ordini/riepilogo/'+giorno, function (data) {
        displayScelte(data);
    })
};

// Builds the Riepilogo view with choosen Pasti
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

// Send to the backend the confirmation of the order
$("#crea").click(function () {
    $.post('/ordini/create',function () {
        alert("Ordine aggiunto con successo!");
        // TODO: La settimana dev'esser parametrizzata
        location.href='/menu/settimana/1';
    })
});

// Delete all Scelte and reloads the page to begin the procedure
$("#annulla").click(function () {
    $.ajax({
        url: '/ordini/delete',
        type: 'DELETE',
        success: function() {
            location.reload();
        }
    });
});



