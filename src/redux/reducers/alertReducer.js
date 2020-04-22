import { SET_ALLERT, REMOVE_ALLERT } from '../constants/actionTypes';

const initState = [];

const alertReducer = ( state = initState, action) => {
  switch(action.type){
    case SET_ALLERT:
      return [...state, action.payload];
    case REMOVE_ALLERT:
      return state.filter(alert => alert.id !== action.payload);
    default:
      return state;
  }

}

export default alertReducer;