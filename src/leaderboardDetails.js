import React, { Component } from 'react';
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
var gamesCount = 20;
var farmWinner = 0;
var csWinner = 0;
var kdaWinner = 0;
var g;
var c;
var k;

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
                  recentMatchesURL: recentMatchesBaseURL + this.props.playerID + "/recentMatches?limit=" + gamesCount + "&api_key="+api_key,
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
                  for (g = 0; g < gamesCount; g++) {
                        let localGPM = this.state.recentMatches[g].gold_per_min;
                        this.setState({localGPM: localGPM})
                        this.setState({farmingRank: Math.floor(this.state.localGPM + (this.state.localGPM / g))})
                  }
                  farmRankingArray.push(this.state.farmingRank);

                  if (this.state.farmingRank > farmWinner && g === gamesCount) {
                        farmWinner = this.state.farmingRank;
                  }
                  // this.setState({farmRankingArray: farmRankingArray});

            {/* this calculates average cs, which is currently (last hits) */}
                  for (c = 0; c < gamesCount; c++) {
                        let localCS = this.state.recentMatches[c].last_hits / (this.state.recentMatches[c].duration / 600)
                        console.log(localCS);
                        this.setState({localCS: localCS})
                        this.setState({csRank: Math.floor((this.state.csRank)*(c/(c+1)) + (this.state.localCS / (c+1)))})
                  }
                  csRankingArray.push(this.state.csRank);

                  if (this.state.csRank > csWinner && c === gamesCount) {
                        csWinner = this.state.csRank;
                  }
                  // this.setState({csRankingArray: csRankingArray});

            {/* this calculates average kda, which is currently (kills + assists - deaths) */}
                  for (k = 0; k < gamesCount; k++) {
                        let localKDA = this.state.recentMatches[k].kills + this.state.recentMatches[k].assists - this.state.recentMatches[k].deaths;
                        this.setState({localKDA: localKDA})
                        this.setState({kdaRank: Math.floor((this.state.kdaRank)*(k/(k+1)) + (this.state.localKDA / (k+1)))})
                  }

                  kdaRankingArray.push({"name": this.state.playerName, "rank": this.state.kdaRank});

                  if (this.state.kdaRank > kdaWinner && k === gamesCount) {
                        kdaWinner = this.state.kdaRank;
                  }
                  // this.setState({kdaRankingArray: kdaRankingArray});
            })
      }

      componentDidUpdate() {
      
      
            {/*check to see who is winning the gpm/cs/kda contests */}
            for (var i = 0; i< playerIDList.length; i++) {

                  if (csRankingArray.length == playerIDList.length && document.querySelectorAll('div.cs span.rank')[i].textContent == csWinner) {
                        document.querySelectorAll('div.cs')[i].setAttribute('id', 'leader');
                  }
                  if (kdaRankingArray.length == playerIDList.length && document.querySelectorAll('div.kda span.rank')[i].textContent == kdaWinner) {
                        document.querySelectorAll('div.kda')[i].setAttribute('id', 'leader');
                  }
                  if (farmRankingArray.length == playerIDList.length && document.querySelectorAll('div.farm span.rank')[i].textContent == farmWinner) {
                        document.querySelectorAll('div.farm')[i].setAttribute('id', 'leader');
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
                                          <a className = "nameLink" href= {this.state.playerExternalURL} >{this.state.playerName}</a>
                                    </div>
                                    <div className = "rank-estimate">MMRE: <span className="mmr">{this.state.playerRank}</span></div>
                              </div>
                        </div>
                        <div className = "ranks-container">
                              <div className = "farm rank-box"><span className = "rank">{this.state.farmingRank}</span><span>&nbsp;gpm</span></div>
                              <div className = "cs rank-box"><span className = "rank">{this.state.csRank}</span><span>&nbsp;Lh/10</span></div>
                              <div className = "kda rank-box"><span className = "rank">{this.state.kdaRank}</span><span>&nbsp;kda</span></div>
                        </div>
                  </div>
            )
      }
}	