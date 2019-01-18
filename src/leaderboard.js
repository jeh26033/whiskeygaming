import React, { Component } from 'react';
import './leaderboard.scss';
import LeaderboardDetailItem from './leaderboardDetails';
import farmRankingArray from './farmRankings.json';
import playerIDList from './playerIDList.json';

export default class Leaderboard extends Component {

      constructor() {
            super();

            this.state = {
                  playersHTML: [
                        <div className = "leaderboard-header">
                              <div className = "leaderboard-header-item first-header-item-leaderboard">GPM</div>
                              <div className = "leaderboard-header-item" id = "two-lines-header">Last<br/>Hits</div>
                              <div className = "leaderboard-header-item">KDA</div>
                              <div className = "leaderboard-header-item">Vision</div>
                              <div className = "leaderboard-header-item" id = "two-lines-header">Carry<br/>Score</div>
                              <div className = "leaderboard-header-item" id = "two-lines-header">Support<br/>Score</div>
                        </div>
                  ],
                  localFarmRankings: [],
            }
      }

      componentDidMount() {
            for (var i = 0; i < playerIDList.length; i++) {
                  this.state.playersHTML.push(< LeaderboardDetailItem playerID = {playerIDList[i]} />);
                  this.setState({localFarmRankings: farmRankingArray});
            }

            let playersHTML = this.state.playersHTML;

            this.setState({playersHTML: playersHTML});
      }

      render() {

            return (
                  <div className = "leaderboard-container">
                        { this.state.playersHTML }
                  </div>
            )
      }
}	