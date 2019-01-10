// App.js
import { Switch, Route, Link } from 'react-router-dom'
import React, { Component } from 'react';
import Navbar from './navbar';
import LatestGames from './latestGames';
import Leaderboard from './leaderboard';
import JoinMenu from './joinMenu.js';
import './App.scss';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
        <main>
          <div className = "container">
            < Navbar />
            <Switch>
              <Route exact path ='/' component = {LatestGames} />
              <Route path ='/leaderboard' component = {Leaderboard} />
              <Route path ='/create' component = {JoinMenu} />
            </Switch>
          </div>
        </main>
    );
  }
}

export default App;