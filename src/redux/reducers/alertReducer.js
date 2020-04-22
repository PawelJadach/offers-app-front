import { SET_ALLERT, REMOVE_ALLERT } from '../constants/actionTypes';

const initState = [
  {
    id: 1,
    alertType: 'warning',
    text: 'Nie udało się dodać!'
  },
  {
    id: 2,
    alertType: 'success',
    text: 'Udało się dodać!'
  }
];

const alertReducer = ( state = initState, action) => {
  switch(action.type){
    case SET_ALLERT:
      return [...state, action.payload];
    case REMOVE_ALLERT:
      return state.filter(alert => alert.id !== action.payload.id);
    default:
      return state;
  }

}

export default alertReducer;