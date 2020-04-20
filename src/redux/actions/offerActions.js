import Axios from 'axios';

export const addOffer = (offer) => {
  return  (dispatch) => {
    dispatch({type: 'ADDED_START'});

    Axios
    .post('http://localhost:8000/api/posts', {offer})
    .then(res => {
      dispatch({type: 'ADD_OFFER', offer: res.data.newPost});
      dispatch({type: 'ADDED_SUCCESS'});
    })
    .catch(err => {
      console.log(err)
      dispatch({type: 'ADDED_ERROR'});
    });

  }
}

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