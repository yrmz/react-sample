const initialState = {
  count: 0
};

export const INCREMENT = "COUNTER_ASYNC_INCREMENT";
export const DECREMENT = "COUNTER_ASYNC_DECREMENT";
export const INCREMENT_ASYNC = "COUNTER_ASYNC_INCREMENT_ASYNC";
export const DECREMENT_ASYNC = "COUNTER_ASYNC_DECREMENT_ASYNC";

// リデューサー
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return incrementReduce(state, action);
    case DECREMENT:
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

//アクションクリエーター
export const actionIncrementAsync = props => {
  return {
    type: INCREMENT_ASYNC
  };
};

export const actionDecrementAsync = props => {
  return {
    type: DECREMENT_ASYNC
  };
};
