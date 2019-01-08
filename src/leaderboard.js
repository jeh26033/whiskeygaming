import React, { Component } from 'react';
import './leaderboard.scss';
import LeaderboardItem from './leaderboard-item';
const playerArray = ["22319665","80456250"];

export default class Leaderboard extends Component {

      constructor() {
            super();

            this.state = {
            }
      };


      render() {

            return (
                  <div className = "leaderboard-container">
                        < LeaderboardItem playerID = { playerArray[0] } />    
                  </div>
            )
      }
}	