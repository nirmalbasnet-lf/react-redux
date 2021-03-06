import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import surveyResponseReducer from './surveyResponseReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveyResponse: surveyResponseReducer,
  surveys: surveysReducer,
  error: errorReducer,
});
