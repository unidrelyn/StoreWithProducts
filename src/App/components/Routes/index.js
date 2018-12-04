import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Shopping from "../Screens/Shopping";
import Home from "../Screens/Home";
import TopBar from "../Screens/Home/components/Topbar";
import Header from "../Screens/Home/components/Header";

function RoutesApp() {
  return (
    <Router>
      <div>
        <Header />
        <TopBar />
        <Route exact path="/home" component={Home} />
        <Route exact path="/shopping" component={Shopping} />
      </div>
    </Router>
     
    
  );
}

export default RoutesApp;