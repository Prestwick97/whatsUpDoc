// User Interface Logic
import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DocService } from './API-call';

$(document).ready(function() {
  $('#doctorFind').submit(function(event) {
    event.preventDefault();
    const name = $('#docSearch').val();
    // $('#docSearch').val("")

    (async () => {
      let docService = new DocService();
      const response = await docService.getDocByName(name);
      getElements(response);
    })();

    function getElements(response) {
      for (let i = 0; i<=9; i++) {
        let docName = `${response.data[i].practices[0].name}`;
        let docPatients = `${response.data[i].practices[0].accepts_new_patients}`;
        let docWeb = `${response.data[i].practices[0].website}`;
        let docNum = `${response.data[i].practices[0].phones[0].number}`;
        console.log(docName + docPatients + docWeb + docNum);
        // $('#docResult').append(docName);
        if (response) {
          $('#docResult').append(docName + docPatients + docWeb + docNum);
        } else {
          $('#docResult').text(`There was an error handling your request.`);
        }
      }
      // let docName = `${response.data[0,1].practices[0].name}`
    }
  });
});