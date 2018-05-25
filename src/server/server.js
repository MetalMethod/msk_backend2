// importing dependencies
var express = require('express');
var app = express();
var config = require('./../config');
var middleware = require('./middleware.js');
var db = require('./../models/connection.js');
var artistsController = require('./../controllers/artistsController');
var bodyParser = require('body-parser');
var routes = require('./../routes/routes');

//database connection
db.connect()

// add json parser to all requests and responses
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

// add all routes
routes(app);

///////##########################
// Enable the use of the jwtCheck middleware in all of our routes

//app.use(middleware.guard)

// app.use(middleware.jwtCheck)

// app.get('/authorized', function (req, res) {
//     res.send('Secured Resource');
// });

// // If we do not get the correct credentials, we’ll return an appropriate message
// app.use(function (err, req, res, next) {
//     if (err.name === 'UnauthorizedError') {
//         res.status(401).json({ message: 'Missing or invalid token' });
//     }
// });

// ///////##########################

// Launch our API Server and have it listen on port defined in constant.
app.listen(config.API_PORT);

////provide console output:
var separator = '\n\n\r########################################\n\n\r';
console.log(separator, 'ms.k API running at: ', config.API_DOMAIN, config.API_PORT, separator, 'Press Ctrl+C no stop the server.')


