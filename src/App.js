import React from "react";
import { Router, Route } from "react-router-dom";
import "./App.css";

// local imports
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
// import ViewChefs from "./components/ViewChefs";
import ChefData from "./components/ChefData";
import history from "./history/history";

// import NewChefPost from "./components/NewChefPost";

function App() {
  return (
    <div>
      <NavBar />
      <Router history={history}>
        <div className="App">
          <div className="card-container">
          <PrivateRoute exact path="/" component={ChefData} />
          </div>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          
        </div>
      </Router>
    </div>
  );
}

export default App;
