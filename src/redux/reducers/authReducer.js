import { 
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS, 
  // GET_FROM_STORAGE, 
  LOGIN_START, 
  LOGOUT_START } from '../constants/actionTypes.js';

const initState = {
  user: {
    email: ''
  },
  error: '',
  isLoading: false,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_START: 
    case LOGOUT_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case LOGIN_SUCCESS: 
      return {
        ...state,
        user: {
          email: action.email
        },
        error: ''
      }
    case LOGOUT_SUCCESS: 
      return {
        ...state,
        user: {
          email: ''
        },
        error: ''
      }
    default:
      return state
  }
};

export default authReducer;