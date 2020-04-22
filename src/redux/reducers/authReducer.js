import { 
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS, 
  // GET_FROM_STORAGE, 
  LOGIN_START, 
  LOGOUT_START, 
  GET_FROM_STORAGE} from '../constants/actionTypes.js';

const initState = {
  user: {
    email: ''
  },
  error: '',
  isLoading: true,
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
    case GET_FROM_STORAGE:
      return {
        ...state,
        user: {
          email: action.email
        },
        error: '',
        isLoading: false,
      }
    case LOGOUT_SUCCESS: 
      return {
        ...state,
        user: {
          email: ''
        },
        error: '',
        isLoading: false,
      }
    default:
      return state
  }
};

export default authReducer;