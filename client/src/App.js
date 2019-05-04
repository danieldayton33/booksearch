import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar'
import Search from './pages/Search';
import Saved from './pages/Saved';
function App() {
  return (
    <Router>
      <div>
      <AppBar />
      <Route exact path="/" component={Search} />
      <Route path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;
