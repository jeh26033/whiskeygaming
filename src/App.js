// App.js

import React, { Component } from 'react';
import Navbar from './navbar';
import Leaderboard from './leaderboard';
import './App.css';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <div className = "container">
        < Navbar />
        < Leaderboard />
      </div>
    );
  }
}

export default App;