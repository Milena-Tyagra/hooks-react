import "./Content.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../../views/examples/Home";
import UseState from "../../../views/examples/UseState";
import UseEffect from "../../../views/examples/UseEffect";
import NotFound from "../../../views/examples/NotFound";

const Content = () => (
  <main className="Content">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/useState">
        <UseState />
      </Route>
      <Route path="/useEffect">
        <UseEffect />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </main>
);

export default Content;
