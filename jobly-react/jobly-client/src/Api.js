import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class Jobly {
  static token 
  
  static async request(endpoint, data = {}, method = "get") {
    console.log('in request token', Jobly.token)
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${this.token}` }
    const params = (method === "get")
        ? data
        : {}

    try {
      return (await axios({ url, method, data, params, headers })).data
    } catch (err) {
      console.error("API Error:", err.response)
      let message = err.response.data.error.message
      throw Array.isArray(message) ? message : [message]
    }
  }

  // Individual API routes
  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`)
    return res.company;
  }

  static async getCompanies() {
    let res = await this.request('companies')
    return res.companies;
  }

  static async getJobs() {
    let res = await this.request('jobs')
    return res.jobs;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`)
    return res.user
  }

  static async patchUser(username, data) {
    let res = await this.request(`users/${username}`, data, 'patch')
    return res.user
  }


  //unauth routes
  //allows for login and signup -> returns token that is stored in this class
  static async login(user) {
    let res = await this.request(`auth/token`, user, 'POST')
    return res.token;
  }
  static async signup(user) {
    let res = await this.request(`auth/register`, user, 'POST')
    return res.token;
  }


  
  // static async getCompanies() {
  //   try {
  //     const result = await axios.get(`${BASE_API_URL}/companies`, this.authHeader);
  //     let {companies} = result.data
  //     return companies
  //   } catch (error) {
  //     console.log('error getting companies ', error)
  //     return false
  //   }
  // }

  // static async getJobs() {
  //   try {
  //     const result = await axios.get(`${BASE_API_URL}/jobs`, this.authHeader);
  //     let {jobs} = result.data
  //     return jobs
  //   } catch (error) {
  //     console.log('error getting jobs ', error)
  //     return false
  //   }
  // }

  // static async login(user) {
  //   try {
  //       const result = await axios.post(`${BASE_API_URL}/auth/token`,user)
  //       console.log('the token is ', result.data.token) 
  //       this.token = result.data.token
  //     return result.data;
  //   } catch (error) {
  //     console.log('error getting token ', error)
  //     return false
  //   }
  // }

  // static async signup(user) {
  //   try {
  //       const result = await axios.post(`${BASE_API_URL}/auth/register`,user)
  //     return result.data;
  //   } catch (error) {
  //     console.log('error signing up user', error)
  //     return false
  //   }
  // }

  // static async getUser(username) {
  //   console.log('getting ', username, this.token)
  //   try {
  //       const result = await axios.get(`${BASE_API_URL}/users/${username}`, this.authHeader)
  //     return result.data;
  //   } catch (error) {
  //     console.log('error getting user', error.response.data.error.message)
  //     return false
  //   }
  // }

}

export default Jobly;
