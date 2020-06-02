import React from 'react';
import Home from './pages/Home';
import Table from './pages/Table';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path='/play'>
          <Table />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
