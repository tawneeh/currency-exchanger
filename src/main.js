import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service.js';

function clearFields() {
  $('#dollars').val("");
}

function displayEuro(response) {
  const EUR = $('#dollars').val() * response.conversion_rates.EUR;
  $('.show-euro-exchange').text(`${EUR} Euros!`);
}

function displayErrors(error) {
  $('.show-errors').text(`${error}`);
}

$(document).ready(function() {
  $('#exchange').click(function() {
    let dollars = $('#dollars').val();
    clearFields();
    CurrencyService.getExchange(dollars)
      .then(function(response) {
        if (response instanceof Error) {
          throw Error(`ExchangeRate API error: ${response.message}`);
        } 
        const euroAmount = response.conversion_rates.EUR;
        displayEuro(euroAmount);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });

  });
});
