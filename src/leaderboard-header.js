import React, { Component } from 'react';
import './leaderboard.scss';
import farmRankingArray from './farmRankings.json'

export default class LeaderboardHeader extends Component {

      constructor() {
            super();

            this.state = []
      }

      componentDidMount() {
      }

      render() {

            return (
                  
                  <div className = "leaderboard-header">
                        <div className = "leaderboard-header-item" id = "first-header-item-leaderboard">Role</div>
                        <div className = "leaderboard-header-item">Level</div>
                        <div className = "leaderboard-header-item">KDA</div>
                        <div className = "leaderboard-header-item">Lh/Dn</div>
                        <div className = "leaderboard-header-item" id = "gpm-xpm">GPM/XPM</div>
                        <div className = "leaderboard-header-item" id = "net-worth">Net<br/>Worth</div>
                  </div>

            )
      }
}	