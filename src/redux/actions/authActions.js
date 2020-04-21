// import Axios from 'axios';
import {
  LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_START,
  LOGOUT_SUCCESS, LOGOUT_ERROR, LOGOUT_START,
} from '../constants/actionTypes';


export const loginUser = (email)  => {
  return async (dispatch) => {
    dispatch({type: LOGIN_START});
    await localStorage.setItem('email', email);
    dispatch({type: LOGIN_SUCCESS, email})
  }
}

export const getFromStorage = () => {
  return  (dispatch) => {
    const email = localStorage.getItem('email');
    console.log(email);
  }
};

export const logoutUser = (newOffer) => {
  return  async (dispatch) => {
    dispatch({type: LOGOUT_START});
    await localStorage.removeItem('email');
    dispatch({type: LOGOUT_SUCCESS})
  }
}


