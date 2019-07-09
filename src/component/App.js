import React from "react";
import { Provider } from "react-redux";
import Store from "../store";
import Counter from "./Counter";

function App() {

  return (
    <div className="App">
      <Provider store={Store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
