import axios from 'axios';
import { obterItems } from '../common/storage';

const api = axios.create({
  baseURL: 'https://empresas.ioasys.com.br/api/v1/',
});

api.interceptors.request.use(async (config) => {
  const keys = await obterItems();
  keys.forEach((key) => {
    config.headers[`${key[0]}`] = key[1];
  });
  return config;
});

export default api;
