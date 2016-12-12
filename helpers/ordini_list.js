var Handlebars = require('handlebars');

Handlebars.registerHelper('if_open_row', function(index,options) {
    var fnTrue = options.fn;
    var fnFalse = options.inverse;

    return index % 4 == 0 ? fnTrue() : fnFalse();

});

var Handlebars = require('handlebars');

Handlebars.registerHelper('if_close_row', function(index,options) {
    var fnTrue = options.fn;
    var fnFalse = options.inverse;

    return index % 4 == 3 ? fnTrue() : fnFalse();

});