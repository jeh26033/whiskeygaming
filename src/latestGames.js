import React, { Component } from 'react';
import './leaderboard.scss';
import LeaderboardItem from './leaderboard-item';
const playerArray = [
      22319665,
      80456250,
      108839928,
      40322344,
      35019058,
      240507106,
      8626597,
      73590735
      ];

export default class LatestGames extends Component {

      constructor() {
            super();

            this.state = {
                  leaderboard: [],
            }
      }

      componentDidMount() {
            for (var i = 0; i < playerArray.length; i++) {
                  this.state.leaderboard.push(< LeaderboardItem playerID = { playerArray[i] } />)
            };

            let leaderboardHTML = 
                  <div className = "leaderboard-container">
                        {this.state.leaderboard}
                  </div>

            this.setState({leaderboardHTML: leaderboardHTML})
      }    


      render() {

            return (
                  <div className = "container">
                        {this.state.leaderboardHTML}
                        {/*<div className = "discord-container">
                              <iframe src="https://discordapp.com/widget?id=238406882056863744&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
                        </div> */}
                  </div>

            )
      }
}	