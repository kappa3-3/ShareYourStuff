const isLoggedIn = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return action.payload;
        default:
            return null;
    }
};

export default isLoggedIn;