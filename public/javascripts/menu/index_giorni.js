$(".giorno").click(function () {
    var current_url = window.location.href;
    var destination_url = current_url + "/giorno/"+$(this).text();
    console.log(current_url);
    console.log(destination_url);
});