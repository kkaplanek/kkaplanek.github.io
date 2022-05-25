$(document).ready(function() {

    $('button').click(function(){

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {

            $('button').after('<div id="dane-programisty">' + data.imie + ' <br>' + data.nazwisko + ' <br>' + data.zawod + ' <br>' + data.firma + '</div>');

        })

    })

})