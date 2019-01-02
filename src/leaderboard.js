import React, { Component } from 'react';
import './leaderboard.css';
import LeaderboardItem from './leaderboard-item';

export default class Navbar extends Component {


      render() {
            return (
                  <div className = "leaderboard-container">
                        < LeaderboardItem />
                  </div>
            )
      }
}	