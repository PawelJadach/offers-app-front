// import Axios from 'axios';
import {
  LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_START,
  LOGOUT_SUCCESS, LOGOUT_ERROR, LOGOUT_START,
} from '../constants/actionTypes';


export const loginUser  = async (email) => {
  return  (dispatch) => {
    dispatch({type: LOGIN_START});
    await localStorage.setItem('email', email);
    console.log(localStorage.getItem('email'));
  }
}

export const getFromStorage = () => {
  return  (dispatch) => {
    const email = localStorage.getItem('email');
    console.log(email);
  }
};

export const logoutUser = async (newOffer) => {
  return  (dispatch) => {
    dispatch({type: LOGOUT_START});
    await localStorage.removeItem('email');
    console.log(localStorage.getItem('email'))
  }
}


