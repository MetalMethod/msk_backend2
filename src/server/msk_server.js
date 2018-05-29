// importing dependencies
var express = require('express');
var app = express();
var config = require('./../config');
var middleware = require('./../middleware/middleware.js');
var db = require('./../dbConnection/connection.js');
var artistsController = require('./../controllers/artistsController');
var bodyParser = require('body-parser');
var routes = require('./../routes/routes');
var helmet = require('helmet');
var logger = require('./../middleware/logger');

//database connection
db.connect()

//Helmet - multi security tooling
// reference for helmet:
// https://expressjs.com/en/advanced/best-practice-security.html
app.use(helmet())

// add json parser to all requests and responses
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// pass app object to middleware and receive JWT check object to use in restricted routes.
var checkJwt =  middleware(app);

// add all routes
routes(app, checkJwt);

// Launch our API Server and have it listen on port defined in constant.
app.listen(config.API_PORT);

////provide console output and loggin to file:
var separator = '\n\n\r########################################\n\n\r';
console.log(separator, 'ms.k API running at: ', config.API_DOMAIN, config.API_PORT, separator, 'Press Ctrl+C no stop the development server.')
logger.info('msk server API started', config.API_DOMAIN, config.API_PORT);

