import axios from "axios";

const BASE_API_URL = "http://localhost:3001";
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0.FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc"

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class Jobly {

  static async getCompanies(type) {
    try {
      const result = await axios.get(`${BASE_API_URL}/${type}`, 
      {
        headers: {'Authorization': `Bearer ${authToken}`}
      });
      console.log(result.data)
      return result.data;
    } catch (error) {
      console.log('error getting API ', error)
    }
  }
  // static async addItem(type, item) {
  //   delete(item.itemType)
  //   item['id'] = item.name.split(' ').join('-')
  //   try {
  //     const result = await axios.post(`${BASE_API_URL}/${type}`,
  //       {...item});
  //     return result.data;
  //   } catch (error) {
  //     console.log('error posting API ', error)
  //   }
  // }

}

export default Jobly;
