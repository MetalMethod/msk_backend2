// importing dependencies
var express = require('express');
var app = express();
var config = require('./../config');
var middleware = require('./middleware.js');
var db = require('./../models/connection.js');
var artistsController = require('./../controllers/artistsController');
var bodyParser = require('body-parser');
var routes = require('./../routes/routes');
var middleware = require('./middleware');

//database connection
db.connect()

// add json parser to all requests and responses
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

// add all routes
routes(app);

// pass app object to middleware
middleware(app);

// Launch our API Server and have it listen on port defined in constant.
app.listen(config.API_PORT);

////provide console output:
var separator = '\n\n\r########################################\n\n\r';
console.log(separator, 'ms.k API running at: ', config.API_DOMAIN, config.API_PORT, separator, 'Press Ctrl+C no stop the server.')


