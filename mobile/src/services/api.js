import axios from 'axios';
import Constants from "expo-constants";

const api = axios.create({
    baseURL: 'http://89cdbbbad3a3.ngrrok.io'
});

export default api;

