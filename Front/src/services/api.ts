import axios from 'axios';

// Assume que seu back-end está rodando em http://localhost:3333
// Se for outra porta, altere aqui.
const api = axios.create({
  baseURL: 'http://localhost:3000/api', 
});

export default api;