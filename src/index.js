import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import rootReducer from './reducers'
import { Provider} from 'react-redux';
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();


// //STORE
//
// //ACTION
// const login = () => {
//     return {
//         type: 'LOGIN'
//     }
// };
//
// const logout = () => {
//     return {
//         type: 'LOGOUT'
//     }
// };
// //REDUCER
// const authentication = (state=false, action) => {
//     switch (action.type) {
//         case "LOGIN":
//             return true;
//         case "LOGOUT":
//             return false;
//     }
// };
//
// let store = createStore(authentication);
//
// store.subscribe(()=> console.log(store.getState()));
// //DISPATCH
//
// store.dispatch(logout());