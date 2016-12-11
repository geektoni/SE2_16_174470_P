var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var exphbs = require('express-handlebars');


var index = require('./routes/index');
var users = require('./routes/users');
var pasti = require('./routes/pasti');
var menu = require('./routes/menu');
var ordini = require('./routes/ordini');

var app = express();

// view engine setup
app.set('public', path.join(__dirname, 'views'));
app.engine('handlebars',
    exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');
var options = { dotfiles: 'ignore', etag: false,
    extensions: ['htm', 'html'],
    index: false
};
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public') , options  ));


app.use('/', index);
app.use('/users', users);
app.use('/pasti',pasti);
app.use('/ordini',ordini);
app.use('/menu', menu);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;  
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
