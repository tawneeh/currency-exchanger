import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service.js';

$(document).ready(function() {
  $('#exchange').click(function() {
    // collect input from user
    const USD = $('#dollars').val();
    const currency = $('#currency :selected').val();

    // api call to get USD conversion rates. parse response
    let promise = CurrencyService.getExchange();
    promise.then(function(response) {
      const data = JSON.parse(response); 
      const rate = data.conversion_rates[currency];
      const num = rate * USD;
      const amount = num.toFixed(2);
      $('.show-exchange').text(`The currency exchange rate is $${rate} and the amount is ¤${amount}`);
    }, function(error) {
      $('.show-errors').text(`There was an error with your request: ${error}`);
    });
  });
});