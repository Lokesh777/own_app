// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import rootReducer from './Auth/authReducer';

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// export default store;

import { legacy_createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

// reducers
import { authReducer } from "./Auth/authReducer";

const rootReducer = combineReducers({
  auth:authReducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)));
