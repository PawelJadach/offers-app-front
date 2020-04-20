import { 
  LOADING_ERROR, LOADING_START, LOADING_SUCCESS, 
  EDIT_ERROR, EDIT_START, EDIT_SUCCESS, 
  ADD_ERROR, ADD_SUCCESS, ADD_START,
  // DELETE_ERROR, DELETE_START, DELETE_SUCCESS,
} from '../constants/actionTypes';

const initState = {
  posts: [],
  error: '',
  isLoading: false,
};



const offerReducer = (state = initState, action) => {
  switch (action.type) {
    
    case LOADING_START: 
    return {
      ...state,
      isLoading: true,
    }

    case LOADING_SUCCESS:
      return {
        ...state,
      isLoading: false,
      posts: [...action.posts],
      error: '',
    }

    case LOADING_ERROR:
      return {
        ...state,
      isLoading: false,
      error: action.error,
    }

    case ADD_START:
      return {
        ...state,
      isLoading: true,
      error: '',
    }

    case ADD_SUCCESS:
      const { title, price, photo, text, author, phone, status, _id, created, updated } = action.post;
      return {
        ...state,
        posts: state.posts.concat({
          id: _id,
          title,
          price: Number(price),
          photo,
          text,
          author,
          created,
          updated,
          phone,
          status,
        }),
        isLoading: false,
        error: '',
    }

    case ADD_ERROR:
      return {
        ...state,
      isLoading: false,
      error: action.error,
    }

    case EDIT_START:
      return {
        ...state,
      isLoading: true,
      error: '',
    }

    case EDIT_SUCCESS:
      return {
        ...state,
      isLoading: false,
      error: '',
      posts: state.posts.map((offer) => {
        if(Number(action.newOffer.id) !== offer.id) return offer;
        else {
          return {
            id: action.newOffer.id,
            title: action.newOffer.title,
            price: Number(action.newOffer.price),
            img: action.newOffer.img,
            content: action.newOffer.content,
            authorEmail: offer.authorEmail,
            creationDate: '07-04-2020'
          }
        }
      }),
    }

    case EDIT_ERROR:
      return {
        ...state,
      isLoading: false,
      error: action.error,
    }
      
    default:
      return state
  }
};

export default offerReducer;