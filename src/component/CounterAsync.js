import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionIncrementAsync, actionDecrementAsync } from "../store/counterAsync";

export default function Counter(props) {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counterAsync.count);

  return (
    <div>
      <div>count：{count}</div>
      <button onClick={() => dispatch(actionIncrementAsync())}>increment</button>
      <button onClick={() => dispatch(actionDecrementAsync())}>decrement</button>
    </div>
  );
}
