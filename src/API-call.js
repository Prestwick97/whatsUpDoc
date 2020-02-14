export class DocService {
  async getDocByName() {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=45.773,-122.413,100&skip=2&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch {
      return false;
    }
  }
}