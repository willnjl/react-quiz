import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Multiplier from "./components/Multiplier";
import MultiplierProps from "./components/MultiplierProps";
import EvenClicks from "./components/EvenClicks";
import CountBy from "./components/CountBy";

function App() {
  return (
    <div className="App">
      <h3> Multiplier</h3>
      {/* <Multiplier /> */}
      <MultiplierProps x={5} y={7} />
      <EvenClicks />

      <CountBy step={5} />
    </div>
  );
}

export default App;
