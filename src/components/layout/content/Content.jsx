import "./Content.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from '../../../views/examples/NotFound'

const Content = () => (
  <main className="Content">
    <Switch>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </main>
);

export default Content;
