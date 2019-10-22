import React from "react";
import PagePrincipale from "./components/PagePrincipale";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={PagePrincipale} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
      </Switch>
    </div>
  );
}

export default App;
