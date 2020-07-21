import axios from 'axios';

const api = axios.create({
    baseURL: 'http://187.63.82.117:62330',
    // baseURL: 'http://10.5.60.105:3333',
    // baseURL: 'http://localhost:3333',
    // baseURL: 'http://89cdbbbad3a3.ngrrok.io',
    headers: {'Access-Control-Allow-Origin': '*'}
});

export default api;

