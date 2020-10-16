const isLoggedIn = (state = window.localStorage.getItem('user'), action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return action.payload;
    case 'SIGN_OUT':
      return action.payload;
    default:
      return state === 'true' ? true : false;
  }
};

export default isLoggedIn;
