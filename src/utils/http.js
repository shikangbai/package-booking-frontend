import axios from 'axios'
export default {
  axios: axios,
  get(url) {
    return axios.get(url);
  },
  post(url, param) {
    return axios.post(url,param);
  },
  put(url,param) {
    return axios.put(url,param);
  },
  delete(url,param) {
    return axios.delete(url,param);
  }
}