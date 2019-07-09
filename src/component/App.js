import React from "react";
import { Provider } from "react-redux";
import Store from "../store";
import Counter from "./Counter";
import CounterAsync from "./CounterAsync";

function App() {

  return (
    <div className="App">
      <Provider store={Store()}>
        <h2>Redux</h2>
        <Counter />
        <h2>Redux-Saga</h2>
        <CounterAsync />
      </Provider>
    </div>
  );
}

export default App;
