import React, { Component } from 'react';
import './leaderboard.scss';
import LeaderboardDetailItem from './leaderboardDetails';
import farmRankingArray from './farmRankings.json'

import playerIDList from './playerIDList.json';

export default class Leaderboard extends Component {

      constructor() {
            super();

            this.state = {
                  playersHTML: [],
            }
      }

      componentDidMount() {
            for (var i = 0; i < playerIDList.length; i++) {
                  this.state.playersHTML.push(< LeaderboardDetailItem playerID = {playerIDList[i]} />)
            };

            if(farmRankingArray.length = playerIDList.length) {
                  console.log(farmRankingArray);
            }

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