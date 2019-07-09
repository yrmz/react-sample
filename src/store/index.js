import { createStore, combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({
    counter,
});

export default createStore(rootReducer);