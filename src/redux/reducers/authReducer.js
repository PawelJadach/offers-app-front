const initState = {
  user: {
    email: 'pawel@wp.pl'
  },
  error: '',
  isLoading: false,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default authReducer;