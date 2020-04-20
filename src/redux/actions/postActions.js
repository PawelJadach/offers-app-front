import Axios from 'axios';
import {
  ADD_ERROR, ADD_START, ADD_SUCCESS,
  EDIT_ERROR, EDIT_START, EDIT_SUCCESS,
  LOADING_ERROR, LOADING_SUCCESS, LOADING_START,
  // DELETE_SUCCESS, DELETE_START, DELETE_ERROR,
} from '../constants/actionTypes';
import { API_URL } from '../../constants/constants';

export const addPost = (post) => {
  return  (dispatch) => {
    dispatch({type: ADD_START});
    Axios
    .post(`${API_URL}/posts`, { post })
    .then(res => {
      dispatch({type: ADD_SUCCESS, post: res.data.newPost});
    })
    .catch(err => {
      dispatch({type: ADD_ERROR, error: err});
    });

  }
};

export const editOffer = (newOffer) => {
  return  (dispatch) => {
    dispatch({type: 'EDIT_START'});
    dispatch({type: 'EDIT_OFFER', newOffer: newOffer});
    setTimeout(() => dispatch({type: 'EDIT_SUCCESS'}), 2000);
  }
}

export const addedToFalse = () => {
  return  (dispatch) => {
    dispatch({type: 'ADDED_FALSE'});
  }
}

export const fetchOffers  = () => {
  return  (dispatch) => {
    dispatch({type: 'LOADING_START'});
    setTimeout(() => dispatch({type: 'LOADING_SUCCESS', offers: offers}), 2000);
  }
}


const offers = [];