import { SURVEY_RESPONSE_RECORDED } from '../actions/types';

export default (state = null, action) => {
  if (action.type === SURVEY_RESPONSE_RECORDED) {
    return action.payload;
  }
  return state;
};
