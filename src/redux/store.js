import {
    createStore
} from "redux";
// import combineReducers from "./reducres"; combineReducers = rootReducer [same path]
import rootReducer from "./reducers";
const initialState = {};

export const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());