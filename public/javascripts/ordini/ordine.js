//JQuery

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

//Conferma scelta pasto
$("#conferma .btn-primary").click(function () {

});
