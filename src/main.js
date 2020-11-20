import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service.js';

function clearFields() {
  $('#dollars').val("");
}

function displayEuro(response) {
  let euro = response.conversion_rates.EUR;
  $('.show-euro-exchange').text(`${euro} in Euros!`);
}

function displayErrors(error) {
  $('.show-errors').text(`${error}`);
}

$(document).ready(function() {
  $('#exchange').click(function() {
    // let dollars = $('#dollars').val();
    // let euro = dollars * response.conversion_rates.EUR;
    clearFields();
    CurrencyService.getExchange()
      .then(function(response) {
        if (response instanceof Error) {
          throw Error(`ExchangeRate API error: ${response.message}`);
        } 
        displayEuro();
      })
      .catch(function(error) {
        displayErrors(error.message);
      });

  });
});

// let euro = `${dollars}` * getExchange.conversion_rates.ERU; need in function displayEuro? or part of const euro = 