import React from 'react';
import Home from './pages/Home';
import Play from './pages/Play';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from 'react-redux'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path='/play'>
          <Play />
        </Route>
      </Switch>
    </Router>
  );
}

export default connect()(App);  
