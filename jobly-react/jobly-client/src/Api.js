import axios from "axios";

const BASE_API_URL = "http://localhost:3030";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getItems(type) {
    try {
      const result = await axios.get(`${BASE_API_URL}/${type}`);
      return result.data;
    } catch (error) {
      console.log('error getting API ', error)
    }
  }
  static async addItem(type, item) {
    delete(item.itemType)
    item['id'] = item.name.split(' ').join('-')
    try {
      const result = await axios.post(`${BASE_API_URL}/${type}`,
        {...item});
      return result.data;
    } catch (error) {
      console.log('error posting API ', error)
    }
  }

}

export default SnackOrBoozeApi;
