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
        if (response instanceof Error) {
          throw Error(`There was an error - ${response.message}`);
        } else if (isNaN(response.conversion_rates[currency])) {
          throw Error(`There was an error: The currency does not exist.`);
        } else {
        const data = response; 
        const rate = data.conversion_rates[currency];
        const num = rate * USD;
        const amount = num.toFixed(2);
        $('.show-exchange').text(`The currency exchange rate is $${rate} and the amount is ¤${amount}`);
        }
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  });
});