import React, { Component } from 'react';
import './leaderboard.scss';
import LeaderboardItem from './leaderboard-item';

export default class Leaderboard extends Component {

      constructor() {
            super();

            this.state = {
                  dotaArray: []
            }
      };


      render() {
            return (
                  <div className = "leaderboard-container">
                        < LeaderboardItem />
                        < LeaderboardItem />
                        < LeaderboardItem />
                        < LeaderboardItem />
                  </div>
            )
      }
}	