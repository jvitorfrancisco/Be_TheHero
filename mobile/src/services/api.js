import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    // baseURL: 'http://89cdbbbad3a3.ngrrok.io',
    headers: {'Access-Control-Allow-Origin': '*'}
});

export default api;

