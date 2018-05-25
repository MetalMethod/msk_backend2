var mongoose = require('mongoose');
var schema = require('./artist.js');
var config = require('./../config');

// import logger from '../logger';

mongoose.Promise = global.Promise;

var artistModel;

var db;

exports.connect = function () {

    const connection = mongoose.connect(config.DB_CONNECTION_URI, {dbName: config.DB_NAME});

    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        // we're connected!
        console.log('\n\r Successfully connected to database.');
    });
};

exports.artist = function(){
    return artistModel;
};