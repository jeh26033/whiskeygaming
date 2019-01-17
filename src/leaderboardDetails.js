import React, { Component } from 'react';
import farmRankingArray from './farmRankings.json'
import csRankingArray from './csRankings.json'
import kdaRankingArray from './kdaRankings.json'
import playerIDList from './playerIDList.json';
const api_key = "f4903c56-7589-4d13-9a36-6a8fac44f2d1";
const lastMatchURL = "https://api.opendota.com/api/matches/";
var lastMatchID = null;
const recentMatchesBaseURL = "https://api.opendota.com/api/players/"
var getHeroURL = "https://api.opendota.com/api/herostats/"
const getPlayerURL = "https://api.opendota.com/api/players/"
var itemConstants = Object.entries(require('./item_constants.json'));
var gamesCount = 10;
var farmWinner = 0;
var csWinner = 0;
var kdaWinner = 0;
var wardDurationWinner = 0;
var updateFrequency = 60000;
var g;
var c;
var k;
var w1;
var w2;
var w3;
var w4;
//carry weighting
var gpmWeightCarry = .25;
var tfWeightCarry = .1;
var csWeightCarry = .25;
var xpmWeightCarry = .1;
var killsWeightCarry = .15;
var deathsWeightCarry = .2;
var assistsWeightCarry = .05;
//support weighting
var stunsWeightSupport = .15;
var tfWeightSupport = .25;
var wardingWeightSupport = .15;
var xpmWeightSupport = .05;
var killsWeightSupport = .05;
var deathsWeightSupport = .15;
var assistsWeightSupport = .2;

export default class LeaderboardDetailItem extends Component {

      constructor(playerID) {
            super(playerID);
            this.state = {
                  data: [],
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
                  killsRank: 0,
                  deathsRank: 0,
                  assistsRank: 0,
                  stunsRank: 0,
                  TFRank: 0,
                  recentMatches: [],
                  recentMatchesURL: recentMatchesBaseURL + this.props.playerID + "/recentMatches?limit=" + gamesCount + "&api_key="+api_key,
                  updated: false,
                  localFarmTotal: 0,
                  localCSTotal: 0,
                  localKDATotal: 0,
                  wardsArray: [],
                  wardsTimingArray: [],
                  localPlayerForMatchStats: null,
                  wardLifespan: 0,
                  wardCount: 0,
            }

            this.timedUpdate = this.timedUpdate.bind(this);
      };

      async componentDidMount() {
            const playerResponse = await fetch(this.state.playerURL);
            const playerData = await playerResponse.json();
            this.setState({latestPlayerData: playerData})
            this.setState({playerName: this.state.latestPlayerData.profile.personaname})
            this.setState({playerPic: this.state.latestPlayerData.profile.avatarmedium})
            this.setState({playerRank: this.state.latestPlayerData.mmr_estimate.estimate})

            const recentMatchesResponse = await fetch(this.state.recentMatchesURL);
            const recentMatchesData = await recentMatchesResponse.json();
            this.setState({recentMatches: recentMatchesData});

            {/* this calculates average gpm */}
                  for (g = 0; g < gamesCount; g++) {
                        let localGPM = this.state.recentMatches[g].gold_per_min;
                        this.setState({localGPM: localGPM})
                        let localFarmTotal = this.state.localFarmTotal + this.state.localGPM;
                        this.setState({localFarmTotal: localFarmTotal});
                  }
                  this.setState({farmingRank: Math.floor(this.state.localFarmTotal / gamesCount)})
                  farmRankingArray.push(this.state.farmingRank);

                  if (this.state.farmingRank > farmWinner && g === gamesCount) {
                        farmWinner = this.state.farmingRank;
                  }
                  // this.setState({farmRankingArray: farmRankingArray});
            {/* this calculates average cs, which is currently (last hits) */}
                  for (c = 0; c < gamesCount; c++) {
                        let localCS = this.state.recentMatches[c].last_hits / (this.state.recentMatches[c].duration / 600)
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
                        let killsRank = this.state.killsRank + (this.state.recentMatches[k].kills / gamesCount);
                        let deathsRank = this.state.deathsRank + (this.state.recentMatches[k].deaths / gamesCount);
                        let assistsRank = this.state.assistsRank + (this.state.recentMatches[k].assists / gamesCount);
                        this.setState({localKDA: localKDA})
                        this.setState({killsRank: killsRank})
                        this.setState({deathsRank: deathsRank})
                        this.setState({assistsRank: assistsRank})
                        this.setState({kdaRank: Math.floor((this.state.kdaRank)*(k/(k+1)) + (this.state.localKDA / (k+1)))})
                  }

                  kdaRankingArray.push({"name": this.state.playerName, "rank": this.state.kdaRank});

                  if (this.state.kdaRank > kdaWinner && k === gamesCount) {
                        kdaWinner = this.state.kdaRank;
                  }

            {/* Now we pull more detailed game data from each recent match */}
                  for(var games = 0; games < gamesCount; games++) {

                        var currentMatchResponse = await fetch(lastMatchURL + this.state.recentMatches[games].match_id)
                        var currentMatchData = await currentMatchResponse.json()
                        this.setState({localPlayerForMatchStats: currentMatchData.players.find(player => player.account_id === this.props.playerID)});
                        let stunsRank = this.state.stunsRank + Math.round(this.state.localPlayerForMatchStats.stuns / gamesCount);
                        let TFRank = this.state.TFRank + Math.round(this.state.localPlayerForMatchStats.teamfight_participation / gamesCount * 100);
                        this.setState({stunsRank: stunsRank})
                        this.setState({TFRank: TFRank})
                              
                  {/* Ward Lifespan calculation and display */}

                        // first we figure out who the current player is in this match, which is roundabout but just how the API works
                        // Next, we loop through the obs_left_log array and grab all the ehandles and expiration times
                        // We do it in this order because if a ward doesn't expire by the end of the game, it's not on the obs_left_log array and we don't want to deal with it
                        for(w1 = 0; w1 < this.state.localPlayerForMatchStats.obs_left_log.length; w1++) {
                              this.state.wardsArray.push({ehandle: this.state.localPlayerForMatchStats.obs_left_log[w1].ehandle, time: this.state.localPlayerForMatchStats.obs_left_log[w1].time});
                        }

                        // at this point we should have an array of ehandle: X and time: Y, and now we're going to find() by ehandle and do some math on time.
                        for(w2 = 0; w2 < this.state.wardsArray.length; w2++) {
                              var localWard = this.state.localPlayerForMatchStats.obs_log.find(ward => ward.ehandle === this.state.wardsArray[w2].ehandle);
                              
                              // Because async requests are a mess, sometimes this will be undefined, so we have to spot-check for that on the fly here
                              if (localWard != undefined) {
                                    this.state.wardsArray[w2].time -= localWard.time;
                              }
                        }
                        // Now with an array of ehandle: % lifespan, we need to take the average
                        for(w3 = 0; w3 < this.state.wardsArray.length; w3++) {
                              // Now we have an edited array of ehandle: lifespan, and we need to convert that to a percent, rather than a seconds-count
                              this.state.wardsArray[w3].time = Math.floor(this.state.wardsArray[w3].time / 3.6)

                              if(this.state.wardsTimingArray.find(ward => ward.ehandle === this.state.wardsArray[w3].ehandle) == undefined) {
                                    this.state.wardsTimingArray.push({ehandle: this.state.wardsArray[w3].ehandle, duration: this.state.wardsArray[w3].time});
                                    this.setState({wardCount: this.state.wardCount+1})
                              }
                        }

                  }

                        // And finally, we calculate the average based on an array of % lifespans
                        for(w4 = 0; w4 < this.state.wardsTimingArray.length; w4++) {
                                    if(0 <=this.state.wardsTimingArray[w4].duration <= 100) {
                                          this.setState({wardLifespan: (this.state.wardLifespan + this.state.wardsTimingArray[w4].duration)})
                                    }
                              }
                  this.setState({wardsRank: Math.floor(this.state.wardLifespan / gamesCount)})
                  console.log(this.state.wardLifespan)
                  this.carryRankCalc(this.state.farmingRank, this.state.localPlayerForMatchStats.teamfight_participation, this.state.csRank, this.state.localPlayerForMatchStats.xp_per_min, this.state.localKDA, 5, 10)
                  this.supportRankCalc(this.state.localPlayerForMatchStats.stuns, this.state.localPlayerForMatchStats.teamfight_participation, this.state.wardLifespan, this.state.localPlayerForMatchStats.xp_per_min, this.state.localKDA, 5, 10)
                  this.setState({wardLifespan: Math.floor(this.state.wardLifespan / this.state.wardCount)});

      }

      timedUpdate() {
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

      componentWillMount() {
            setInterval(this.timedUpdate, updateFrequency);
            console.log("Updated!");
      }

      componentDidUpdate() {
            this.timedUpdate()
      }

      carryRankCalc(gpm, tf, cs, xpm, kills, deaths, assists) {
            // Carry score: gpm * TF% * cs * (k-d)
            let carryRank = Math.round((gpm*gpmWeightCarry)+(tf*tfWeightCarry)+(cs*csWeightCarry)+(xpm*xpmWeightCarry)+(kills*killsWeightCarry)+(deaths*deathsWeightCarry)+(assists*assistsWeightCarry))
            this.setState({carryRank: carryRank})
      }

      supportRankCalc(stuns, tf, wards, xpm, kills, deaths, assists) {
            // Carry score: gpm * TF% * cs * (k-d)
            let supportRank = Math.round((stuns*stunsWeightSupport)+(tf*tfWeightSupport)+(wards*wardingWeightSupport)+(xpm*xpmWeightSupport)+(kills*killsWeightSupport)+(deaths*deathsWeightSupport)+(assists*assistsWeightSupport))
            this.setState({supportRank: supportRank})
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
                              <div className = "ward-life rank-box"><span>ObD:&nbsp;</span><span className = "rank">{this.state.wardLifespan}%&nbsp;/&nbsp;{this.state.wardsTimingArray.length}</span></div>
                              <div className = "carry-score rank-box">
                                    <span className = "rank">Carry: {this.state.carryRank}</span>
                                    <div className = "rank-box-hover">
                                          <span className="hover-rank-text hover-rank-header">{gamesCount}-game Avg:</span>
                                          <span className="hover-rank-text">GPM: {this.state.farmingRank}</span>
                                          <span className="hover-rank-text">TF: {this.state.TFRank}%</span>
                                          <span className="hover-rank-text">CS: {this.state.csRank}Lh</span>
                                    </div>
                              </div>
                              <div className = "support-score rank-box">
                                    <span className = "rank">Support: {this.state.supportRank}</span>
                                    <div className = "rank-box-hover">
                                          <span className="hover-rank-text hover-rank-header">{gamesCount}-game Avg:</span>
                                          <span className="hover-rank-text">Stuns: {this.state.stunsRank}</span>
                                          <span className="hover-rank-text">TF: {this.state.TFRank}%</span>
                                          <span className="hover-rank-text">Vision: {this.state.wardsRank}s</span>
                                    </div>
                              </div>
                        </div>
                  </div>
            )
      }
}	