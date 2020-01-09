import { showAlert, showJqueryAlert } from './messages'
import $ from 'jquery'
import './styles.scss'


document.getElementById('btn-alert')
    .addEventListener('click', showAlert);


$('#btn-alert-jq').click(() => alert('Click with Jquery'));