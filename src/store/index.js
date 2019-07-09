import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import sagas from "../sagas";
import counter from "./reducers/counter";
import counterAsync from "./reducers/counterAsync";

const rootReducer = combineReducers({
    counter,
    counterAsync
});

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(sagas);

    return store;
}