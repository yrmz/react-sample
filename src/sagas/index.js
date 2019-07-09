import { takeEvery, put } from 'redux-saga/effects';
import { INCREMENT_ASYNC, DECREMENT_ASYNC, INCREMENT, DECREMENT } from "../store/counterAsync";

export function* IncrementAsync() {
    yield put({ type: INCREMENT });
}

export function* DecrementAsync() {
    yield put({ type: DECREMENT });
}

export default function* RootSaga() {
    yield takeEvery(INCREMENT_ASYNC, IncrementAsync);
    yield takeEvery(DECREMENT_ASYNC, DecrementAsync);
}