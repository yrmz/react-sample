import React, { useState } from "react";

export default function Counter() {
  const [count, setState] = useState(0);
  return (
    <div>
      <div>count：{count}</div>
      <button onClick={() => setState(count + 1)}>increment</button>
      <button onClick={() => setState(count - 1)}>decrement</button>
    </div>
  );
}
