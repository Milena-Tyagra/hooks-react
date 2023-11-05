import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "../components/layout/menu/Menu";
import Content from "../components/layout/content/Content";

import DataContext, { data } from "../data/DataContext";
import Store from "../data/Store";

const App = () => {
  const [state, setState] = useState(data);
  return (
    <Store>
      <DataContext.Provider value={{ state, setState }}>
        <div className="App">
          <Router>
            <Menu />
            <Content />
          </Router>
        </div>
      </DataContext.Provider>
    </Store>
  );
};

export default App;
