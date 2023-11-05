import "./Content.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../../views/examples/Home";
import NotFound from "../../../views/examples/NotFound";

const Content = () => (
  <main className="Content">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </main>
);

export default Content;
