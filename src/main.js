import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service.js';

function clearFields() {
  $('#dollars').val("");
}

function displayAmount(response) {
  let EUR = $('#dollars').val() * response.conversion_rates.EUR;
  let GBP = $('#dollars').val() * response.conversion_rates.GBP;
  if (response.conversion_rates.EUR) {
    $('.show-exchange').text(`${EUR} in this currency!`);
  } else if (response.conversion_rates.GBP) {
    $('.show-exchange').text(`${GBP} in this currency`);
  }
}

async function makeApiCall(code) {
  const response = await CurrencyService.getExchange(code);
  displayAmount(response);
}

$(document).ready(function() {
  $('#exchange').click(function() {
    clearFields();
    makeApiCall(code);
  });
});