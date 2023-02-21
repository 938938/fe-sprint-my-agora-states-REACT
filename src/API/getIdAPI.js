import axios from 'axios';
import { URL } from '../global/env';

export const getIdAPI = ({ id }) => {
  try {
    const data = axios.get(`${URL}/${id}`).then((res) => res.data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
