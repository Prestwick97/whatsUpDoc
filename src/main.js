// User Interface Logic
import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DocService } from './API-call';

$(document).ready(function() {

  $('#doctorFind').submit(function(event) {
const userSearch = $('#docSearch').val();

    (async () => {
      let docService = new DpcService();
      const response = await docService.getDocByName();
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('').text(``);
      } else {
        $('').text(`There was an error handling your request.`);
      }
    }

  });
});