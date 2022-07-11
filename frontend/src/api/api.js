import axios from 'axios';

console.log();

const apiClient = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? 'http://localhost:4000/api/url' : '/api/url',
});

export default apiClient;