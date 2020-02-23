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
      console.log(response);
      for (let i = 0; i<=9; i++) {
        let docFirstName = `${response.data[i].pofile[0].first_name}`;
        let docLastName = `${response.data[i].pofile[0].last_name}`;
        let docPatients = `${response.data[i].practices[0].accepts_new_patients}`;
        let docWeb = `${response.data[i].practices[0].website}`;
        let docNum = `${response.data[i].practices[0].phones[0].number}`;
        let docImg = `${response.data[i].profile.image_url}`;
        console.log(docName + docPatients + docWeb + docNum);
        if (response) {
          $('#docImg').append("<img src = " + docImg +">" + "</img>");
          $('#firstName').append(docFirstName);
          $('#lastName').append(docLastName);
          $('#docPatients').append(docPatients);
          $('#docWeb').append();
          $('#docNum').append();
        } else {
          $('#docResult').text(`There was an error handling your request.`);
        }
      }
    }
  });
});