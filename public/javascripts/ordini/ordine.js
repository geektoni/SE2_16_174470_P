//JQuery

//Selezione del pasto
var pasto_id;

$(".card").mouseover(function () {
    $(this).css({"border": "1px solid black"});
});

$(".card").mouseleave(function () {
    $(this).css({"border": "0px"});
});

$(".card").click(function () {
    pasto_id = $(this).attr("id");
});

//Visualizza informazioni prodotto
$("#informazioni .btn-primary").click(function () {
    location.href="/pasti/"+pasto_id;
});

//Display dei pasti per categoria
var categorie_rows = $(".categoria_row");

//Mostra solo la lista della prima categoria

categorie_rows.each(function (index,elem) {
    if (index != 0){
        $(elem).hide();
    }
});

//Conferma scelta pasto

$("#conferma .btn-primary").click(function () {
    // Display della prossima categoria

    // Costruisco il JSON di richiesta per l'aggiunta della scelta
    var data = {
        data : $("#giorno").text(),
        pasto_id : pasto_id
    };

    $.post('/ordini/add',data,function () {
        console.log(data);
       console.log("added");
        var next_elem;
        categorie_rows.each(function (index,elem) {
            if ($(elem).css('display') != 'none') {
                $(elem).hide();
                next_elem = index+1;
            }
        });

        //Mostro l'elemento successivo
        categorie_rows.eq(next_elem).show();
    });

});






