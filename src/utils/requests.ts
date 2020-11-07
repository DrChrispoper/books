import { endpoint } from './contants';
import { filterInterface } from './types';

const axios = require('axios').default;
axios.defaults.baseURL = endpoint;

export const getBooks = async (
  page: number,
  itemsPerPage: number,
  filters: Array<filterInterface>
) => {
  return axios({
    method: 'post',
    url: '/api/books',
    data: {
      page: page,
      itemsPerPage: itemsPerPage,
      filters: filters,
    },
  });
};
