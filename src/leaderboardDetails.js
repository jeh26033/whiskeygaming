import React, { Component } from 'react';
import farmRankingArray from './farmRankings.json'
import csRankingArray from './csRankings.json'
import kdaRankingArray from './kdaRankings.json'
import playerIDList from './playerIDList.json';
import apiKey from './api-key.json'
//const api_key = apiKey[0];
const api_key = process.env.api_key
const lastMatchURL = "https://api.opendota.com/api/matches/";
var lastMatchID = null;
const recentMatchesBaseURL = "https://api.opendota.com/api/players/"
var getHeroURL = "https://api.opendota.com/api/herostats/"
const getPlayerURL = "https://api.opendota.com/api/players/"
var itemConstants = Object.entries(require('./item_constants.json'));
var gamesCount = 4; // this can go up to 20
var farmWinner = 0;
var csWinner = 0;
var kdaWinner = 0;
var carryWinner = 0;
var supportWinner = 0;
var wardDurationWinner = 0;
var updateFrequency = 60000;
var g;
var c;
var k;
var w1;
var w2;
var w3;
var w4;
var outCallTicker = 0;
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
                  midNWDiff: 0,
                  midXPDiff: 0,
                  midDiffArray: [],
                  wardsTimingArray: [],
                  localPlayerForMatchStats: null,
                  wardLifespan: 0,
                  wardCount: 0,
                  winRate: 0,
            }

            this.timedUpdate = this.timedUpdate.bind(this);
      };

      async componentDidMount() {
            console.log(api_key);
            const playerResponse = await fetch(this.state.playerURL + "?api_key=" + api_key)
            this.apiCallAlert();

            const playerData = await playerResponse.json();
            this.setState({latestPlayerData: playerData})
            this.setState({playerName: this.state.latestPlayerData.profile.personaname})
            this.setState({playerPic: this.state.latestPlayerData.profile.avatarmedium})
            this.setState({playerRank: this.state.latestPlayerData.mmr_estimate.estimate})

            const recentMatchesResponse = await fetch(this.state.recentMatchesURL + "?api_key=" + api_key);
            this.apiCallAlert();
            const recentMatchesData = await recentMatchesResponse.json();
            if(recentMatchesResponse.status === 200) {
                  this.setState({recentMatches: recentMatchesData});

                  if(this.state.recentMatches != undefined) {
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

                              var currentMatchResponse = await fetch(lastMatchURL + this.state.recentMatches[games].match_id + "?api_key=" + api_key)
                              this.apiCallAlert();
                              var currentMatchData = await currentMatchResponse.json()
                              this.setState({localPlayerForMatchStats: currentMatchData.players.find(player => player.account_id === this.props.playerID)});
                              let stunsRank = this.state.stunsRank + Math.round(this.state.localPlayerForMatchStats.stuns / gamesCount);
                              let TFRank = this.state.TFRank + Math.round(this.state.localPlayerForMatchStats.teamfight_participation / gamesCount * 100);
                              let winRate = this.state.winRate + (this.state.localPlayerForMatchStats.win / gamesCount * 100);
                              let midPlayersGold = currentMatchData.players.filter(player => player.lane_role === 2)
                              let midPlayersXP = currentMatchData.players.filter(player => player.lane_role === 2)
                              this.setState({midPlayersGold: midPlayersGold})
                              this.setState({midPlayersXP: midPlayersXP})
                              if(midPlayersGold[0].gold_t != "undefined") {midPlayersGold = this.state.midPlayersGold[0].gold_t[9] - this.state.midPlayersGold[1].gold_t[9]};
                              if(midPlayersXP[0] != undefined) {midPlayersXP = this.state.midPlayersXP[0].xp_t[9] - this.state.midPlayersXP[1].xp_t[9]};
                              this.setState({midPlayersGold: midPlayersGold})
                              this.setState({midPlayersXP: midPlayersXP})
                              this.state.midDiffArray.push({gold: this.state.midPlayersGold, xp: this.state.midPlayersXP, won: Boolean(this.state.localPlayerForMatchStats.win)});
                              this.setState({stunsRank: stunsRank})
                              this.setState({TFRank: TFRank})
                              this.setState({winRate: winRate})
                                    
                        {/* Ward Lifespan calculation and display */}

                              // first we figure out who the current player is in this match, which is roundabout but just how the API works
                              // Next, we loop through the obs_left_log array and grab all the ehandles and expiration times
                              // We do it in this order because if a ward doesn't expire by the end of the game, it's not on the obs_left_log array and we don't want to deal with it
                              if(this.state.localPlayerForMatchStats.obs_left_log != null) {
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

                        }
                        {/* Follow up warding math, and role rank calculations */}
                              // And finally, we calculate the average ward lifespan based on an array of % lifespans
                              for(w4 = 0; w4 < this.state.wardsTimingArray.length; w4++) {
                                          if(0 <=this.state.wardsTimingArray[w4].duration <= 100) {
                                                this.setState({wardLifespan: (this.state.wardLifespan + this.state.wardsTimingArray[w4].duration)})

                                          }

                                          if(!Number.isInteger(this.state.wardLifespan)) {
                                                this.setState({wardLifespan: 0})
                                                console.log("no wards")
                                          }
                                    }
                        {/* Role rank calculations */}
                              this.setState({wardsRank: Math.floor(this.state.wardLifespan / gamesCount)})
                              this.carryRankCalc(this.state.farmingRank, this.state.localPlayerForMatchStats.teamfight_participation, this.state.csRank, this.state.localPlayerForMatchStats.xp_per_min, this.state.localKDA, 5, 10)
                              this.supportRankCalc(this.state.localPlayerForMatchStats.stuns, this.state.localPlayerForMatchStats.teamfight_participation, this.state.wardLifespan, this.state.localPlayerForMatchStats.xp_per_min, this.state.localKDA, 5, 10)
                              this.setState({wardLifespan: Math.floor(this.state.wardLifespan / this.state.wardCount)});

                        {/* Do some calculations to add the mid XP and net worth differences to the average */}
                        for(var i = 0; i < gamesCount; i++) {
                              if(this.state.localPlayerForMatchStats.isRadiant) {
                                    let midNWDiff = this.state.midNWDiff + (this.state.midDiffArray[i].gold / gamesCount);
                                    let midXPDiff = this.state.midXPDiff + (this.state.midDiffArray[i].xp / gamesCount);
                                    this.setState({midXPDiff: midXPDiff})
                                    this.setState({midNWDiff: midNWDiff})
                              } else {
                                    let midNWDiff = this.state.midNWDiff - (this.state.midDiffArray[i].gold / gamesCount);
                                    let midXPDiff = this.state.midXPDiff - (this.state.midDiffArray[i].xp / gamesCount);
                                    this.setState({midXPDiff: midXPDiff})
                                    this.setState({midNWDiff: midNWDiff})
                              }
                        }


                        this.setState({midNWDiff: (this.state.midNWDiff).toFixed(1)})
                        this.setState({midXPDiff: (this.state.midXPDiff).toFixed(1)})
                  }

            } else {
                  console.log("Error code:", recentMatchesResponse.status)
                  alert("Uh oh, something went wrong with the latest match data.")
            }
      }

      timedUpdate() {
            {/*check to see who is winning the gpm/cs/kda contests */}
            for (var i = 0; i < playerIDList.length; i++) {

                  if (csRankingArray.length == playerIDList.length && document.querySelectorAll('div.cs span.rank')[i].textContent == csWinner) {
                        document.querySelectorAll('div.cs')[i].setAttribute('id', 'leader');
                  }
                  if (kdaRankingArray.length == playerIDList.length && document.querySelectorAll('div.kda span.rank')[i].textContent == kdaWinner) {
                        document.querySelectorAll('div.kda')[i].setAttribute('id', 'leader');
                  }
                  if (farmRankingArray.length == playerIDList.length && document.querySelectorAll('div.farm span.rank')[i].textContent == farmWinner) {
                        document.querySelectorAll('div.farm')[i].setAttribute('id', 'leader');
                  }
                  if (document.querySelectorAll('div.support-score span.rank')[i].textContent.split(" ")[1] == supportWinner) {
                        document.querySelectorAll('div.support-score')[i].setAttribute('id', 'leader');
                  } else if (document.querySelectorAll('div.support-score span.rank')[i].textContent.split(" ")[1] != supportWinner) {
                        document.querySelectorAll('div.support-score')[i].setAttribute('id', '');
                  }
                  if (document.querySelectorAll('div.carry-score span.rank')[i].textContent.split(" ")[1] == carryWinner) {
                        document.querySelectorAll('div.carry-score')[i].setAttribute('id', 'leader');
                  } else if (document.querySelectorAll('div.carry-score span.rank')[i].textContent.split(" ")[1] != carryWinner) {
                        document.querySelectorAll('div.carry-score')[i].setAttribute('id', '');
                  }
            }
      }

      componentWillMount() {
      }

      componentDidUpdate() {
            this.timedUpdate()
      }

      carryRankCalc(gpm, tf, cs, xpm, kills, deaths, assists) {
            // Carry score: gpm * TF% * cs * (k-d)
            let carryRank = Math.round((gpm*gpmWeightCarry)+(tf*tfWeightCarry)+(cs*csWeightCarry)+(xpm*xpmWeightCarry)+(kills*killsWeightCarry)+(deaths*deathsWeightCarry)+(assists*assistsWeightCarry))
            this.setState({carryRank: carryRank})

            if(this.state.carryRank >= carryWinner) {
                  carryWinner = this.state.carryRank;
            }
      }

      supportRankCalc(stuns, tf, wards, xpm, kills, deaths, assists) {
            // Carry score: gpm * TF% * cs * (k-d)
            let supportRank = Math.round((stuns*stunsWeightSupport)+(tf*tfWeightSupport)+(wards*wardingWeightSupport)+(xpm*xpmWeightSupport)+(kills*killsWeightSupport)+(deaths*deathsWeightSupport)+(assists*assistsWeightSupport))
            this.setState({supportRank: supportRank})

            if(this.state.supportRank >= supportWinner) {
                  supportWinner = this.state.supportRank;
            }
      }

      apiCallAlert(URL) {
            outCallTicker++;
            console.log("Outgoing request: " + outCallTicker)
      }


      render() {
            return (
                  <div className = "leaderboard-detail-item">
                        <div className = "player-info">
                              <img src = {this.state.playerPic} className = "player-pic"/>
                              <div className = "name-block">
                                    <div className = "player-name">
                                          <a className = "nameLink" href= {this.state.playerExternalURL}  target = "_blank">{this.state.playerName}</a>
                                    </div>
                                    <div className = "rank-estimate">MMRE: <span className="mmr">{this.state.playerRank}</span></div>
                              </div>
                        </div>
                        <div className = "ranks-container">
                              <div className = "farm rank-box"><span className = "rank">{this.state.farmingRank}</span><span></span></div>
                              <div className = "cs rank-box"><span className = "rank">{this.state.csRank}</span><span>&nbsp;Lh/10</span></div>
                              <div className = "kda rank-box"><span className = "rank">{this.state.kdaRank}</span><span>&nbsp;kda</span></div>
                              {/* <div className = "ward-life rank-box"><span>ObD:&nbsp;</span><span className = "rank">{this.state.wardLifespan}%&nbsp;/&nbsp;{this.state.wardsTimingArray.length}</span></div> */}
                              <div className = "carry-score rank-box has-hover">
                                    <span className = "rank">{this.state.carryRank}</span>
                                    <div className = "rank-box-hover">
                                          <span className="hover-rank-text hover-rank-header">{gamesCount}-game Avg:</span>
                                          <span className="hover-rank-text">GPM: {this.state.farmingRank}<span className = "hover-sub-score">({(gpmWeightCarry * this.state.farmingRank).toFixed(2)})</span></span>
                                          <span className="hover-rank-text">TF: {this.state.TFRank}%<span className = "hover-sub-score">({(tfWeightCarry * this.state.TFRank).toFixed(2)})</span></span>
                                          <span className="hover-rank-text">CS: {this.state.csRank}Lh<span className = "hover-sub-score">({(csWeightCarry * this.state.csRank).toFixed(2)})</span></span>
                                    </div>
                              </div>
                              <div className = "support-score rank-box has-hover">
                                    <span className = "rank">{this.state.supportRank}</span>
                                    <div className = "rank-box-hover">
                                          <span className="hover-rank-text hover-rank-header">{gamesCount}-game Avg:</span>
                                          <span className="hover-rank-text">Stuns: {this.state.stunsRank}s <span className = "hover-sub-score">({(stunsWeightSupport * this.state.stunsRank).toFixed(2)})</span></span>
                                          <span className="hover-rank-text">TF: {this.state.TFRank}% <span className = "hover-sub-score">({(tfWeightSupport * this.state.TFRank).toFixed(2)})</span></span>
                                          <span className="hover-rank-text">Vision: {this.state.wardsRank}s <span className = "hover-sub-score">({(wardingWeightSupport * this.state.wardsRank).toFixed(2)})</span></span>
                                    </div>
                              </div>
                              <div className = "winrate-and-mid-net rank-box">
                                    <span className = "rank">{this.state.midNWDiff} / {this.state.winRate}%</span>
                              </div>
                              <div className = "xp-and-mid-net rank-box">
                                    <span className = "rank">{this.state.midXPDiff} / {this.state.winRate}%</span>
                              </div>
                        </div>
                  </div>
            )
      }
}	