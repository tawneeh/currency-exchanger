import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service.js'

function clearFields() {
  $('#dollars').val("");
}

function displayErrors(error) {
  $('.show-errors').text(`${error}`);
}