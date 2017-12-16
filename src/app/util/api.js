import axios from 'axios'

const SERVER_URL = 'https://api.backendless.com';
const APP_ID = '0DD795C3-AEAF-F8F7-FF7C-2EDC7FDF8900';
const API_KEY = '00A8F992-6C6F-FF73-FFC4-0AEE314B9000';
const BASE_URL = `${SERVER_URL}/${APP_ID}/${API_KEY}`;

const apiBuilder = (method, url, data, opt) => {
  const option = opt || {};
  option.withCredentials = true;

  return {
    method,
    baseURL: BASE_URL,
    url,
    data,
    option
  };
};

const api = {
  get: (url, callBack = () => {}, errCb = err => console.log(err), opt) => {
    axios(apiBuilder('GET', url, null, opt))
      .then((response) => {
        callBack(response.data)
      })
      .catch((error) => {
        errCb(error)

        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
         // back to login
        }
      })
  },

  post: (url, data, callBack = () => {}, errCb = err => console.log(err), opt) => {
    axios(apiBuilder('POST', url, data, opt))
      .then((response) => {
        callBack(response.data)
      })
      .catch((error) => {
        errCb(error)

        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          // back to login
        }
      })
  },

  delete: (url, callBack = () => {}, errCb = err => console.log(err), opt) => {
    axios(apiBuilder('DELETE', url, null, opt))
      .then((response) => {
        callBack(response.data)
      })
      .catch((error) => {
        errCb(error)

        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          // back to login
        }
      })
  },

  put: (url, data, callBack = () => {}, errCb = err => console.log(err), opt) => {
    axios(apiBuilder('PUT', url, data, opt))
      .then((response) => {
        if (callBack) {
          callBack(response.data)
        }
      })
      .catch((error) => {
        errCb(error)

        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          // back to login
        }
      })
  },
}

export default api
