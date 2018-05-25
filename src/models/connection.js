var mongoose = require('mongoose');
var schema = require('./artist.js');
var config = require('./../config');

// import config from '../../config';
// import logger from '../logger';

mongoose.Promise = global.Promise;

const DB_CONNECTION_URI = config.DB_CONNECTION_URI;
const DB_NAME           = config.DB_NAME;

var artistModel;

var db;

exports.connect = function () {

    const connection = mongoose.connect(DB_CONNECTION_URI, {dbName: DB_NAME});

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