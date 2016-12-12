//JQuery

//Display dei pasti per categoria
var categorie_rows = $(".categoria_row");

//Mostra solo la lista della prima categoria
console.log(categorie_rows);
categorie_rows.each(function (index,elem) {
    if (index != 0){
        $(elem).hide();
    }
});

//Conferma scelta pasto
$("#conferma .btn-primary").click(function () {
    var next_elem;
    categorie_rows.each(function (index,elem) {
        if ($(elem).css('display') != 'none') {
            $(elem).hide();
            next_elem = index+1;
        }
    });
    console.log(next_elem);
    categorie_rows.eq(next_elem).show();
});

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


