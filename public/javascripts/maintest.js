var apiRoot = '/api/maclibs/';

function macLibs(x) {

    var questArr = [];

    for (i = 0; i < x.length; i++)

        if (x[i].match(/^(noun|verb|adjective)$/)) {
        // var answer = prompt("enter " + x[i]);
        $('#front').html("enter " + x[i]);
        $('#saveAnswer').click(function() {
            var answer = $('#answerBox').val();
            console.log("clicked!");
            questArr.push(answer + " ");
        });

    } else if (!x[i].match(/^("."|"!"|"?"|",")$/)) {
        // console.log("word");
        var word = x[i] + " ";
        questArr.push(word);

    } else {
        // console.log("not a word");
        var punct = x[i];
        // console.log(punct);
        questArr.push(punct);
    }
    var result = questArr.join("");
    console.log(result);
    alert(result);
    $('#front').html(result);
}

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
            console.log(data);
            var templateArr = data[0].body.match(/[,.!?;:]|\b[a-z']+\b/ig);
            macLibs(templateArr);


        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log(".always");
        }); //close ajax get//


















}); //close doc ready
