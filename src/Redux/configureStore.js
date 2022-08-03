import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import CryptoReducer from "./CryptoReducer";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    CryptoReducer,
    composeEnhancer(applyMiddleware(thunk, logger)),
);

export default store;
