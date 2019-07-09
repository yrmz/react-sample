import * as Types from "../types/counter";

const initialState = {
  count: 0
};

// リデューサー
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case Types.INCREMENT:
      return incrementReduce(state, action);
    case Types.DECREMENT:
      return decrementReduce(state, action);
    default:
      return state;
  }
};

const incrementReduce = (state, action) => {
  const _state = Object.assign({}, state);
  _state.count++;

  return _state;
};

const decrementReduce = (state, action) => {
  const _state = Object.assign({}, state);
  _state.count--;

  return _state;
};