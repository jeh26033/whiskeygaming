import React, { Component } from 'react';
import './analysis.scss';
import LeaderboardDetailItem from './leaderboardDetails';
import farmRankingArray from './farmRankings.json'

import playerIDList from './playerIDList.json';

export default class Leaderboard extends Component {

      constructor() {
            super();

            this.state = {
                  playersHTML: [],
                  localFarmRankings: [],
            }
      }

      componentDidMount() {
            for (var i = 0; i < playerIDList.length; i++) {
                  this.state.playersHTML.push(< LeaderboardDetailItem playerID = {playerIDList[i]} />)
                  this.setState({localFarmRankings: farmRankingArray});
            }

            let playersHTML = this.state.playersHTML;

            this.setState({playersHTML: playersHTML});
      }

      render() {

            return (
                  <div className = "analysis-container">
                        
                  </div>

            )
      }
}	