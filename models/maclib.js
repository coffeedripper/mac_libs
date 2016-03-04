var mongoose = require('mongoose');

var maclibSchema = new mongoose.Schema({

  body: { type: String, required: true},
  author: { type: String, required: true }

});

var Maclib = mongoose.model('Maclib', maclibSchema);

// Make this available to our other files
module.exports = Maclib;




