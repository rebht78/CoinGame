import React from "react";
import ReactDOM from "react-dom";
import ActionButton from "./components/ActionButton";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ActionButton actiontext="Start Normal Game!" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
