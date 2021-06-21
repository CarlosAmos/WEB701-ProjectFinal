import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4200/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');