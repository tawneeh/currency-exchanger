import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service.js';

function clearFields() {
  $('#dollars').val("");
}

$(document).ready(function() {
  $('#exchange').click(function() {
    console.log("Click");
    clearFields();
    let promise = CurrencyService.getExchange();
    promise.then(function(response) {
      const data = JSON.parse(response);
      console.log("JSON data");
      $('.show-exchange').text(`The currency exchange is ${data.conversion_rates}`);
      console.log("Show api response");
    }, function(error) {
      $('.show-errors').text(`There was an error with your request: ${error}`);
    });
  });
});