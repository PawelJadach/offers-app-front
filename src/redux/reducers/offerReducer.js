const initState = {
  offers: [],
  error: '',
  isLoading: false,
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
      const { title, price, photo, text, author, phone, status, _id, created } = action.offer;
     return {
      ...state,
      offers: state.offers.concat({
        id: _id,
        title,
        price: Number(price),
        photo,
        text,
        author,
        created,
        phone,
        status,
      })
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


    case 'EDIT_START':
      return {
        ...state,
      isLoading: true,
      error: '',
      added: false,
    }

    case 'EDIT_OFFER':
     return {
      ...state,
      offers: state.offers.map((offer) => {
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

    case 'EDIT_SUCCESS':
      return {
        ...state,
      isLoading: false,
      error: '',
      added: true,
    }

    case 'EDIT_ERROR':
      return {
        ...state,
      isLoading: false,
      error: action.error,
      added: false,
    }

    case 'EDIT_FALSE':
      return {
        ...state,
      added: false,
    }
      
    default:
      return state
  }
};

export default offerReducer;