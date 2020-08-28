import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Multiplier from "./components/Multiplier";

function App() {
  return (
    <div className="App">
      <h3> Multiplier</h3>
      <Multiplier x={5} y={7} />
    </div>
  );
}

export default App;
