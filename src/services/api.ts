import axios from 'axios';

const api = axios.create({
  baseURL: 'https://teste.umacidadepordia.com.br',
});

export default api;
