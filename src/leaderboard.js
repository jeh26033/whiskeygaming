import React, { Component } from 'react';
import './leaderboard.scss';
import LeaderboardDetailItem from './leaderboardDetails';
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


export default class Leaderboard extends Component {

      constructor() {
            super();

            this.state = {
                  playersHTML: [],
            }
      }

      componentDidMount() {
            for (var i = 0; i < playerArray.length; i++) {
                  this.state.playersHTML.push(< LeaderboardDetailItem playerID = {playerArray[i]} />)
            };

            let playersHTML = this.state.playersHTML;

            this.setState({playersHTML: playersHTML});
      } 


      render() {

            return (
                  <div className = "leaderboard-container">
                        {this.state.playersHTML}
                  </div>

            )
      }
}	