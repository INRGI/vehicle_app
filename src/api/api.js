import axios from 'axios';

const api = axios.create({
  baseURL: 'https://66648397932baf9032ab4fb3.mockapi.io'
});

export const fetchCampers = () => api.get('/adverts');