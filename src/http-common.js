import axios from 'axios';

const URL = process.env.REACT_APP_URL_BASE_API || 'http://localhost:5000/';
//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: URL,//'http://localhost:5000/', //process.env.URL_BASE_API,
  headers: {
    'Content-type': 'application/json',
  },
});
