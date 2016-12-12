$(".giorno").click(function () {
    var current_url = window.location.href;
    var destination_url = current_url + "/giorno/"+$(this).text();

    location.href = destination_url;
});