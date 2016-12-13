// This helper function returns true if the current index is a multiple of 4.
// If so, the view will OPEN a new row to the display of a menu
var Handlebars = require('handlebars');

Handlebars.registerHelper('if_open_row', function(index,options) {
    var fnTrue = options.fn;
    var fnFalse = options.inverse;

    return index % 4 == 0 ? fnTrue() : fnFalse();

});

// This helper function returns true if the current index to determine when to CLOSE the current row to the display of a menu
var Handlebars = require('handlebars');

Handlebars.registerHelper('if_close_row', function(index,options) {
    var fnTrue = options.fn;
    var fnFalse = options.inverse;

    return index % 4 == 3 ? fnTrue() : fnFalse();

});