const initialState = {
  count: 0
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

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
export const actionIncrement = props => {
  return {
    type: INCREMENT
  };
};

export const actionDecrement = props => {
  return {
    type: DECREMENT
  };
};
