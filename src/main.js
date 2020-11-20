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
    $('.show-exchange').text(`"${response.conversion_rates}"`);
    console.log("wow");
  }
}

async function makeApiCall() {
  const response = await CurrencyService.getExchange();
  getElements(response);
}

$(document).ready(function() {
  $('#exchange').click(function() {
    const dollars = $('#dollars').val();
    clearFields();
    makeApiCall(dollars);
  });
});