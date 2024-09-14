const axios = require('axios');

const apiEndpoint = 'https://urstech-solutions.freshsales.io/api';
const apiKey = 'ZoVxEF8RqJyLH4aFHMOdsw';

const headers = {
  'Authorization': `Bearer ${apiKey}`,
  'Content-Type': 'application/json'
};

const freshsales = axios.create({
  baseURL: apiEndpoint,
  headers: headers
});

module.exports = freshsales;