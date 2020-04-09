const initState = {
  offers: [],
  error: '',
  isLoading: false,
  nextId: 6,
  added: false,
};



const offerReducer = (state = initState, action) => {
  switch (action.type) {
    
    case 'LOADING_START': 
    return {
      ...state,
      isLoading: true,
      added: false,
    }

    case 'LOADING_SUCCESS':
      return {
        ...state,
      isLoading: false,
      offers: [...action.offers],
      error: '',
    }

    case 'LOADING_ERROR':
      return {
        ...state,
      isLoading: false,
      error: action.error,
    }

    case 'ADD_OFFER':
      const { title, price, img, content, authorEmail } = action.offer;
     return {
      ...state,
      offers: state.offers.concat({
        id: state.nextId,
        title: title,
        price: Number(price),
        img: img,
        content: content,
        authorEmail: authorEmail,
        creationDate: '07-04-2020',
      }),
      nextId: state.nextId + 1,
     }

    case 'ADDED_START':
      return {
        ...state,
      isLoading: true,
      error: '',
      added: false,
    }

    case 'ADDED_SUCCESS':
      return {
        ...state,
      isLoading: false,
      error: '',
      added: true,
    }

    case 'ADDED_ERROR':
      return {
        ...state,
      isLoading: false,
      error: action.error,
      added: false,
    }

    case 'ADDED_FALSE':
      return {
        ...state,
      added: false,
    }
      
    default:
      return state
  }
};

export default offerReducer;