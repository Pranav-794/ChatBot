import axios from 'axios';

export function setupAxios() {
  axios.defaults.baseURL = 'https://gist.githubusercontent.com';
}
