import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// local imports
import Login from './components/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Hearth and Steel</h1>
      <Route exact path="/" component={Login} />
    </div>
    </Router>
  );
}

export default App;
