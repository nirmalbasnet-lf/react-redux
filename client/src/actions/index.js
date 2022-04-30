import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchAuthUser = () => async dispatch => {
  const res = await axios.get('/api/current-user');
  dispatch({ type: FETCH_USER, payload: res.data });
};
