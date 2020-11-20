import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service.js';

function clearFields() {
  $('#dollars').val("");
}

function getElements(response) {
  if (response) {
    $('.show-exchange').text(`response.conversion_rates`);
  }
}

function displayErrors(error) {
  $('.show-errors').text(`${error}`);
}

$(document).ready(function() {
  $('#exchange').click(function() {
    const dollars = $('#dollars').val();
    clearFields();
    CurrencyService.getExchange(dollars)
      .then(function(response) {
        if (response instanceof Error) {
          throw Error(`ExchangeRate API error: ${response.message}`);
        } 
        getElements(response);  
      })
      .catch(function(error) {
        displayErrors(error.message);
      });

  });
});