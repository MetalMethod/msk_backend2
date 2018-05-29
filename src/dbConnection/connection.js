
// this file creates a single connection to the data base. 
var mongoose = require('mongoose');
var config = require('./../config');

//This is the deafult schema
var schema = require('./../models/artist.js');

//It builds all the models that are required here.
var countrySchema = require('./../models/countries.js');

// logger object to save to file outside src
var logger = require('./../middleware/logger');

mongoose.Promise = global.Promise;

var db, artistModel;

exports.connect = function () {

    const connection = mongoose.connect(config.DB_CONNECTION_URI, {dbName: config.DB_NAME});

    db = mongoose.connection;

    //checking for connection
    db.on('error', function(){
        logger.error('Error connecting to database.')
    });

    db.once('open', function () {
        // we're connected!
        logger.info('Successfully connected to database.');
    });
};

exports.artist = function(){
    return artistModel;
};