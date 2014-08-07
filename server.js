// set up ===================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParder   = require('body-parser');
var session			 = require('express-session');

var configDB = require('./config/database.js');

// configuration ===========================
mongoose.connect(configDB.url);

// require('./config/passport')(passport);

// set up our express application
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParder());

app.set('view engine', 'ejs');

// required for passport
app.use(session({ secret: 'weloveyouall'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// routes ==================================
require('./app/routes.js')(app, passport);

// launch ==================================
app.listen(port);
console.log('The magic happens on port ' + port);

