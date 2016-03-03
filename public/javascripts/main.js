var apiRoot = '/api/maclibs/';


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
            $('#lib').append("");
            combine(questArr, tempArr);
            smsLib();


        }
    });
}


function combine(a, t) {

    for (b = 0, u = 0; b < a.length; u++) {

        if (t[u] === null) {
            t[u] = a[b] + " ";
            b++;
        }
    } //end 1st for loop

    var result = t.join("");
    $('#lib').append(result);
    smsLib(result);

} //end of function combine

function smsLib(x) {
    // var msg = $('#lib').val();

    console.log("ajax hit");

    // jQuery sms
    $.ajax({
        url: "/twilio",
        type: "POST",
        data: { msg: x  },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
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
