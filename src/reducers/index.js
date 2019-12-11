import isLoggedReducer from './isLogged'
import {combineReducers} from "redux";

const rootReducer = combineReducers(
    {
        isLogged: isLoggedReducer
    }
);

export default rootReducer;