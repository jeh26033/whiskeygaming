import React, { Component } from 'react';
import apiKey from './api-key.json'
const api_key = apiKey[0];
const lastMatchURL = "https://api.opendota.com/api/matches/"
var getHeroURL = "https://api.opendota.com/api/herostats?api_key=" + api_key;
var itemConstants = Object.entries(require('./item_constants.json'));

export default class LatestGameComp extends Component {

      constructor(playerID) {
            super(playerID);
            this.state = {
                  latestMatch: null,
                  latestPlayerData: null,
                  playerSlot: null,
                  latestHeroID: 0,
                  text_role: null,
                  latestMatchURL: null,
                  itemsArray: [],
                  latestMatchesURL: "https://api.opendota.com/api/players/" + this.props.playerID + "/matches?limit=1&api_key=" + api_key,
                  localLastMatchURL: null,
                  team: null,
                  won: null,
            }
      };

      componentDidMount() {
            fetch(this.state.latestMatchesURL)
            .then(response => response.json())
            .then(data => {
                  this.setState({lastMatchID: data[0].match_id})
                  let localLastMatchURL = lastMatchURL + this.state.lastMatchID +"?api_key="+ api_key
                  this.setState({playerSlot: data[0].player_slot});
                  if (this.state.playerSlot < 10) {
                        this.setState({team: "Radiant"})
                  } else {
                        this.setState({team: "Dire"})
                  };
                  this.setState({localLastMatchURL: localLastMatchURL})
                  return localLastMatchURL;
            })
            .then(data =>{
                  fetch(this.state.localLastMatchURL)
                  .then(response => response.json())
                  .then(data =>{
                        this.setState({latestMatch: data});
                        this.setState({latestMatchURL: "https://www.dotabuff.com/matches/" + this.state.latestMatch.match_id})
                        this.setState({latestPlayerData: data.players[this.state.playerSlot]})
                        let latestPlayerData = data.players.find(player => player.player_slot === this.state.playerSlot);
                        this.setState({latestPlayerData: latestPlayerData});           
                        this.setState({latestHeroID: this.state.latestPlayerData.hero_id});

                        if (this.state.team === "Radiant" && data.radiant_win) {
                              this.setState({won: "won"});
                        } else if(this.state.team === "Dire" && !data.radiant_win) {
                              this.setState({won: "won"});
                        } else {
                              this.setState({won: "lost"});
                        }

                  {/* game duration */}
                        let duration = 
                              <div className = "duration">{Math.floor(this.state.latestMatch.duration / 60)}:{("0"+((this.state.latestMatch.duration)-Math.floor(this.state.latestMatch.duration / 60) * 60).toString().slice(-1))}</div>
                        this.setState({duration: duration});

                  {/* Now we pull and rendering a bunch of stats */}
                        let kda =
                              <div className = "hero-kda">
                                    <span className="hero-kills">{this.state.latestPlayerData.kills}</span><span>&nbsp;/&nbsp;</span>
                                    <span className = "hero-deaths">{this.state.latestPlayerData.deaths}</span><span>&nbsp;/&nbsp;</span>
                                    <span className = "hero-assists">{this.state.latestPlayerData.assists}</span>
                              </div>
                        this.setState({kda: kda});
                        let perMinute = 
                              <div className = "per-minute">
                                    <span className="hero-gpm">{this.state.latestPlayerData.gold_per_min}</span><span>&nbsp;/&nbsp;</span>
                                    <span className = "hero-xpm">{this.state.latestPlayerData.xp_per_min}</span>
                              </div>
                        this.setState({perMinute: perMinute});
                        let cs = 
                              <div className = "hero-cs">
                                    <span className = "hero-lh">{this.state.latestPlayerData.last_hits}</span><span>&nbsp;/&nbsp;</span>
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
                        if(this.state.latestPlayerData.lane_role > 3) {
                              this.setState({text_role: "ROAMING"});
                        } else if (this.state.latestPlayerData.lane_role === 3) {
                              this.setState({text_role: "OFFLANE"});
                        } else if (this.state.latestPlayerData.lane_role === 2) {
                              this.setState({text_role: "MID"});
                        } else {
                              this.setState({text_role: "SAFELANE"});
                        }

                        let role = 
                              <div className="role-container"><div className = "hero-role"><span className="lane" id={this.state.roleStyle}>{(this.state.text_role)}</span><br /><span className = "role-in-lane">{this.state.roleStyle}</span></div></div>
                        this.setState({role: role});

                  {/* Now we pull the items into an array */}

                        this.state.itemsArray.push(this.state.latestPlayerData.item_0);
                        this.state.itemsArray.push(this.state.latestPlayerData.item_1);
                        this.state.itemsArray.push(this.state.latestPlayerData.item_2);
                        this.state.itemsArray.push(this.state.latestPlayerData.item_3);
                        this.state.itemsArray.push(this.state.latestPlayerData.item_4);
                        this.state.itemsArray.push(this.state.latestPlayerData.item_5);

                  {/* we search the constant database for the correct items */}

                        for (var i = 0; i < 6; i++) {
                              let item = itemConstants.find(item => item[1].id === this.state.itemsArray[i]);
                              this.setState({item: item});
                              this.state.itemsArray.push(this.state.item);
                        }

                  {/* now we clear the first 6 elements of the array */}

                        for (i = 0; i < 6; i++) {
                              this.state.itemsArray.shift();
                        }

                        for (i = 0; i < 6; i++) {
                              if(this.state.itemsArray[i] !== undefined) {
                                    this.state.itemsArray.push(<img src = {"/images/items/" + this.state.itemsArray[i][1].img.split("/")[5]} className = "statline-item" />);
                              }
                        }

                        for (i = 0; i < 6; i++) {
                              this.state.itemsArray.shift();
                        }


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
                              
                              let latestHeroData = data.find(hero => hero.id === (this.state.latestHeroID));
                              this.setState({latestHeroData: latestHeroData});
                              if(this.state.latestHeroData.roles.indexOf("Carry") >= 0) {
                                    if (this.state.text_role == "MID") {
                                          this.setState({text_role: ""});
                                          this.setState({roleStyle: "MID"});
                                    } else if (this.state.text_role == "SAFELANE") {
                                          this.setState({text_role: ""});
                                          this.setState({roleStyle: "CARRY"});
                                    } else {
                                          this.setState({text_role: ""});
                                          this.setState({roleStyle: "OFFLANE"});
                                    }
                              } else {
                                    this.setState({roleStyle: "SUPPORT"});
                              }

                              let role = 
                              <div className="role-container"><div className = "hero-role"><span className="lane" id={this.state.roleStyle}>{(this.state.text_role)}</span><br /><span className = "role-in-lane">{this.state.roleStyle}</span></div></div>
                        this.setState({role: role});

                        {/* some quick math to trim the hero icon filepath to something usable */}
                              this.setState({trimLength: this.state.latestHeroData.icon.length - 26});
                              this.setState({heroIcon: (this.state.latestHeroData.icon).slice((this.state.latestHeroData.icon).length-this.state.trimLength, this.state.latestHeroData.icon.length)})
                              this.setState({heroIcon: "/images/heroes/" + this.state.heroIcon.split("_")[0]+".png"})
                              this.setState({playerURL: "https://www.dotabuff.com/players/"+ this.state.latestPlayerData.account_id});

                              let playerInfo = 
                                    <div className = "player-info">
                                          <a className = "matchLink" href={this.state.latestMatchURL}  target = "_blank"><img src = {this.state.heroIcon} className = "hero-icon"/></a>
                                          <div className = "name-block">
                                                <div className = "player-name">
                                                      <a href= {this.state.playerURL} target = "_blank">{this.state.latestPlayerData.personaname}</a>
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
                  <div className = "latest-game-item"  id={this.state.won}>
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
                        {this.state.duration}
                  </div>
            )
      }
}	