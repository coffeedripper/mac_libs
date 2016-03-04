var express = require('express');
var router = express.Router();
var Maclib = require('../../models/maclib');

router.get('/', function(req, res) {

    Maclib.find({}, function(err, maclib) {
        if (err) {
            throw err;
            console.log(err);
        };
        console.log(maclib);
        res.send(maclib);

        // }); //res end//
    }); //Maclib.find//
}); //router.get//


// "Create" action to create a new quote
router.post('/', function(req, res) {
    console.log("maclib body" + req.body.body);
    var maclib = new Maclib({

        body: req.body.body,
        author: req.body.author

    });

    maclib.save(function(err, maclib) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(maclib);
    });
});

module.exports = router;
