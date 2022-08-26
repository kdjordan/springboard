import axios from "axios";

const BASE_API_URL = "http://localhost:3001";
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0.FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc"

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/
axios.defaults.headers.common['Authorization'] = `Bearer: ${AUTH_TOKEN}`

class Jobly {

  static async getCompanies() {
    try {
      const result = await axios.get(`${BASE_API_URL}/companies`);
      return result.data;
    } catch (error) {
      console.log('error getting API ', error)
    }
  }

  static async login(user) {
    try {
        const result = await axios.post(`${BASE_API_URL}/auth/token`,user)
      return result.data;
    } catch (error) {
      return false
    }
  }

  static async signup(user) {
    try {
        const result = await axios.post(`${BASE_API_URL}/auth/register`,user)
      return result.data;
    } catch (error) {
      return false
    }
  }

  static async getUser(username, token) {
    try {
        const result = await axios.get(`${BASE_API_URL}/users/${username}`)
      return result.data;
    } catch (error) {
      return false
    }
  }

}

export default Jobly;
