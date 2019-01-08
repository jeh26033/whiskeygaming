import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const api_key = "f4903c56-7589-4d13-9a36-6a8fac44f2d1";
var lastMatchID = null;
const lastMatchURL = "https://api.opendota.com/api/matches/"
var getHeroURL = "https://api.opendota.com/api/herostats/"
const getPlayerURL = "https://api.opendota.com/api/players/"
var itemConstants = Object.entries(require('./item_constants.json'));

export default class LeaderboardDetailItem extends Component {

      constructor(playerID) {
            super(playerID);
            this.state = {
                  latestMatch: null,
                  latestPlayerData: null,
                  latestHeroID: 0,
                  playerURL: getPlayerURL + this.props.playerID,
                  playerExternalURL: "https://www.dotabuff.com/players/" + this.props.playerID,
                  playerName: null,
                  playerRank: null,
            }
      };

      componentDidMount() {
            fetch(this.state.playerURL)
            .then(response => response.json())
            .then(data => {
                  this.setState({latestPlayerData: data})
                  this.setState({playerName: this.state.latestPlayerData.profile.personaname})
                  this.setState({playerPic: this.state.latestPlayerData.profile.avatarmedium})
                  this.setState({playerRank: this.state.latestPlayerData.mmr_estimate.estimate})
                  console.log(data);
            })
      };


      render() {
            return (
                  <div className = "leaderboard-detail-item">
                        <div className = "player-info">
                              <img src = {this.state.playerPic} className = "player-pic"/>
                              <div className = "name-block">
                                    <div className = "player-name">
                                          <a href= {this.state.playerExternalURL} >{this.state.playerName}</a>
                                    </div>
                                    <div className = "rank-estimate">MMRE: <span className="mmr">{this.state.playerRank}</span></div>
                              </div>
                        </div>
                  </div>
            )
      }
}	