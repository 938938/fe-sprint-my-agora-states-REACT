import axios from 'axios';
import { URL } from '../global/env';

export const getDataAPI = () => {
  try {
    const data = axios.get(`${URL}`).then((res) => res.data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
