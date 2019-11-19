import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// local imports
import Login from './components/Login';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
        </div>
      </Router>
    </div>
  );
}

export default App;