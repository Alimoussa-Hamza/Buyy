import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import loggedInReducer from "./isLoggerd.reducer";

const allReducers = combineReducers({
    counter: counterReducer,
    logged: loggedInReducer
})

export default allReducers;