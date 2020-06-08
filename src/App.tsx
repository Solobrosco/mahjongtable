import React from 'react';
import Home from './pages/Home';
import Play from './pages/Play';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from 'react-redux'
// import {getGameState, GAME_STATE_PAUSED} from './config/gameState'


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

// const mapStateToProps = (state) => ({
//   game: getGameState(state) !== GAME_STATE_PAUSED 
// })

// const mapDispatchToProps = (dispatch) => ({

// })

export default connect()(App);  
