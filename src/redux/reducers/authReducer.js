const initState = {
  user: {
    email: 'janek@janek.pl'
  },
  error: '',
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default authReducer;