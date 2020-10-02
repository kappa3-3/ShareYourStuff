import { combineReducers } from 'redux';
import isLoggedReducer from './isLogged';

const rootReducer = combineReducers(
  {
    authentication: isLoggedReducer,
  },
);

export default rootReducer;
