export const setUserStatus = async (login, password) => {
  const result = await fetch('https://raw.githubusercontent.com/kappa3-3/server/master/users')
    .then((data) => data.json());
  const isUserLoggedIn = result.find((user) => user.email === login && user.password === password);
  return {
    type: 'SIGN_IN',
    payload: !!isUserLoggedIn,
  };
};
