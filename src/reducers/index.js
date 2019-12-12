import isLoggedReducer from './isLogged'
import {combineReducers} from "redux";

const rootReducer = combineReducers(
    {
        authentication: isLoggedReducer
    }
);

export default rootReducer;