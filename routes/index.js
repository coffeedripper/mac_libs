var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Maclib = require('../models/maclib.js');

/* GET home page. */
router.get('/', function(req, res) {

  // Maclib.findOne({}, function(err, maclib) {
  //   if (err) {
  //       console.log(err);
  //       throw err;

  //   } //if


    res.render('index', {
      // template: maclib,
      title: 'MacLibs'

    }); //resrender
  // }); //findone
}); //router.get

module.exports = router;


