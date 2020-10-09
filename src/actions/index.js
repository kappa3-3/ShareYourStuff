export const setUserLoggedIn = async () => {
  return {
    type: 'SIGN_IN',
    payload: true,
  };
};

export const setUserLoggedOut = async () => {
  return {
    type: 'SIGN_OUT',
    payload: false,
  };
};
