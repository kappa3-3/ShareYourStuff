export const setUserStatus = async ( login, password) => {

    const result = await fetch('http://localhost:3004/users').then(data => data.json());
    const isUserLoggedIn = result.find(user => user.email === login && user.password === password);

    return {
        type: 'SIGN_IN',
        payload: !!isUserLoggedIn
    }
};

