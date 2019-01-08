import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import farmRankingArray from './farmRankings.json'
import playerIDList from './playerIDList.json';
const api_key = "f4903c56-7589-4d13-9a36-6a8fac44f2d1";
var lastMatchID = null;
const recentMatchesBaseURL = "https://api.opendota.com/api/players/"
var getHeroURL = "https://api.opendota.com/api/herostats/"
const getPlayerURL = "https://api.opendota.com/api/players/"
var itemConstants = Object.entries(require('./item_constants.json'));
var csRankingArray = [];
var kdaRankingArray = [];

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
                  supportRank: 0,
                  carryRank: 0,
                  midRank: 0,
                  offlaneRank: 0,
                  farmingRank: 0,
                  csRank: 0,
                  kdaRank: 0,
                  recentMatches: [],
                  recentMatchesURL: recentMatchesBaseURL + this.props.playerID + "/recentMatches?limit=20",
                  updated: false,
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
            });
            fetch(this.state.recentMatchesURL)
            .then(response => response.json())
            .then(data => {
                  this.setState({recentMatches: data});

            {/* this calculates average gpm */}
                  for (var i = 0; i < this.state.recentMatches.length; i++) {
                        let localGPM = this.state.recentMatches[i].gold_per_min;
                        this.setState({localGPM: localGPM})
                        this.setState({farmingRank: Math.floor(this.state.localGPM + (this.state.localGPM / i))})
                  }
                  farmRankingArray.push(this.state.farmingRank);
                  // this.setState({farmRankingArray: farmRankingArray});

            {/* this calculates average cs, which is currently (last hits) */}
                  for (var i = 0; i < this.state.recentMatches.length; i++) {
                        let localCS = this.state.recentMatches[i].last_hits;
                        this.setState({localCS: localCS})
                        this.setState({csRank: Math.floor((this.state.csRank)*(i/(i+1)) + (this.state.localCS / (i+1)))})
                  }
                  csRankingArray.push(this.state.csRank);
                  // this.setState({csRankingArray: csRankingArray});

            {/* this calculates average kda, which is currently (kills + assists - deaths) */}
                  for (var i = 0; i < this.state.recentMatches.length; i++) {
                        let localKDA = this.state.recentMatches[i].kills + this.state.recentMatches[i].assists - this.state.recentMatches[i].deaths;
                        this.setState({localKDA: localKDA})
                        this.setState({kdaRank: Math.floor((this.state.kdaRank)*(i/(i+1)) + (this.state.localKDA / (i+1)))})
                  }

                  kdaRankingArray.push({"name": this.state.playerName, "rank": this.state.kdaRank});
                  // this.setState({kdaRankingArray: kdaRankingArray});
            })
      };

      componentDidUpdate() {
            if(farmRankingArray.length === playerIDList.length && !this.state.updated && (this.state.farmLeader != Math.max.apply(Math, farmRankingArray))) {
                  this.setState({farmLeader: Math.max.apply(Math, farmRankingArray)});
                  console.log(Math.max.apply(Math, farmRankingArray));
                  console.log("Leader: " + this.state.farmLeader);


                  if (this.state.farmingRank == Math.max.apply(Math, farmRankingArray) && Math.max.apply(Math, farmRankingArray) !== null) {
                        console.log("Name: "+this.state.playerName);
                  }
            }
      }


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
                        <div className = "ranks-container">
                              <div className = "rank-box" id = "farm-rank"> {this.state.farmingRank} gpm</div>
                              <div className = "rank-box" id = "cs-rank"> {this.state.csRank} Lh</div>
                              <div className = "rank-box" id = "farm-rank"> {this.state.kdaRank} kda</div>
                        </div>
                  </div>
            )
      }
}	