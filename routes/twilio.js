var express = require('express');
var router = express.Router();


// "Create" action to sms a new quote
router.post('/', function(req, res) {
    var accountSid = process.env.TWILIO_SID;
    var authToken = process.env.TWILIO_TOKEN;
    var twilioNum = process.env.TWILIO_NUM;
    var client = require('twilio')(accountSid, authToken);

    client.messages.create({
        to: req.body.cell,
        from: twilioNum,
        body: req.body.msg,
    }, function(err, message) {
        console.log(message);
    });

});

module.exports = router;
