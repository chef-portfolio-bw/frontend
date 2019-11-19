import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// local imports
import Login from './components/Login';
import NavBar from './components/NavBar';
import ViewChefs from './components/ViewChefs';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <div className="App">
          <h1>Hearth and Steel</h1>
          <Route exact path="/" component={Login} />
          <ViewChefs />
        </div>
      </Router>
    </div>
  );
}

export default App;