import { SET_ALLERT, REMOVE_ALLERT } from '../constants/actionTypes';
import uuid from 'uuid';

export const setAlert = (text, alertType, timeout = 3000) => dispatch => {
  const id = uuid.v4();
  dispatch({type: SET_ALLERT, payload: {text, alertType, id}});
  setTimeout(() => dispatch({type: REMOVE_ALLERT, payload: id}), timeout);
}



