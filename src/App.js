import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Multiplier from "./components/Multiplier";
import MultiplierProps from "./components/MultiplierProps";
import EvenClicks from "./components/EvenClicks";
import CountBy from "./components/CountBy";
import HideMe from "./components/HideMe";
import MinimumLength from "./components/MinimumLength";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <h3> Multiplier</h3>
          {/* <Multiplier /> */}
          <MultiplierProps x={5} y={7} />
          <EvenClicks />
          <CountBy step={5} />
          <HideMe>
            HIDEHIDEHIDEHIDEHIDEHIDEHIDEHIDEHIDEHIDEHIDEHIDEHIDEHIDEHIDE HIDE
          </HideMe>
          <MinimumLength />
        </div>
      </Route>
      <Route exact path="/even-clicks">
        <EvenClicks />
      </Route>
      <Route exact path="HideMe">
        <HideMe>
          HIDEHIDEHIDEHIDEHIDEHIDEHIDEHIDEHIDEHIDEHIDEHIDEHIDEHIDEHIDE HIDE
        </HideMe>
      </Route>
      <Route
        path="/count-by/:step"
        render={({ match }) => <CountBy step={match.params.step} />}
      />
      <Route
        path="/minimum/:min"
        render={({ match }) => <MinimumLength min={match.params.min} />}
      />
    </Router>
  );
}

export default App;
