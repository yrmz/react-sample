import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionIncrement, actionDecrement } from "../store/counter";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);

  return (
    <div>
      <div>count：{count}</div>
      <button onClick={() => dispatch(actionIncrement())}>increment</button>
      <button onClick={() => dispatch(actionDecrement())}>decrement</button>
    </div>
  );
}
