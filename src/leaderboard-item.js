import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const api_key = "f4903c56-7589-4d13-9a36-6a8fac44f2d1";
const latestMatchesURL = "https://api.opendota.com/api/players/22319665/matches?limit=1&api_key=" + api_key;
var lastMatchID = null;
var lastMatchURL = "https://api.opendota.com/api/matches/"
var getHeroURL = "https://api.opendota.com/api/herostats/"

export default class Navbar extends Component {

      constructor() {
            super();
            this.state = {
                  latestMatch: null,
                  latestPlayerData: null,
                  playerSlot: null,
                  latestHeroID: 0,
                  text_role: null,
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
                        this.setState({latestHeroID: this.state.latestPlayerData.hero_id})
                        console.log(getHeroURL);

                  {/* Now we pull and rendering a bunch of stats */}
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
                        let cs = 
                              <div className = "hero-cs">
                                    <span className = "hero-lh">{this.state.latestPlayerData.last_hits}</span>&nbsp;/&nbsp;
                                    <span className = "hero-denies">{this.state.latestPlayerData.denies}</span>
                              </div>
                        this.setState({cs: cs});
                        let netWorth = 
                              <div className = "hero-networth"> {(this.state.latestPlayerData.total_gold / 1000).toFixed(1)}k </div>
                        this.setState({netWorth: netWorth});
                        let level = 
                              <div className = "hero-level"> {(this.state.latestPlayerData.level)} </div>
                        this.setState({level: level});

                  {/* Here's where we determine the text value of the role ID */}
                        if(this.state.latestPlayerData.lane_role < 3) {
                              this.setState({text_role: "SUPPORT"});
                        } else if (this.state.latestPlayerData.lane_role = 3) {
                              this.setState({text_role: "OFFLANE"});
                        } else if (this.state.latestPlayerData.lane_role = 2) {
                              this.setState({text_role: "MID LANE"});
                        } else {
                              this.setState({text_role: "SAFELANE"});
                        }

                        let role = 
                              <div className = "hero-role"> {(this.state.text_role)} </div>
                        this.setState({role: role});

                  {/* Now we have some fun pulling hero data */}
                  
                  }).then(data => {
                        fetch(getHeroURL)
                        .then(response => response.json())
                        .then(data => {
                              this.setState({latestHeroData: data[this.state.latestHeroID-2]});
                              console.log(this.state.latestHeroData);

                        {/* some quick math to trim the hero icon filepath to something usable */}
                              this.setState({trimLength: this.state.latestHeroData.icon.length - 26});
                              this.setState({heroIcon: (this.state.latestHeroData.icon).slice((this.state.latestHeroData.icon).length-this.state.trimLength, this.state.latestHeroData.icon.length)})
                              this.setState({heroIcon: "/images/heroes/" + this.state.heroIcon.split("_")[0]+".png"})
                              console.log(this.state.heroIcon);
                              this.setState({playerURL: "https://www.dotabuff.com/players/"+ this.state.latestPlayerData.account_id});

                              let playerInfo = 
                                    <div className = "player-info">
                                          <img src = {this.state.heroIcon} className = "hero-icon" />
                                          <div className = "name-block">
                                                <div className = "player-name">
                                                      <a href= {this.state.playerURL} >{this.state.latestPlayerData.personaname}</a>
                                                </div>
                                                <div className = "hero-name">{this.state.latestHeroData.localized_name}</div>
                                          </div>
                                    </div>
                              this.setState({playerInfo: playerInfo});
                        })
                  })

            })
            
      };


      render() {
            return (
                  <div className = "leaderboard-item">
                  	{this.state.playerInfo}
                        {this.state.role}
                  	<div className = "hero-statline">
                              {this.state.level}
                  		{this.state.kda}
                              {this.state.cs}
                  		{this.state.perMinute}
                              {this.state.netWorth}
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