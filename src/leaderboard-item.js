import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const api_key = "f4903c56-7589-4d13-9a36-6a8fac44f2d1";
var lastMatchID = null;
var lastMatchURL = "https://api.opendota.com/api/matches/"
var getHeroURL = "https://api.opendota.com/api/herostats/"
var itemConstants = Object.entries(require('./item_constants.json'));

export default class Navbar extends Component {

      constructor(playerID) {
            super(playerID);
            this.state = {
                  latestMatch: null,
                  latestPlayerData: null,
                  playerSlot: null,
                  latestHeroID: 0,
                  text_role: null,
                  itemsArray: [],
                  latestMatchesURL: "https://api.opendota.com/api/players/" + this.props.playerID + "/matches?limit=1&api_key=" + api_key,
            }
      };

      componentDidMount() {
            fetch(this.state.latestMatchesURL)
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

                  //{/* Now we pull the items into an array */}

                        this.state.itemsArray.push(this.state.latestPlayerData.item_0);
                        this.state.itemsArray.push(this.state.latestPlayerData.item_1);
                        this.state.itemsArray.push(this.state.latestPlayerData.item_2);
                        this.state.itemsArray.push(this.state.latestPlayerData.item_3);
                        this.state.itemsArray.push(this.state.latestPlayerData.item_4);
                        this.state.itemsArray.push(this.state.latestPlayerData.item_5);
                        console.log(this.state.itemsArray);

                  {/* we search the constant database for the correct items */}

                        for (var i = 0; i < 6; i++) {
                              let item = itemConstants.find(item => item[1].id == this.state.itemsArray[i]);
                              this.setState({item: item});
                              this.state.itemsArray.push(this.state.item);
                        }

                  {/* now we clear the first 6 elements of the array */}

                        for (var i = 0; i < 6; i++) {
                              this.state.itemsArray.shift();
                        }

                        for (var i = 0; i < 6; i++) {
                              if(this.state.itemsArray[i] != undefined) {
                                    this.state.itemsArray.push(<img src = {"/images/items/" + this.state.itemsArray[i][1].img.split("/")[5]} className = "statline-item" />);
                              }
                        }

                        for (var i = 0; i < 6; i++) {
                              this.state.itemsArray.shift();
                        }

                        
                        console.log(this.state.itemsArray);

                        let itemsHTML =
                              <div className = "hero-items-list">
                                   { this.state.itemsArray }
                              </div>

                        this.setState({itemsHTML: itemsHTML});


                  //{/* Now we have some fun pulling hero data */}
                  
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
                  	{this.state.itemsHTML}
                  </div>
            )
      }
}	