import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service.js';

function clearFields() {
  $('#dollars').val("");
}

async function makeApiCall(dollars) {
  const response = await CurrencyService.getExchange(dollars);
  getElements(response);
  console.log("makeCall");
}

function getElements(response) {
  const EUR = $('#dollars').val() * response.conversion_rates.EUR;
  $('.show-exchange').text(`${EUR} Euros!`);
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
        makeApiCall(dollars);  
      })
      .catch(function(error) {
        displayErrors(error.message);
      });

  });
});