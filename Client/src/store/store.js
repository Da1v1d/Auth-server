import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    userReducer:reducer,
})

export default createStore(rootReducer, compose(applyMiddleware(thunk)))