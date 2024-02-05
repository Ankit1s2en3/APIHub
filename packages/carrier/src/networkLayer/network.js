import axios from 'axios';

const BASE_URL = 'https://staging2.developer.carrier.com';
const TENANT_ID = 'staging2'
const URL = `${BASE_URL}/api/${TENANT_ID}`
const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 5000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers here
  },
});

const network = {
  login: async (username, password) => {
    try {
      const creds = { "username": username, "password": password, "eula": "accept" }
      console.log('creds ',creds)
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(creds)
      };
      let res = await fetch('/api/staging2/authenticate/login', options)
      console.log('response headers :> ',res.headers)
      console.log('cookies : ',res.headers.getSetCookie())
      console.log('cookies : ',res.headers.entries)
      res = await res.json()
      console.log('response login :> ',res)

      if(res.respCode === 200)
        return {
          status:true,
          message:res.respMsg
        }

      return {
        status:false,
        // message:res.respMsg
      }
    } catch (error) {
      console.log('login error')
      return {
        status:false,
        message:'error occured'
      }
    }
  },

  fetchAPIs: async () => {
    try {
      const response = await axiosInstance.get('/apis');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add other API functions as needed
};

export default network;
