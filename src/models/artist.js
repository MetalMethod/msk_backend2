var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artistSchema = new Schema({

  name: { type: String, Required:  'Artist name cannot be left blank.' },
  genre:    { type: String, Required:  'Genre cannot be left blank.'},
  description: { type: String },
  country: { type: String },
  album: { type: String },
  user: { type: String },
  bestSong: { type: String },
  secondBestSong: { type: String }
});

module.exports = mongoose.model('Artists', artistSchema);
