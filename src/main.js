import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service.js';

function displayErrors(error) {
  $('.show-errors').text(`${error}`);
}

$(document).ready(function() {
  $('#exchange').click(function() {

    const USD = $('#dollars').val();
    const currency = $('#currency :selected').val();

    CurrencyService.getExchange()
      .then(function(response) {
        if (response instanceof Error || currency !== currency) {
          throw Error(`There was an error - ${response.message}`);
        }
        const data = response; 
        const rate = data.conversion_rates[currency];
        const num = rate * USD;
        const amount = num.toFixed(2);
        $('.show-exchange').text(`The currency exchange rate is $${rate} and the amount is ¤${amount}`);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  });
});