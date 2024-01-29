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
      const response = await axiosInstance.post('/authenticate/login', 
                        { username, password,eula: 'accept' });

      // Extract and save cookies from response headers
      const cookies = response.headers['set-cookie'];
      console.log('cookies : ',cookies)
      console.log('login response : ',response)
      if (cookies) {
        cookies.forEach(cookie => {
          document.cookie = cookie;
        });
      }

      return response.data;
    } catch (error) {
      throw error;
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
