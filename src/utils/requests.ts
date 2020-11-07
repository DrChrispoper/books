import { endpoint } from './contants';
import { filterInterface } from './types';

const axios = require('axios').default;
axios.defaults.baseURL = endpoint;

export const getBooks = (
  page: number,
  itemsPerPage: number,
  filters: Array<filterInterface>
) => {
  axios({
    method: 'post',
    url: '/api/books',
    data: {
      page: page,
      itemsPerPage: itemsPerPage,
      filters: filters,
    },
  })
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: any) {
      console.log(error);
    });
};
