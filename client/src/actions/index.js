import axios from 'axios';
import {
  FETCH_SURVEYS,
  FETCH_USER,
  SET_ERROR,
  SURVEY_RESPONSE_RECORDED,
} from './types';

export const fetchAuthUser = () => async dispatch => {
  const res = await axios.get('/api/current-user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleStripeToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleSendSurvey = (values, navigate) => async dispatch => {
  try {
    const res = await axios.post('/api/surveys', values);
    navigate('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: { error: true, errorMessage: err.response.data.error },
    });
  }
};

export const handleSurveyResponse = (payload, navigate) => async dispatch => {
  const res = await axios.post('/api/surveys/response', payload);
  navigate('/');
  dispatch({ type: SURVEY_RESPONSE_RECORDED, payload: res.data });
};

export const handleFetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
