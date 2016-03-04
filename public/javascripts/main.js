var apiRoot = '/api/maclibs/';
$('#saveNumber').hide();
$('#numberBox').hide();

function macLibs(x) {

    var questArr = [];
    var tempArr = [];
    var q = 0;

    for (i = 0; i < x.length; i++) {

        if (x[i].match(/^(noun|verb|adjective)$/)) {

            questArr.push(x[i]);
            tempArr[i] = null;
        } else if (!x[i].match(/^("."|"!"|"?"|",")$/)) {
            var word = x[i] + " ";
            tempArr.push(word);

        } else {
            var punct = x[i];
            tempArr.push(punct);
        }
    }

    $('#lib').append("enter " + questArr[q]);

    $("#saveAnswer").click(function() {
        var answer = $('#answerBox').val();
        questArr[q] = answer;
        $('#lib').empty();
        $('#answerBox').val("");
        q++;

        if (q < questArr.length) {
            $('#lib').append("enter " + questArr[q]);
        };

        if (q === questArr.length) {
            result = combine(questArr, tempArr);
            $('#lib').append("Enter Mobile Number");
            $('#answerBox').hide();
            $('#saveAnswer').hide();
            $('#saveNumber').show();
            $('#numberBox').show();
        }
    });

    $("#saveNumber").click(function() {
        var cell = $('#numberBox').val();
        smsLib(result, cell);
        $('#numberBox').val("");
        $('#lib').empty();
        $('#lib').append("MacLib Sent! <br> Check your Cell! <br> Refresh to Play Again.");
        var cell = null;

    });

} //end mac libs


function combine(a, t) {

    for (b = 0, u = 0; b < a.length; u++) {

        if (t[u] === null) {
            t[u] = a[b] + " ";
            b++;
        }
    } //end 1st for loop

    var result = t.join("");
    return result;
    // $('#lib').append(result);
    // smsLib(result);

} //end of function combine

function smsLib(x, y) {



    // jQuery sms
    $.ajax({
        url: "/twilio",
        type: "POST",
        data: {
            msg: x,
            cell: y
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
            console.log("ajax hit ,err");
        }
    }); //close ajax
}; //close smsTweet//


$(function() {


    $.ajax({
            url: apiRoot,
            type: 'GET',
            dataType: 'json',
            data: {
                body: 'body',
                author: 'author'
            },
        })
        .done(function(data) {
            var libArr = data[0].body.match(/[,.!?;:]|\b[a-z']+\b/ig);
            macLibs(libArr);
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {}); //close ajax get//

}); //close doc ready
