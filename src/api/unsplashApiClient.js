import axios from 'axios';

// instanciate the unsplash api client
const unsplashApiClient = axios.create({
  baseURL: 'https://api.unsplash.com/',
  timeout: 60000,
  headers: {'Authorization': `Client-ID ${'l5ufWkwsD8xb_-66FVDkh7dxHCeNDBgd2rF3Uts4qZo'}`}
});

export default unsplashApiClient;