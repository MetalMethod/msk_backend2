//MUST REQUIRE THIS FILE IN connection.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = new Schema({

    name: { type: String },
    code: { type: String }
},
    // removing the "__v:" property of added entries, set by default by mangoose.
    { versionKey: false }
);

module.exports = mongoose.model('Countries', countrySchema);
