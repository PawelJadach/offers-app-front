// import Axios from 'axios';
import {
  LOGIN_SUCCESS, 
  // LOGIN_ERROR, 
  LOGIN_START,
  LOGOUT_SUCCESS, 
  // LOGOUT_ERROR, 
  LOGOUT_START,
  GET_FROM_STORAGE,
} from '../constants/actionTypes';
import { setAlert } from './alertActions';


export const loginUser = (email)  => {
  return async (dispatch) => {
    dispatch({type: LOGIN_START});
    await localStorage.setItem('email', email);
    dispatch({type: LOGIN_SUCCESS, email})
    dispatch(setAlert('Zalogowano!', 'success'));
  }
}

export const getFromStorage = () => {
  return  (dispatch) => {
    const email = localStorage.getItem('email');
    if(email && email !== '') dispatch({type: GET_FROM_STORAGE, email})
  }
};

export const logoutUser = () => {
  return  async (dispatch) => {
    dispatch({type: LOGOUT_START});
    await localStorage.removeItem('email');
    dispatch({type: LOGOUT_SUCCESS})
    dispatch(setAlert('Wylogowano!', 'success'));
  }
}


