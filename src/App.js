import React from "react";
import { Router, Route } from "react-router-dom";
import "./App.css";

// local imports
import Register from './components/Register';
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import PrivateRoute from './components/PrivateRoute';
import ViewChefs from "./components/ViewChefs";
import ChefData from "./components/ChefData";
import history from './history/history';

function App() {
  return (
    <div>
      <NavBar />
      <Router history={history}>
        <div className="App">
          <PrivateRoute exact path="/" component={ChefData} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <ViewChefs /> */}
          {/* <ChefData
          // path="/"
          // render={...props}
          /> */}
          {/* make sure to delete before saving  */}
        </div>
      </Router>
    </div>
  );
}

export default App;
