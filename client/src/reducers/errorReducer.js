import { SET_ERROR } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return state;
  }
};
