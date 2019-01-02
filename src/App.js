// App.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import './App.css';
import './bootstrap_overrides.css';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <div className = "container">
        < Navbar />
      </div>
    );
  }
}

export default App;