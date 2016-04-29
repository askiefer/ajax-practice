"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(result) {
    var fortune = result;
    $('#fortune-text').html(fortune);
    console.log("reached showFortune");
    // TODO: get the fortune and show it in the #fortune-text div
}

function getFortune() {
    $.get('/fortune', showFortune);
    console.log("reached getFortune");
}

$('#get-fortune-button').on('click', getFortune);





// PART 2: SHOW WEATHER

function showWeather(result) {
    var weather = result;
    $('#weather-info').html(weather.forecast + (" ") + weather.temp);
}

function getWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    $.get(url, showWeather);
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', getWeather);




// PART 3: ORDER MELONS

function showOrderResults(results) {
    $('#order-status').html(results.code + (" ") + results.msg);
}
function orderMelons(evt) {
    evt.preventDefault();

    var formInputs = {
        'qty': $('#qty-field').val(),
        'melon_type': $('#melon-type-field').val(),
    };

    $.post("/order-melons.json", formInputs, showOrderResults);

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


