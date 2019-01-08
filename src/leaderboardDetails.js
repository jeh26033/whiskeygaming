import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import farmRankingArray from './farmRankings.json'
import csRankingArray from './csRankings.json'
import kdaRankingArray from './kdaRankings.json'
import playerIDList from './playerIDList.json';
const api_key = "f4903c56-7589-4d13-9a36-6a8fac44f2d1";
var lastMatchID = null;
const recentMatchesBaseURL = "https://api.opendota.com/api/players/"
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
                  playerURL: getPlayerURL + this.props.playerID + "?api_key=" + api_key,
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
                  recentMatchesURL: recentMatchesBaseURL + this.props.playerID + "/recentMatches?limit=20&api_key="+api_key,
                  updated: false,
                  farmWinner: "",
                  csWinner: "",
                  kdamWinner: "",
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
      }

      componentDidUpdate() {
      {/*check to see who is winning the gpm contest */}
            if(farmRankingArray.length === playerIDList.length && !this.state.updated && (this.state.farmLeader != Math.max.apply(Math, farmRankingArray))) {
                  this.setState({farmLeader: Math.max.apply(Math, farmRankingArray)});


                  if (this.state.farmingRank == Math.max.apply(Math, farmRankingArray) && Math.max.apply(Math, farmRankingArray) !== null && this.state.farmWinner == "") {
                        this.setState({farmWinner: "leader"})
                  }
            }

      {/*check to see who is winning the cs contest */}
            if(csRankingArray.length === playerIDList.length && !this.state.updated && (this.state.csLeader != Math.max.apply(Math, csRankingArray))) {
                  this.setState({csLeader: Math.max.apply(Math, csRankingArray)});
                  console.log(Math.max.apply(Math, csRankingArray));
                  console.log("Leader: " + this.state.csLeader);


                  if (this.state.csRank == Math.max.apply(Math, csRankingArray) && Math.max.apply(Math, csRankingArray) !== null && this.state.csWinner == "") {
                        console.log("Name: "+this.state.playerName);
                        this.setState({csWinner: "leader"})
                  }
            }

      // {/*check to see who is winning the kda contest */}
      //       if(kdaRankingArray.length === playerIDList.length && !this.state.updated && (this.state.kdaLeader != Math.max.apply(Math, kdaRankingArray))) {
      //             this.setState({kdaLeader: Math.max.apply(Math, kdaRankingArray)});
      //             console.log(Math.max.apply(Math, kdaRankingArray));
      //             console.log("Leader: " + this.state.kdaLeader);


      //             if (this.state.kdaRank == Math.max.apply(Math, kdaRankingArray) && Math.max.apply(Math, kdaRankingArray) !== null && this.state.kdaWinner == "") {
      //                   console.log("Name: "+this.state.playerName);
      //                   this.setState({kdaWinner: "leader"})
      //             }
      //       }
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
                              <div className = "rank-box" id = {this.state.farmWinner}> {this.state.farmingRank} gpm</div>
                              <div className = "rank-box" id = {this.state.csWinner}> {this.state.csRank} Lh</div>
                              <div className = "rank-box" id = {this.state.kdaWinner}> {this.state.kdaRank} kda</div>
                        </div>
                  </div>
            )
      }
}	