var express = require('express');
var router = express.Router();


// "Create" action to sms a new quote
router.post('/', function(req, res) {
    var accountSid = 'AC8cf030063451b237502859af10be40b3';
    var authToken = '23c4e4834dcbba0e73b9e57d77200aab';
    var client = require('twilio')(accountSid, authToken);

    client.messages.create({
        to: "8312345907",
        from: "+16508262380",
        body: req.body.msg,
    }, function(err, message) {
        console.log(message);
    });

});

module.exports = router;
