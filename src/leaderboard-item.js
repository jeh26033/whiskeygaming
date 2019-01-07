import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const api_key = "f4903c56-7589-4d13-9a36-6a8fac44f2d1";
const latestMatchesURL = "https://api.opendota.com/api/players/22319665/matches?limit=1&api_key=" + api_key;
var lastMatchID = null;
var lastMatchURL = "https://api.opendota.com/api/matches/"

export default class Navbar extends Component {

      constructor() {
            super();
            this.state = {
                  latestMatch: null,
                  latestPlayerData: null,
                  kda: null,
                  perMinute: null,
                  cs: [],
                  playerSlot: null,
            }
      };

      componentDidMount() {
            fetch(latestMatchesURL)
            .then(response => response.json())
            .then(data => {
                  this.setState({lastMatchID: data[0].match_id})
                  lastMatchURL = lastMatchURL + this.state.lastMatchID +"/"+ api_key
                  this.setState({playerSlot: data[0].player_slot});
                  return lastMatchURL;
            })
            .then(data =>{
                  fetch(lastMatchURL)
                  .then(response => response.json())
                  .then(data =>{
                        console.log(data)
                        this.setState({latestMatch: data});
                        this.setState({latestPlayerData: data.players[this.state.playerSlot]})
                        let kda =
                              <div className = "hero-kda">
                                    <span className="hero-kills">{this.state.latestPlayerData.kills} </span>&nbsp;/&nbsp;
                                    <span className = "hero-deaths">{this.state.latestPlayerData.deaths}</span>&nbsp;/&nbsp;
                                    <span className = "hero-assists">{this.state.latestPlayerData.assists}</span>
                              </div>
                        this.setState({kda: kda});
                        console.log(this.state.latestPlayerData);
                        let perMinute = 
                              <div className = "per-minute">
                                    <span className="hero-gpm">{this.state.latestPlayerData.gold_per_min}</span>&nbsp;/&nbsp; 
                                    <span className = "hero-xpm">{this.state.latestPlayerData.xp_per_min}</span>
                              </div>
                        this.setState({perMinute: perMinute});
                        console.log(this.state.perMinute);
                  });
            })
            
      };


      render() {
            return (
                  <div className = "leaderboard-item">
                  	<div className = "player-info">
                  		<img src = "/img/rubick_test.png" className = "hero-icon" />
                              <div className = "name-block">
                                    <div className = "player-name">
                                          <a href="https://www.dotabuff.com">Dark Arbiter</a>
                                    </div>
                                    <div className = "hero-name">Rubick</div>
                              </div>
                  	</div>
                        <div className = "hero-role">SUPPORT</div>
                  	<div className = "hero-statline">
                              <div className = "hero-level">19</div>
                  		{this.state.kda}
                              <div className = "hero-cs"><span className = "hero-lh">104</span>/<span className = "hero-denies">10</span></div>
                  		{this.state.perMinute}
                              <div className = "hero-networth">25.4k</div>
                  	</div>
                  	<div className = "hero-items-list">
                  		<img src = "test-item.png" className = "statline-item" />
                  		<img src = "test-item.png" className = "statline-item" />
                  		<img src = "test-item.png" className = "statline-item" />
                  		<img src = "test-item.png" className = "statline-item" />
                  		<img src = "test-item.png" className = "statline-item" />
                  		<img src = "test-item.png" className = "statline-item" />
                  	</div>
                  </div>
            )
      }
}	