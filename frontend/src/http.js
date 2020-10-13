import axios from 'axios'
const token = sessionStorage.getItem('token');


const http = axios.create({
  baseURL:  "http://localhost:8080/api",
  headers: {
    Authorization: 'Bearer ' + token 
  }
})

export default http;