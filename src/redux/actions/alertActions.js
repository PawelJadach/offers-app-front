import { SET_ALLERT, REMOVE_ALLERT } from '../constants/actionTypes';
import {v4 as uuid} from "uuid"; 

export const setAlert = (text, alertType, timeout = 3000) => dispatch => {
  const id = uuid();
  dispatch({type: SET_ALLERT, payload: {text, alertType, id}});
  setTimeout(() => dispatch({type: REMOVE_ALLERT, payload: id}), timeout);
}



