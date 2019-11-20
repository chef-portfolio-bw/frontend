import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// local imports
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import ViewChefs from "./components/ViewChefs";
import ChefData from "./components/ChefData";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <ViewChefs />
          <ChefData

          // render={...props}
          />
          {/* make sure to delete before saving  */}
        </div>
      </Router>
    </div>
  );
}

export default App;
