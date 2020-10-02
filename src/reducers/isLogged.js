const isLoggedIn = (state = null, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return action.payload;
    default:
      return state;
  }
};

export default isLoggedIn;
