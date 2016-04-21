var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Maclib = require('../models/maclib.js');

/* GET home page. */
router.get('/', function(req, res) {


    res.render('index', {

        title: 'Text Libs'

    }); //resrender
    // }); //findone
}); //router.get

module.exports = router;
