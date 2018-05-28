
// this file creates a single connection to the data base. 
var mongoose = require('mongoose');
var config = require('./../config');

//This is the deafult schema
var schema = require('./artist.js');

//It builds all the models that are required here.
var countrySchema = require('./countries.js');

// import logger from '../logger';

mongoose.Promise = global.Promise;

var db, artistModel;

exports.connect = function () {

    const connection = mongoose.connect(config.DB_CONNECTION_URI, {dbName: config.DB_NAME});

    db = mongoose.connection;

    // checking for connection
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        // we're connected!
        console.log('\n\r Successfully connected to database.');
    });
};

exports.artist = function(){
    return artistModel;
};